import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextIndentDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRWMTkySDQwVjY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyNCwxMjhhOCw4LDAsMCwxLTgsOEgxMTJhOCw4LDAsMCwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsMTI4Wk0xMTIsNzJIMjE2YTgsOCwwLDAsMCwwLTE2SDExMmE4LDgsMCwwLDAsMCwxNlpNMjE2LDE4NEg0MGE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZaTTM0LjM0LDE0MS42NmE4LDgsMCwwLDAsMTEuMzIsMGw0MC00MGE4LDgsMCwwLDAsMC0xMS4zMmwtNDAtNDBBOCw4LDAsMCwwLDM0LjM0LDYxLjY2TDY4LjY5LDk2LDM0LjM0LDEzMC4zNEE4LDgsMCwwLDAsMzQuMzQsMTQxLjY2WiIvPjwvc3ZnPg==)
 */
export function PhTextIndentDuotoneIcon(props: PhTextIndentDuotoneIconProps) {
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
      <path d="M216,64V192H40V64Z" opacity="0.2"/><path d="M224,128a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM112,72H216a8,8,0,0,0,0-16H112a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM34.34,141.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32l-40-40A8,8,0,0,0,34.34,61.66L68.69,96,34.34,130.34A8,8,0,0,0,34.34,141.66Z"/>
    </svg>
  );
}
