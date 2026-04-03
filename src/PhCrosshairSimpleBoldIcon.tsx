import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCrosshairSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0xMiwxOTEuMTNWMTg0YTEyLDEyLDAsMCwwLTI0LDB2MjcuMTNBODQuMTgsODQuMTgsMCwwLDEsNDQuODcsMTQwSDcyYTEyLDEyLDAsMCwwLDAtMjRINDQuODdBODQuMTgsODQuMTgsMCwwLDEsMTE2LDQ0Ljg3VjcyYTEyLDEyLDAsMCwwLDI0LDBWNDQuODdBODQuMTgsODQuMTgsMCwwLDEsMjExLjEzLDExNkgxODRhMTIsMTIsMCwwLDAsMCwyNGgyNy4xM0E4NC4xOCw4NC4xOCwwLDAsMSwxNDAsMjExLjEzWiIvPjwvc3ZnPg==)
 */
export function PhCrosshairSimpleBoldIcon(props: PhCrosshairSimpleBoldIconProps) {
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
      <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V184a12,12,0,0,0-24,0v27.13A84.18,84.18,0,0,1,44.87,140H72a12,12,0,0,0,0-24H44.87A84.18,84.18,0,0,1,116,44.87V72a12,12,0,0,0,24,0V44.87A84.18,84.18,0,0,1,211.13,116H184a12,12,0,0,0,0,24h27.13A84.18,84.18,0,0,1,140,211.13Z"/>
    </svg>
  );
}
