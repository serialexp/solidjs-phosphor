import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineUpIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuNjYsMTM4LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMzYsOTEuMzFWMjI0YTgsOCwwLDAsMS0xNiwwVjkxLjMxTDYxLjY2LDE0OS42NmE4LDgsMCwwLDEtMTEuMzItMTEuMzJsNzItNzJhOCw4LDAsMCwxLDExLjMyLDBaTTIxNiwzMkg0MGE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 */
export function PhArrowLineUpIcon(props: PhArrowLineUpIconProps) {
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
      <path d="M205.66,138.34a8,8,0,0,1-11.32,11.32L136,91.31V224a8,8,0,0,1-16,0V91.31L61.66,149.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0ZM216,32H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
