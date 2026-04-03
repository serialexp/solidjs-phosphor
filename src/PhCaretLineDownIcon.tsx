import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLineDownIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00Mi4zNCw3Ny42NkE4LDgsMCwwLDEsNTMuNjYsNjYuMzRMMTI4LDE0MC42OWw3NC4zNC03NC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJsLTgwLDgwYTgsOCwwLDAsMS0xMS4zMiwwWk0yMDgsMTg0SDQ4YTgsOCwwLDAsMCwwLDE2SDIwOGE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 */
export function PhCaretLineDownIcon(props: PhCaretLineDownIconProps) {
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
      <path d="M42.34,77.66A8,8,0,0,1,53.66,66.34L128,140.69l74.34-74.35a8,8,0,0,1,11.32,11.32l-80,80a8,8,0,0,1-11.32,0ZM208,184H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
