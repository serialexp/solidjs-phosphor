import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsInLineVerticalIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsMTI4Wk0xMjIuMzQsMTAxLjY2YTgsOCwwLDAsMCwxMS4zMiwwbDMyLTMyYTgsOCwwLDAsMC0xMS4zMi0xMS4zMkwxMzYsNzYuNjlWMTZhOCw4LDAsMCwwLTE2LDBWNzYuNjlMMTAxLjY2LDU4LjM0QTgsOCwwLDAsMCw5MC4zNCw2OS42NlptMTEuMzIsNTIuNjhhOCw4LDAsMCwwLTExLjMyLDBsLTMyLDMyYTgsOCwwLDAsMCwxMS4zMiwxMS4zMkwxMjAsMTc5LjMxVjI0MGE4LDgsMCwwLDAsMTYsMFYxNzkuMzFsMTguMzQsMTguMzVhOCw4LDAsMCwwLDExLjMyLTExLjMyWiIvPjwvc3ZnPg==)
 */
export function PhArrowsInLineVerticalIcon(props: PhArrowsInLineVerticalIconProps) {
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
      <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM122.34,101.66a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32L136,76.69V16a8,8,0,0,0-16,0V76.69L101.66,58.34A8,8,0,0,0,90.34,69.66Zm11.32,52.68a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L120,179.31V240a8,8,0,0,0,16,0V179.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z"/>
    </svg>
  );
}
