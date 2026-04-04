import { splitProps, mergeProps, type JSX, type Component } from "solid-js";

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
