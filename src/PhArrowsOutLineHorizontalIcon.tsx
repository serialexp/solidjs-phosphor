import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsOutLineHorizontalIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsNDBWMjE2YTgsOCwwLDAsMS0xNiwwVjQwYTgsOCwwLDAsMSwxNiwwWk05NiwxMjBIMzUuMzFsMTguMzUtMTguMzRBOCw4LDAsMCwwLDQyLjM0LDkwLjM0bC0zMiwzMmE4LDgsMCwwLDAsMCwxMS4zMmwzMiwzMmE4LDgsMCwwLDAsMTEuMzItMTEuMzJMMzUuMzEsMTM2SDk2YTgsOCwwLDAsMCwwLTE2Wm0xNDkuNjYsMi4zNC0zMi0zMmE4LDgsMCwwLDAtMTEuMzIsMTEuMzJMMjIwLjY5LDEyMEgxNjBhOCw4LDAsMCwwLDAsMTZoNjAuNjlsLTE4LjM1LDE4LjM0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMmwzMi0zMkE4LDgsMCwwLDAsMjQ1LjY2LDEyMi4zNFoiLz48L3N2Zz4=)
 */
export function PhArrowsOutLineHorizontalIcon(props: PhArrowsOutLineHorizontalIconProps) {
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
      <path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.31l18.35-18.34A8,8,0,0,0,42.34,90.34l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L35.31,136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32a8,8,0,0,0-11.32,11.32L220.69,120H160a8,8,0,0,0,0,16h60.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,245.66,122.34Z"/>
    </svg>
  );
}
