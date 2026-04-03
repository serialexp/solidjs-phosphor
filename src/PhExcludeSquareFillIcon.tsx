import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhExcludeSquareFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCw4OHY4MEg0MGE4LDgsMCwwLDEtOC04VjQwYTgsOCwwLDAsMSw4LThIMTYwYTgsOCwwLDAsMSw4LDhWODhabTEyOCwwSDE2OHY4MEg4OHY0OGE4LDgsMCwwLDAsOCw4SDIxNmE4LDgsMCwwLDAsOC04Vjk2QTgsOCwwLDAsMCwyMTYsODhaIi8+PC9zdmc+)
 */
export function PhExcludeSquareFillIcon(props: PhExcludeSquareFillIconProps) {
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
      <path d="M88,88v80H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H160a8,8,0,0,1,8,8V88Zm128,0H168v80H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88Z"/>
    </svg>
  );
}
