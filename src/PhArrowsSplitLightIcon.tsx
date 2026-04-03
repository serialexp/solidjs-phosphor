import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsSplitLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguMjQsMTg4LjI0bC0zMiwzMmE2LDYsMCwwLDEtOC40OCwwbC0zMi0zMmE2LDYsMCwwLDEsOC40OC04LjQ4TDE4NiwyMDEuNTF2LTYzbC01OC01OC01OCw1OHY2M2wyMS43Ni0yMS43NWE2LDYsMCwwLDEsOC40OCw4LjQ4bC0zMiwzMmE2LDYsMCwwLDEtOC40OCwwbC0zMi0zMmE2LDYsMCwwLDEsOC40OC04LjQ4TDU4LDIwMS41MVYxMzZhNiw2LDAsMCwxLDEuNzYtNC4yNEwxMjIsNjkuNTFWMjRhNiw2LDAsMCwxLDEyLDBWNjkuNTFsNjIuMjQsNjIuMjVBNiw2LDAsMCwxLDE5OCwxMzZ2NjUuNTFsMjEuNzYtMjEuNzVhNiw2LDAsMCwxLDguNDgsOC40OFoiLz48L3N2Zz4=)
 */
export function PhArrowsSplitLightIcon(props: PhArrowsSplitLightIconProps) {
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
    >
      <path d="M228.24,188.24l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L186,201.51v-63l-58-58-58,58v63l21.76-21.75a6,6,0,0,1,8.48,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L58,201.51V136a6,6,0,0,1,1.76-4.24L122,69.51V24a6,6,0,0,1,12,0V69.51l62.24,62.25A6,6,0,0,1,198,136v65.51l21.76-21.75a6,6,0,0,1,8.48,8.48Z"/>
    </svg>
  );
}
