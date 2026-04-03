import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsOutLineHorizontalLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzQsNDBWMjE2YTYsNiwwLDAsMS0xMiwwVjQwYTYsNiwwLDAsMSwxMiwwWk05NiwxMjJIMzAuNDlsMjEuNzUtMjEuNzZhNiw2LDAsMCwwLTguNDgtOC40OGwtMzIsMzJhNiw2LDAsMCwwLDAsOC40OGwzMiwzMmE2LDYsMCwwLDAsOC40OC04LjQ4TDMwLjQ5LDEzNEg5NmE2LDYsMCwwLDAsMC0xMlptMTQ4LjI0LDEuNzYtMzItMzJhNiw2LDAsMCwwLTguNDgsOC40OEwyMjUuNTEsMTIySDE2MGE2LDYsMCwwLDAsMCwxMmg2NS41MWwtMjEuNzUsMjEuNzZhNiw2LDAsMSwwLDguNDgsOC40OGwzMi0zMkE2LDYsMCwwLDAsMjQ0LjI0LDEyMy43NloiLz48L3N2Zz4=)
 */
export function PhArrowsOutLineHorizontalLightIcon(props: PhArrowsOutLineHorizontalLightIconProps) {
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
      <path d="M134,40V216a6,6,0,0,1-12,0V40a6,6,0,0,1,12,0ZM96,122H30.49l21.75-21.76a6,6,0,0,0-8.48-8.48l-32,32a6,6,0,0,0,0,8.48l32,32a6,6,0,0,0,8.48-8.48L30.49,134H96a6,6,0,0,0,0-12Zm148.24,1.76-32-32a6,6,0,0,0-8.48,8.48L225.51,122H160a6,6,0,0,0,0,12h65.51l-21.75,21.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,244.24,123.76Z"/>
    </svg>
  );
}
