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
    `import type { Component } from "solid-js";
import type { SvgAttributes } from "./svgAttributes";

export type { SvgAttributes };

export type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

export type PhIconProps = SvgAttributes & {
  size?: number | string;
  color?: string;
  weight?: IconWeight;
  mirrored?: boolean;
};

const ICON_PROPS: ReadonlySet<PropertyKey> = new Set(["size", "color", "weight", "mirrored"]);

/**
 * A live view of \`props\` without the icon's own props, to spread onto the
 * \`<svg>\`. Every read goes through to \`props\`, so the spread stays reactive.
 * It stands in for \`splitProps\` (Solid 1.x) and \`omit\` (Solid 2.x), neither
 * of which exists in both majors. The proxy target is an empty object so the
 * traps can never contradict the target's own property invariants.
 */
function svgAttributes(props: PhIconProps): SvgAttributes {
  const passes = (key: PropertyKey) =>
    !ICON_PROPS.has(key) && Reflect.getOwnPropertyDescriptor(props, key) !== undefined;
  return new Proxy({} as SvgAttributes, {
    get: (_, key) => (ICON_PROPS.has(key) ? undefined : Reflect.get(props, key)),
    has: (_, key) => !ICON_PROPS.has(key) && Reflect.has(props, key),
    ownKeys: () => Reflect.ownKeys(props).filter((key) => !ICON_PROPS.has(key)),
    getOwnPropertyDescriptor: (_, key) =>
      passes(key)
        ? { configurable: true, enumerable: true, get: () => Reflect.get(props, key) }
        : undefined,
  });
}

export function createIcon(weights: Record<IconWeight, string>): Component<PhIconProps> {
  return function Icon(props: PhIconProps) {
    const attributes = svgAttributes(props);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill={props.color ?? "currentColor"}
        width={props.size ?? "1em"}
        height={props.size ?? "1em"}
        style={props.mirrored ? { transform: "scale(-1, 1)" } : undefined}
        {...attributes}
        // biome-ignore lint: innerHTML is safe here — content is generated from trusted SVG source files
        innerHTML={weights[props.weight ?? "regular"]}
      />
    );
  };
}
`
  );

  // Write the SVG attribute types. Solid 1.x keeps the JSX namespace in
  // `solid-js`; Solid 2.x moved it to `@solidjs/web`, and each major lacks the
  // other's. This is a hand-written .d.ts rather than part of createIcon.tsx
  // because declaration emit drops the `@ts-ignore` comments that make one
  // failing import harmless. tsgo does not emit .d.ts inputs, so
  // scripts/copy-jsx.mjs copies it into dist/ next to createIcon.d.ts.
  await writeFile(
    join(SRC_DIR, "svgAttributes.d.ts"),
    `// Exactly one of these imports resolves. The other is an unresolved type,
// which IsUnresolved detects (\`unknown extends T\` holds only for any/unknown,
// and a real JSX.Element is neither).
// @ts-ignore -- Solid 1.x only: \`solid-js\` owns the JSX namespace.
import type { JSX as SolidOneJSX } from "solid-js";
// @ts-ignore -- Solid 2.x only: the web renderer owns the JSX namespace.
import type { JSX as SolidTwoJSX } from "@solidjs/web";

type IsUnresolved<T> = unknown extends T ? true : false;

/** \`<svg>\` attributes from whichever Solid major is installed. */
export type SvgAttributes =
  IsUnresolved<SolidTwoJSX.Element> extends true
    ? SolidOneJSX.SvgSVGAttributes<SVGSVGElement>
    : SolidTwoJSX.SvgSVGAttributes<SVGSVGElement>;
`
  );

  // Write the typeless JSX twin of createIcon. This is what the `solid` export
  // condition (via the `#createIcon` internal import) resolves to, so that a
  // Solid-aware consumer (vite-plugin-solid / SolidStart) compiles it for THEIR
  // target — DOM on the client, SSR on the server. Shipping pre-compiled DOM
  // code here is exactly what breaks SSR/hydration, so this file must stay raw
  // JSX. It is intentionally typeless: it is excluded from tsconfig (no .d.ts is
  // emitted from it; types come from createIcon.tsx) and is copied verbatim into
  // dist/ by scripts/copy-jsx.mjs after the Vite build.
  await writeFile(
    join(SRC_DIR, "createIcon.jsx"),
    `// No solid-js imports: this file must compile and run under Solid 1.x and 2.x.
// See createIcon.tsx for why svgAttributes replaces splitProps / omit.
const ICON_PROPS = new Set(["size", "color", "weight", "mirrored"]);

function svgAttributes(props) {
  const passes = (key) =>
    !ICON_PROPS.has(key) && Reflect.getOwnPropertyDescriptor(props, key) !== undefined;
  return new Proxy({}, {
    get: (_, key) => (ICON_PROPS.has(key) ? undefined : Reflect.get(props, key)),
    has: (_, key) => !ICON_PROPS.has(key) && Reflect.has(props, key),
    ownKeys: () => Reflect.ownKeys(props).filter((key) => !ICON_PROPS.has(key)),
    getOwnPropertyDescriptor: (_, key) =>
      passes(key)
        ? { configurable: true, enumerable: true, get: () => Reflect.get(props, key) }
        : undefined,
  });
}

export function createIcon(weights) {
  return function Icon(props) {
    const attributes = svgAttributes(props);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill={props.color ?? "currentColor"}
        width={props.size ?? "1em"}
        height={props.size ?? "1em"}
        style={props.mirrored ? { transform: "scale(-1, 1)" } : undefined}
        {...attributes}
        innerHTML={weights[props.weight ?? "regular"]}
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

    const code = `import { createIcon } from "#createIcon";

export type { PhIconProps as ${iconName}Props } from "#createIcon";

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
    `export type { IconWeight, PhIconProps } from "#createIcon";`,
    `export { createIcon } from "#createIcon";`
  );
  await writeFile(join(SRC_DIR, "index.ts"), allExports.join("\n") + "\n");

  console.log(`Generated ${iconCount} icon components (${WEIGHTS.length} weights each)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
