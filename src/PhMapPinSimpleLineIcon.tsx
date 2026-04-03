import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMapPinSimpleLineIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjA4SDEzNlYxMzUuNDJhNTYsNTYsMCwxLDAtMTYsMFYyMDhINDBhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2Wk04OCw4MGE0MCw0MCwwLDEsMSw0MCw0MEE0MCw0MCwwLDAsMSw4OCw4MFoiLz48L3N2Zz4=)
 */
export function PhMapPinSimpleLineIcon(props: PhMapPinSimpleLineIconProps) {
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
      <path d="M216,208H136V135.42a56,56,0,1,0-16,0V208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM88,80a40,40,0,1,1,40,40A40,40,0,0,1,88,80Z"/>
    </svg>
  );
}
