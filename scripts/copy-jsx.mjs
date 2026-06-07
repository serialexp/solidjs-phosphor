import { copyFile } from "node:fs/promises";
import { join } from "node:path";

// The raw, un-compiled JSX twin of createIcon is the target of the `solid`
// export condition (resolved via the `#createIcon` internal import). The Vite
// build empties dist/ and only compiles the .ts/.tsx entries, so this typeless
// .jsx file has to be copied into dist/ as a post-build step. Without it, a
// Solid-aware consumer would have nothing to compile for their SSR target.
const root = join(import.meta.dirname, "..");
const from = join(root, "src", "createIcon.jsx");
const to = join(root, "dist", "createIcon.jsx");

await copyFile(from, to);
console.log("Copied src/createIcon.jsx -> dist/createIcon.jsx");
