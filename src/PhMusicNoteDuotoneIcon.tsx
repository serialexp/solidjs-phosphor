import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMusicNoteDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTg0YTQwLDQwLDAsMSwxLTQwLTQwQTQwLDQwLDAsMCwxLDEyOCwxODRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjEwLjMsNTYuMzRsLTgwLTI0QTgsOCwwLDAsMCwxMjAsNDBWMTQ4LjI2QTQ4LDQ4LDAsMSwwLDEzNiwxODRWOTguNzVsNjkuNywyMC45MUE4LDgsMCwwLDAsMjE2LDExMlY2NEE4LDgsMCwwLDAsMjEwLjMsNTYuMzRaTTg4LDIxNmEzMiwzMiwwLDEsMSwzMi0zMkEzMiwzMiwwLDAsMSw4OCwyMTZaTTIwMCwxMDEuMjVsLTY0LTE5LjJWNTAuNzVMMjAwLDcwWiIvPjwvc3ZnPg==)
 */
export function PhMusicNoteDuotoneIcon(props: PhMusicNoteDuotoneIconProps) {
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
      <path d="M128,184a40,40,0,1,1-40-40A40,40,0,0,1,128,184Z" opacity="0.2"/><path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V98.75l69.7,20.91A8,8,0,0,0,216,112V64A8,8,0,0,0,210.3,56.34ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216ZM200,101.25l-64-19.2V50.75L200,70Z"/>
    </svg>
  );
}
