import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLinesDownThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuNywxMzQuNDdBNCw0LDAsMCwwLDIyNCwxMzJIMTgwVjEwNGE0LDQsMCwwLDAtNC00SDgwYTQsNCwwLDAsMC00LDR2MjhIMzJhNCw0LDAsMCwwLTIuODMsNi44M2w5Niw5NmE0LDQsMCwwLDAsNS42NiwwbDk2LTk2QTQsNCwwLDAsMCwyMjcuNywxMzQuNDdaTTEyOCwyMjYuMzQsNDEuNjYsMTQwSDgwYTQsNCwwLDAsMCw0LTRWMTA4aDg4djI4YTQsNCwwLDAsMCw0LDRoMzguMzRaTTc2LDQwYTQsNCwwLDAsMSw0LTRoOTZhNCw0LDAsMCwxLDAsOEg4MEE0LDQsMCwwLDEsNzYsNDBabTAsMzJhNCw0LDAsMCwxLDQtNGg5NmE0LDQsMCwwLDEsMCw4SDgwQTQsNCwwLDAsMSw3Niw3MloiLz48L3N2Zz4=)
 */
export function PhArrowFatLinesDownThinIcon(props: PhArrowFatLinesDownThinIconProps) {
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
      <path d="M227.7,134.47A4,4,0,0,0,224,132H180V104a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4v28H32a4,4,0,0,0-2.83,6.83l96,96a4,4,0,0,0,5.66,0l96-96A4,4,0,0,0,227.7,134.47ZM128,226.34,41.66,140H80a4,4,0,0,0,4-4V108h88v28a4,4,0,0,0,4,4h38.34ZM76,40a4,4,0,0,1,4-4h96a4,4,0,0,1,0,8H80A4,4,0,0,1,76,40Zm0,32a4,4,0,0,1,4-4h96a4,4,0,0,1,0,8H80A4,4,0,0,1,76,72Z"/>
    </svg>
  );
}
