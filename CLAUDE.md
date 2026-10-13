# solidjs-phosphor

Auto-generated Phosphor Icons for SolidJS. `scripts/generate.ts` is the source of
truth: it reads `phosphor-core/assets/**` and writes the `src/` tree (the shared
`createIcon` factory + one file per icon + the barrel `index.ts`). `src/` is
committed but generated — never hand-edit icon files; change the generator and
regenerate. `dist/` is gitignored and built by `pnpm build` (Vite + `tsgo` for
`.d.ts`).

## SSR / `#createIcon`

Only `createIcon` contains JSX; the 1,500 icon files are plain re-exports. To keep
the package SSR-safe, JSX must reach Solid consumers **uncompiled** so their
compiler emits dom-on-client / ssr-on-server. Mechanism:

- Icons import `createIcon` via the internal `#createIcon` specifier (package
  `imports` map), which resolves to `dist/createIcon.jsx` (raw JSX) under the
  `solid` condition and `dist/createIcon.js` (pre-compiled DOM) by `default`.
- `#createIcon` is marked **external** in `vite.config.ts` so the literal
  specifier survives into published files — do not remove that, or the condition
  is baked away and SSR breaks.
- `exports["."]` carries a `solid` condition so vite-plugin-solid detects us and
  transforms (rather than esbuild-prebundles) the package.
- `tsconfig` `paths` maps `#createIcon` → `src/createIcon.tsx` for our own
  typecheck/emit only; there is intentionally no shipped `source` condition.

Do not go back to shipping a single pre-compiled DOM build as the only entry —
that is what caused hydration mismatches (compiled `template()`/`spread()` throws
"Client-only API called on the server side").

## Solid 1.x and 2.x from one release

One release serves both majors. Keep it that way:

- **Runtime:** `createIcon` imports nothing from `solid-js`. Solid 1.x has
  `splitProps`/`mergeProps`, Solid 2.x has `omit`/`merge`, and neither pair
  exists in both. Defaults are applied inline with `??`, and the attributes to
  spread come from a local `svgAttributes` proxy that reads through to `props`.
  On Solid 2.x the `solid` condition (raw JSX) is the only working path. The
  pre-compiled `default` build imports the Solid 1.x runtime (`solid-js/web`).
- **Types:** Solid 1.x keeps the JSX namespace in `solid-js` and 2.x keeps it in
  `@solidjs/web`. `src/svgAttributes.d.ts` imports both under `@ts-ignore` and
  picks whichever resolved. It is a hand-written `.d.ts` because declaration
  emit strips the `@ts-ignore` comments. `scripts/copy-jsx.mjs` copies it into
  `dist/`, and `vite.config.ts` skips `.d.ts` files as entries. Do not declare
  `@solidjs/web` as an (optional) peer dependency: pnpm then auto-installs it
  into this repo, and our own type check flips to the Solid 2.x branch.
- **Verify on both majors before releasing a `createIcon` change.** Set up one
  consumer project on Solid 1.9 and one on Solid 2 (`@solidjs/web` plus
  `@solidjs/vite-plugin`), both installing the `pnpm pack` tarball. In each,
  run a strict type check (`skipLibCheck: false`, with `@ts-expect-error` cases
  for a bad weight and an unknown attribute), an SSR render, and a client
  render that updates `size`, `class`, `weight` and `mirrored` reactively.
  Build the SSR side with `solid({ ssr: true })`, or the factory compiles for
  the DOM.

## Publishing

CI: `.github/workflows/update-and-publish.yml` (weekly Mon 06:00 UTC + manual
`workflow_dispatch`). It clones upstream, runs `generate` + `check`, then **only
publishes if `git diff src/` is non-empty** — i.e. only when upstream
phosphor-core changed the generated icon output. Versioning is automatic: mirror
upstream `major.minor`, increment our `patch` (reset patch to `.0` when upstream
`major.minor` changes). `pnpm publish` runs `prepublishOnly` (generate + check +
build), so `dist/` is always fresh.

**Auto-publish is enough when:** the change is *upstream icon content* (new or
changed icons). The weekly job ships it with a patch bump — nothing to do.

**You MUST force a release when:** the change does NOT alter generated
`src/` icon output but should still be released — e.g. build/packaging
(`package.json` exports/imports, `vite.config.ts`, `tsconfig.json`), the
`createIcon` implementation, generator logic, SSR/hydration fixes, README, or CI
itself. The weekly job regenerates against the same upstream, sees no `src/`
diff, and **skips publishing**, so these sit unreleased indefinitely. (Committed
generator output does not count: CI regenerates it and finds no diff.)

CI can only publish once it has an npm credential: an `NPM_TOKEN` repository
secret, or npm trusted publishing configured for this workflow. As of
2026-10-13 it has neither (a forced run got npm's unauthenticated
`404 Not Found - PUT`), so until that is set up, use the local release below.
With a credential in place, push the commits, then dispatch with `force`:

```sh
git push
gh workflow run update-and-publish.yml -f force=true
```

The job bumps the patch, publishes, commits `chore: release vX.Y.Z`, tags and
pushes. Pull afterwards.

Local manual release, which needs `npm login` as `aeolun` (mirrors the CI
convention; keep `major.minor` aligned with phosphor-core, only `patch` is ours):

```sh
pnpm run check
npm version patch --no-git-tag-version   # or major.minor.0 if matching a new upstream major.minor
pnpm publish --access public             # prepublishOnly rebuilds dist
NEW=$(jq -r .version package.json)
git add package.json && git commit -m "chore: release v${NEW}"
git tag "v${NEW}" && git push --follow-tags
```
