import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhListPlusDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRWMTkySDQwVjY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTMyLDY0YTgsOCwwLDAsMSw4LThIMjE2YTgsOCwwLDAsMSwwLDE2SDQwQTgsOCwwLDAsMSwzMiw2NFptOCw3MkgyMTZhOCw4LDAsMCwwLDAtMTZINDBhOCw4LDAsMCwwLDAsMTZabTEwNCw0OEg0MGE4LDgsMCwwLDAsMCwxNkgxNDRhOCw4LDAsMCwwLDAtMTZabTg4LDBIMjE2VjE2OGE4LDgsMCwwLDAtMTYsMHYxNkgxODRhOCw4LDAsMCwwLDAsMTZoMTZ2MTZhOCw4LDAsMCwwLDE2LDBWMjAwaDE2YTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 */
export function PhListPlusDuotoneIcon(props: PhListPlusDuotoneIconProps) {
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
      <path d="M216,64V192H40V64Z" opacity="0.2"/><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm104,48H40a8,8,0,0,0,0,16H144a8,8,0,0,0,0-16Zm88,0H216V168a8,8,0,0,0-16,0v16H184a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V200h16a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
