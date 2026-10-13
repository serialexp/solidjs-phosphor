import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { resolve } from "node:path";
import { readdirSync } from "node:fs";

// Build entry points: index + createIcon + every icon file. Declaration files
// (svgAttributes.d.ts) have no runtime and are copied by scripts/copy-jsx.mjs.
const srcDir = resolve(__dirname, "src");
const entries: Record<string, string> = {};
for (const file of readdirSync(srcDir)) {
  if (file.endsWith(".d.ts")) continue;
  if (file.endsWith(".ts") || file.endsWith(".tsx")) {
    const name = file.replace(/\.tsx?$/, "");
    entries[name] = resolve(srcDir, file);
  }
}

export default defineConfig({
  plugins: [solid()],
  build: {
    lib: {
      entry: entries,
      formats: ["es"],
    },
    outDir: "dist",
    rollupOptions: {
      // Keep `#createIcon` external so the literal specifier survives into the
      // published icon files; the consumer's resolver then picks the dom/ssr or
      // pre-compiled variant via the `imports` map conditions. If Rollup resolved
      // it here, the `solid` indirection would be baked away and SSR would break.
      external: ["solid-js", "solid-js/web", "solid-js/store", "#createIcon"],
      output: {
        preserveModules: false,
        entryFileNames: "[name].js",
      },
    },
    target: "esnext",
    minify: false,
  },
});
