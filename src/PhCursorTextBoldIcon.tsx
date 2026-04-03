import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCursorTextBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsMjA4YTEyLDEyLDAsMCwxLTEyLDEySDE2MGE0My44Niw0My44NiwwLDAsMS0zMi0xMy44NUE0My44Niw0My44NiwwLDAsMSw5NiwyMjBIODBhMTIsMTIsMCwwLDEsMC0yNEg5NmEyMCwyMCwwLDAsMCwyMC0yMFYxNDBIMTA0YTEyLDEyLDAsMCwxLDAtMjRoMTJWODBBMjAsMjAsMCwwLDAsOTYsNjBIODBhMTIsMTIsMCwwLDEsMC0yNEg5NmE0My44Niw0My44NiwwLDAsMSwzMiwxMy44NUE0My44Niw0My44NiwwLDAsMSwxNjAsMzZoMTZhMTIsMTIsMCwwLDEsMCwyNEgxNjBhMjAsMjAsMCwwLDAtMjAsMjB2MzZoMTJhMTIsMTIsMCwwLDEsMCwyNEgxNDB2MzZhMjAsMjAsMCwwLDAsMjAsMjBoMTZBMTIsMTIsMCwwLDEsMTg4LDIwOFoiLz48L3N2Zz4=)
 */
export function PhCursorTextBoldIcon(props: PhCursorTextBoldIconProps) {
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
      <path d="M188,208a12,12,0,0,1-12,12H160a43.86,43.86,0,0,1-32-13.85A43.86,43.86,0,0,1,96,220H80a12,12,0,0,1,0-24H96a20,20,0,0,0,20-20V140H104a12,12,0,0,1,0-24h12V80A20,20,0,0,0,96,60H80a12,12,0,0,1,0-24H96a43.86,43.86,0,0,1,32,13.85A43.86,43.86,0,0,1,160,36h16a12,12,0,0,1,0,24H160a20,20,0,0,0-20,20v36h12a12,12,0,0,1,0,24H140v36a20,20,0,0,0,20,20h16A12,12,0,0,1,188,208Z"/>
    </svg>
  );
}
