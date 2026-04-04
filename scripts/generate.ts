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

async function main() {
  // Clean src/
  await rm(SRC_DIR, { recursive: true, force: true });
  await mkdir(SRC_DIR, { recursive: true });

  // Write the shared createIcon factory
  await writeFile(
    join(SRC_DIR, "createIcon.tsx"),
    `import { splitProps, mergeProps, type JSX, type Component } from "solid-js";

export type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

export interface PhIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
  weight?: IconWeight;
  mirrored?: boolean;
}

export function createIcon(weights: Record<IconWeight, string>): Component<PhIconProps> {
  return function Icon(props: PhIconProps): JSX.Element {
    const merged = mergeProps(
      { size: "1em", color: "currentColor", weight: "regular" as IconWeight, mirrored: false },
      props
    );
    const [local, svgProps] = splitProps(merged, ["size", "color", "weight", "mirrored"]);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill={local.color}
        width={local.size}
        height={local.size}
        style={local.mirrored ? { transform: "scale(-1, 1)" } : undefined}
        {...svgProps}
        // biome-ignore lint: innerHTML is safe here — content is generated from trusted SVG source files
        innerHTML={weights[local.weight]}
      />
    );
  };
}
`
  );

  // Collect all SVGs grouped by icon name
  const iconMap = new Map<string, { weight: Weight; inner: string; raw: string }[]>();

  for (const weight of WEIGHTS) {
    const dir = join(CORE_DIR, weight);
    let files: string[];
    try {
      files = (await readdir(dir)).filter((f) => f.endsWith(".svg"));
    } catch {
      console.warn(`Skipping weight "${weight}" — directory not found`);
      continue;
    }

    for (const file of files) {
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

      if (!iconMap.has(rawName)) {
        iconMap.set(rawName, []);
      }
      iconMap.get(rawName)!.push({ weight, inner, raw: svg });
    }
  }

  const allExports: string[] = [];
  let iconCount = 0;

  for (const [rawName, variants] of iconMap) {
    const pascal = toPascalCase(rawName);
    const iconName = `Ph${pascal}Icon`;

    // Build weight map entries
    const weightEntries = WEIGHTS.map((w) => {
      const variant = variants.find((v) => v.weight === w);
      if (!variant) return null;
      return `  ${w}: \`${escapeForTemplateLiteral(variant.inner)}\``;
    }).filter(Boolean);

    // Use the regular weight SVG for preview, fall back to first available
    const previewVariant =
      variants.find((v) => v.weight === "regular") ?? variants[0];
    const preview = generatePreview(previewVariant.raw);

    const code = `import { createIcon } from "./createIcon.js";

export type { PhIconProps as ${iconName}Props } from "./createIcon.js";

/**
 * ![img](data:image/svg+xml;base64,${preview})
 */
export const ${iconName} = createIcon({
${weightEntries.join(",\n")}
});
`;

    await writeFile(join(SRC_DIR, `${iconName}.ts`), code);
    allExports.push(`export { ${iconName} } from "./${iconName}.js";`);
    allExports.push(`export type { ${iconName}Props } from "./${iconName}.js";`);
    iconCount++;
  }

  // Write barrel index
  allExports.sort();
  allExports.unshift(
    `export type { IconWeight, PhIconProps } from "./createIcon.js";`,
    `export { createIcon } from "./createIcon.js";`
  );
  await writeFile(join(SRC_DIR, "index.ts"), allExports.join("\n") + "\n");

  console.log(`Generated ${iconCount} icon components (${WEIGHTS.length} weights each)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
