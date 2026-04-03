import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBuildingOfficeBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMjA0SDIzMlY5OS4zQTEyLDEyLDAsMCwwLDIyOCw3NkgxODhWNTEuM0ExMiwxMiwwLDAsMCwxODQsMjhINDBhMTIsMTIsMCwwLDAtNCwyMy4zVjIwNEgyNGExMiwxMiwwLDAsMCwwLDI0SDI0NGExMiwxMiwwLDAsMCwwLTI0Wk0yMDgsMTAwVjIwNEgxODhWMTAwWk02MCw1MkgxNjRWMjA0SDE0OFYxNjBhMTIsMTIsMCwwLDAtMTItMTJIODhhMTIsMTIsMCwwLDAtMTIsMTJ2NDRINjBabTY0LDE1MkgxMDBWMTcyaDI0Wk03Miw4MEExMiwxMiwwLDAsMSw4NCw2OGg4YTEyLDEyLDAsMCwxLDAsMjRIODRBMTIsMTIsMCwwLDEsNzIsODBabTQ4LDBhMTIsMTIsMCwwLDEsMTItMTJoOGExMiwxMiwwLDAsMSwwLDI0aC04QTEyLDEyLDAsMCwxLDEyMCw4MFpNNzIsMTIwYTEyLDEyLDAsMCwxLDEyLTEyaDhhMTIsMTIsMCwwLDEsMCwyNEg4NEExMiwxMiwwLDAsMSw3MiwxMjBabTQ4LDBhMTIsMTIsMCwwLDEsMTItMTJoOGExMiwxMiwwLDAsMSwwLDI0aC04QTEyLDEyLDAsMCwxLDEyMCwxMjBaIi8+PC9zdmc+)
 */
export function PhBuildingOfficeBoldIcon(props: PhBuildingOfficeBoldIconProps) {
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
      <path d="M244,204H232V99.3A12,12,0,0,0,228,76H188V51.3A12,12,0,0,0,184,28H40a12,12,0,0,0-4,23.3V204H24a12,12,0,0,0,0,24H244a12,12,0,0,0,0-24ZM208,100V204H188V100ZM60,52H164V204H148V160a12,12,0,0,0-12-12H88a12,12,0,0,0-12,12v44H60Zm64,152H100V172h24ZM72,80A12,12,0,0,1,84,68h8a12,12,0,0,1,0,24H84A12,12,0,0,1,72,80Zm48,0a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24h-8A12,12,0,0,1,120,80ZM72,120a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24H84A12,12,0,0,1,72,120Zm48,0a12,12,0,0,1,12-12h8a12,12,0,0,1,0,24h-8A12,12,0,0,1,120,120Z"/>
    </svg>
  );
}
