import { readdir, readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { join, basename } from "node:path";

const CORE_DIR = join(import.meta.dirname, "..", "phosphor-core", "assets");
const SRC_DIR = join(import.meta.dirname, "..", "src");

const WEIGHTS = ["thin", "light", "regular", "bold", "fill", "duotone"] as const;
type Weight = (typeof WEIGHTS)[number];

/** kebab-case → PascalCase: "arrow-clockwise" → "ArrowClockwise" */
function toPascalCase(kebab: string): string {
  return kebab
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

/** Extract inner content from <svg ...>CONTENT</svg> */
function extractSvgInner(svg: string): string {
  const match = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  return match?.[1]?.trim() ?? "";
}

/** Generate a base64 preview image for JSDoc (white bg, 20x20, black fill) */
function generatePreview(svgRaw: string): string {
  const preview = svgRaw.replace(
    /<svg.*?>/,
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="#000"><rect width="256" height="256" fill="#FFF" rx="40" ry="40"/>'
  );
  return Buffer.from(preview).toString("base64");
}

/** Escape a string for use inside a JS template literal */
function escapeForTemplateLiteral(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

/** Generate a .ts icon file that uses the createIcon factory */
function generateComponent(
  name: string,
  weight: Weight,
  svgInner: string,
  svgRaw: string
): { componentName: string; code: string } {
  const pascal = toPascalCase(name);
  const suffix = weight === "regular" ? "" : toPascalCase(weight);
  const componentName = `Ph${pascal}${suffix}`;

  const iconName = `${componentName}Icon`;
  const preview = generatePreview(svgRaw);
  const escapedInner = escapeForTemplateLiteral(svgInner);

  const code = `import { createIcon } from "./createIcon.js";

export type { PhIconProps as ${iconName}Props } from "./createIcon.js";

/**
 * ![img](data:image/svg+xml;base64,${preview})
 */
export const ${iconName} = createIcon(\`${escapedInner}\`);
`;

  return { componentName: iconName, code };
}

async function main() {
  // Clean src/
  await rm(SRC_DIR, { recursive: true, force: true });
  await mkdir(SRC_DIR, { recursive: true });

  // Write the shared createIcon factory (single .tsx file with all JSX)
  await writeFile(
    join(SRC_DIR, "createIcon.tsx"),
    `import { splitProps, mergeProps, type JSX, type Component } from "solid-js";

export interface PhIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export function createIcon(inner: string): Component<PhIconProps> {
  return function Icon(props: PhIconProps): JSX.Element {
    const merged = mergeProps({ size: "1em", color: "currentColor" }, props);
    const [local, svgProps] = splitProps(merged, ["size", "color"]);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill={local.color}
        width={local.size}
        height={local.size}
        {...svgProps}
        // biome-ignore lint: innerHTML is safe here — content is generated from trusted SVG source files
        innerHTML={inner}
      />
    );
  };
}
`
  );

  const allExports: string[] = [];
  const componentCount = { total: 0, byWeight: {} as Record<string, number> };

  for (const weight of WEIGHTS) {
    const dir = join(CORE_DIR, weight);
    let files: string[];
    try {
      files = (await readdir(dir)).filter((f) => f.endsWith(".svg"));
    } catch {
      console.warn(`Skipping weight "${weight}" — directory not found`);
      continue;
    }

    componentCount.byWeight[weight] = 0;

    for (const file of files) {
      // Strip weight suffix from filename: "gear-bold.svg" → "gear"
      const rawName = basename(file, ".svg").replace(
        new RegExp(`-${weight}$`),
        ""
      );

      const svg = await readFile(join(dir, file), "utf-8");
      const inner = extractSvgInner(svg);
      if (!inner) {
        console.warn(`Empty SVG: ${file}`);
        continue;
      }

      const { componentName, code } = generateComponent(rawName, weight, inner, svg);
      const outFile = join(SRC_DIR, `${componentName}.ts`);
      await writeFile(outFile, code);

      allExports.push(
        `export { ${componentName} } from "./${componentName}.js";`
      );
      allExports.push(
        `export type { ${componentName}Props } from "./${componentName}.js";`
      );
      componentCount.total++;
      componentCount.byWeight[weight]++;
    }
  }

  // Write barrel index
  allExports.sort();
  allExports.unshift(
    `export type { PhIconProps } from "./createIcon.js";`,
    `export { createIcon } from "./createIcon.js";`
  );
  await writeFile(join(SRC_DIR, "index.ts"), allExports.join("\n") + "\n");

  console.log(`Generated ${componentCount.total} components:`);
  for (const [weight, count] of Object.entries(componentCount.byWeight)) {
    console.log(`  ${weight}: ${count}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
