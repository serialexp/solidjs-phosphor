import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextAlignLeftDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRWMTY4YTE2LDE2LDAsMCwxLTE2LDE2SDQwVjY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTMyLDY0YTgsOCwwLDAsMSw4LThIMjE2YTgsOCwwLDAsMSwwLDE2SDQwQTgsOCwwLDAsMSwzMiw2NFptOCw0OEgxNjhhOCw4LDAsMCwwLDAtMTZINDBhOCw4LDAsMCwwLDAsMTZabTE3NiwyNEg0MGE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZabS00OCw0MEg0MGE4LDgsMCwwLDAsMCwxNkgxNjhhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 */
export function PhTextAlignLeftDuotoneIcon(props: PhTextAlignLeftDuotoneIconProps) {
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
      <path d="M216,64V168a16,16,0,0,1-16,16H40V64Z" opacity="0.2"/><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
