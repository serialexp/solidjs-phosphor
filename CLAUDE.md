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

**You MUST manually bump + publish when:** the change does NOT alter generated
`src/` icon output but should still be released — e.g. build/packaging
(`package.json` exports/imports, `vite.config.ts`, `tsconfig.json`), the
`createIcon` implementation, generator logic, SSR/hydration fixes, README, or CI
itself. The weekly job regenerates against the same upstream, sees no `src/`
diff, and **skips publishing**, so these sit unreleased indefinitely.

> Note: triggering `workflow_dispatch` does NOT help here — it still gates on the
> `src/` diff, so you can't use the button to force-release a packaging fix.

Manual release (mirrors the CI convention; keep `major.minor` aligned with
phosphor-core, only `patch` is ours):

```sh
pnpm run check
npm version patch --no-git-tag-version   # or major.minor.0 if matching a new upstream major.minor
pnpm publish --access public             # prepublishOnly rebuilds dist
NEW=$(jq -r .version package.json)
git add package.json && git commit -m "chore: release v${NEW}"
git tag "v${NEW}" && git push --follow-tags
```
