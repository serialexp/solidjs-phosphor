import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretDoubleRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAuMjQsMTMyLjI0bC04MCw4MGE2LDYsMCwwLDEtOC40OC04LjQ4TDEyNy41MSwxMjgsNTEuNzYsNTIuMjRhNiw2LDAsMCwxLDguNDgtOC40OGw4MCw4MEE2LDYsMCwwLDEsMTQwLjI0LDEzMi4yNFptODAtOC40OC04MC04MGE2LDYsMCwwLDAtOC40OCw4LjQ4TDIwNy41MSwxMjhsLTc1Ljc1LDc1Ljc2YTYsNiwwLDEsMCw4LjQ4LDguNDhsODAtODBBNiw2LDAsMCwwLDIyMC4yNCwxMjMuNzZaIi8+PC9zdmc+)
 */
export function PhCaretDoubleRightLightIcon(props: PhCaretDoubleRightLightIconProps) {
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
      <path d="M140.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L127.51,128,51.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,140.24,132.24Zm80-8.48-80-80a6,6,0,0,0-8.48,8.48L207.51,128l-75.75,75.76a6,6,0,1,0,8.48,8.48l80-80A6,6,0,0,0,220.24,123.76Z"/>
    </svg>
  );
}
