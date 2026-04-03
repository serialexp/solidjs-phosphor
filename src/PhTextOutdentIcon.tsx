import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextOutdentIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTgsOCwwLDAsMS04LDhIMTEyYTgsOCwwLDAsMSwwLTE2SDIxNkE4LDgsMCwwLDEsMjI0LDEyOFpNMTEyLDcySDIxNmE4LDgsMCwwLDAsMC0xNkgxMTJhOCw4LDAsMCwwLDAsMTZaTTIxNiwxODRINDBhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2Wk03MiwxNDRhOCw4LDAsMCwwLDUuNjYtMTMuNjZMNDMuMzEsOTYsNzcuNjYsNjEuNjZBOCw4LDAsMCwwLDY2LjM0LDUwLjM0bC00MCw0MGE4LDgsMCwwLDAsMCwxMS4zMmw0MCw0MEE4LDgsMCwwLDAsNzIsMTQ0WiIvPjwvc3ZnPg==)
 */
export function PhTextOutdentIcon(props: PhTextOutdentIconProps) {
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
      <path d="M224,128a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM112,72H216a8,8,0,0,0,0-16H112a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM72,144a8,8,0,0,0,5.66-13.66L43.31,96,77.66,61.66A8,8,0,0,0,66.34,50.34l-40,40a8,8,0,0,0,0,11.32l40,40A8,8,0,0,0,72,144Z"/>
    </svg>
  );
}
