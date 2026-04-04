import { splitProps, mergeProps, type JSX, type Component } from "solid-js";

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
