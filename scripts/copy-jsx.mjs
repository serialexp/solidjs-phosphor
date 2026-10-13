import { copyFile } from "node:fs/promises";
import { join } from "node:path";

// Files that ship verbatim, because neither the Vite build nor tsgo emits them:
//
// - createIcon.jsx: the raw, un-compiled JSX twin of createIcon, the target of
//   the `solid` export condition (resolved via the `#createIcon` internal
//   import). The Vite build empties dist/ and only compiles the .ts/.tsx
//   entries. Without it, a Solid-aware consumer would have nothing to compile
//   for their SSR target.
// - svgAttributes.d.ts: the hand-written types that pick the installed Solid
//   major's JSX namespace. dist/createIcon.d.ts imports it, and tsgo does not
//   emit .d.ts inputs.
const root = join(import.meta.dirname, "..");

for (const file of ["createIcon.jsx", "svgAttributes.d.ts"]) {
  await copyFile(join(root, "src", file), join(root, "dist", file));
  console.log(`Copied src/${file} -> dist/${file}`);
}
