import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowUpRightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuNjYsODUuNjZsLTQ4LDQ4YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxOTYuNjksODhIODBWMjI0YTgsOCwwLDAsMS0xNiwwVjgwYTgsOCwwLDAsMSw4LThIMTk2LjY5TDE2Mi4zNCwzNy42NmE4LDgsMCwwLDEsMTEuMzItMTEuMzJsNDgsNDhBOCw4LDAsMCwxLDIyMS42Niw4NS42NloiLz48L3N2Zz4=)
 */
export function PhArrowElbowUpRightIcon(props: PhArrowElbowUpRightIconProps) {
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
      <path d="M221.66,85.66l-48,48a8,8,0,0,1-11.32-11.32L196.69,88H80V224a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8H196.69L162.34,37.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,221.66,85.66Z"/>
    </svg>
  );
}
