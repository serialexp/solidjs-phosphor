import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUserCircleMinusFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNzZhNDQsNDQsMCwxLDEtNDQsNDRBNDQsNDQsMCwwLDEsMTI4LDc2Wm00OC0xMmg0OGE4LDgsMCwwLDAsMC0xNkgxNzZhOCw4LDAsMCwwLDAsMTZabTM5Ljg3LDI0LjQ2QTgsOCwwLDAsMCwyMTEsOTguNjdhODgsODgsMCwwLDEtMTcuMjMsODcuNzRBNzkuODYsNzkuODYsMCwwLDAsMTcyLDE2NS4xYTQsNCwwLDAsMC00Ljg0LjMyLDU5LjgxLDU5LjgxLDAsMCwxLTc4LjI3LDBBNCw0LDAsMCwwLDg0LDE2NS4xYTc5LjcxLDc5LjcxLDAsMCwwLTIxLjc5LDIxLjMxQTg4LDg4LDAsMCwxLDEyOCw0MGE4OC43Niw4OC43NiwwLDAsMSwxNC42OCwxLjIyLDgsOCwwLDAsMCwyLjY0LTE1Ljc4LDEwMy45LDEwMy45LDAsMSwwLDgwLjc2LDY3Ljg5QTgsOCwwLDAsMCwyMTUuODcsODguNDZaIi8+PC9zdmc+)
 */
export function PhUserCircleMinusFillIcon(props: PhUserCircleMinusFillIconProps) {
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
      <path d="M128,76a44,44,0,1,1-44,44A44,44,0,0,1,128,76Zm48-12h48a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Zm39.87,24.46A8,8,0,0,0,211,98.67a88,88,0,0,1-17.23,87.74A79.86,79.86,0,0,0,172,165.1a4,4,0,0,0-4.84.32,59.81,59.81,0,0,1-78.27,0A4,4,0,0,0,84,165.1a79.71,79.71,0,0,0-21.79,21.31A88,88,0,0,1,128,40a88.76,88.76,0,0,1,14.68,1.22,8,8,0,0,0,2.64-15.78,103.9,103.9,0,1,0,80.76,67.89A8,8,0,0,0,215.87,88.46Z"/>
    </svg>
  );
}
