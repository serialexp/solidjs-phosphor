import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { resolve } from "node:path";
import { readdirSync } from "node:fs";

// Build entry points: index + createIcon + every icon file
const srcDir = resolve(__dirname, "src");
const entries: Record<string, string> = {};
for (const file of readdirSync(srcDir)) {
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
      external: ["solid-js", "solid-js/web", "solid-js/store"],
      output: {
        preserveModules: false,
        entryFileNames: "[name].js",
      },
    },
    target: "esnext",
    minify: false,
  },
});
