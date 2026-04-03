import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhYinYangDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMCwxLTk2LDk2LDQ4LDQ4LDAsMCwxLDAtOTYsNDgsNDgsMCwwLDAsMC05NkE5Niw5NiwwLDAsMSwyMjQsMTI4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEyOCwyNEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjExLDEwNC4xMSwwLDAsMCwxMjgsMjRaTTQwLDEyOGE4OC4xLDg4LjEsMCwwLDEsODgtODgsNDAsNDAsMCwwLDEsMCw4MEE1Niw1NiwwLDAsMCw3Ny4zOSwyMDAsODgsODgsMCwwLDEsNDAsMTI4Wm04OCw4OGE0MCw0MCwwLDAsMSwwLTgwLDU2LDU2LDAsMCwwLDUwLjYxLTc5Ljk1QTg4LDg4LDAsMCwxLDEyOCwyMTZabTEyLTQwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE0MCwxNzZaTTExNiw4MGExMiwxMiwwLDEsMSwxMiwxMkExMiwxMiwwLDAsMSwxMTYsODBaIi8+PC9zdmc+)
 */
export function PhYinYangDuotoneIcon(props: PhYinYangDuotoneIconProps) {
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
      <path d="M224,128a96,96,0,0,1-96,96,48,48,0,0,1,0-96,48,48,0,0,0,0-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88,40,40,0,0,1,0,80A56,56,0,0,0,77.39,200,88,88,0,0,1,40,128Zm88,88a40,40,0,0,1,0-80,56,56,0,0,0,50.61-79.95A88,88,0,0,1,128,216Zm12-40a12,12,0,1,1-12-12A12,12,0,0,1,140,176ZM116,80a12,12,0,1,1,12,12A12,12,0,0,1,116,80Z"/>
    </svg>
  );
}
