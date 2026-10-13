import type { Component } from "solid-js";
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
 * A live view of `props` without the icon's own props, to spread onto the
 * `<svg>`. Every read goes through to `props`, so the spread stays reactive.
 * It stands in for `splitProps` (Solid 1.x) and `omit` (Solid 2.x), neither
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
