import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLinesDownBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuMDksMTMxLjQxQTEyLDEyLDAsMCwwLDIyNCwxMjRIMTg4di00YTEyLDEyLDAsMCwwLTEyLTEySDgwYTEyLDEyLDAsMCwwLTEyLDEydjRIMzJhMTIsMTIsMCwwLDAtOC40OSwyMC40OWw5Niw5NmExMiwxMiwwLDAsMCwxNywwbDk2LTk2QTEyLDEyLDAsMCwwLDIzNS4wOSwxMzEuNDFaTTEyOCwyMTUsNjEsMTQ4SDgwYTEyLDEyLDAsMCwwLDEyLTEydi00aDcydjRhMTIsMTIsMCwwLDAsMTIsMTJoMTlaTTY4LDQwQTEyLDEyLDAsMCwxLDgwLDI4aDk2YTEyLDEyLDAsMCwxLDAsMjRIODBBMTIsMTIsMCwwLDEsNjgsNDBabTAsNDBBMTIsMTIsMCwwLDEsODAsNjhoOTZhMTIsMTIsMCwwLDEsMCwyNEg4MEExMiwxMiwwLDAsMSw2OCw4MFoiLz48L3N2Zz4=)
 */
export function PhArrowFatLinesDownBoldIcon(props: PhArrowFatLinesDownBoldIconProps) {
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
      <path d="M235.09,131.41A12,12,0,0,0,224,124H188v-4a12,12,0,0,0-12-12H80a12,12,0,0,0-12,12v4H32a12,12,0,0,0-8.49,20.49l96,96a12,12,0,0,0,17,0l96-96A12,12,0,0,0,235.09,131.41ZM128,215,61,148H80a12,12,0,0,0,12-12v-4h72v4a12,12,0,0,0,12,12h19ZM68,40A12,12,0,0,1,80,28h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,40Zm0,40A12,12,0,0,1,80,68h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,80Z"/>
    </svg>
  );
}
