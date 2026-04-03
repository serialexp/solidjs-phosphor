import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBuildingsBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMjA0SDIyOFY5NmEyMCwyMCwwLDAsMC0yMC0yMEgxNzJWMzJhMjAsMjAsMCwwLDAtMjguNDUtMTguMTJsLTEwNCw0OC41NEEyMC4wNiwyMC4wNiwwLDAsMCwyOCw4MC41NVYyMDRIMTZhMTIsMTIsMCwwLDAsMCwyNEgyNDBhMTIsMTIsMCwwLDAsMC0yNFpNMjA0LDEwMFYyMDRIMTcyVjEwMFpNNTIsODMuMDksMTQ4LDM4LjNWMjA0SDUyWk0xMzIsMTEydjEyYTEyLDEyLDAsMCwxLTI0LDBWMTEyYTEyLDEyLDAsMCwxLDI0LDBabS00MCwwdjEyYTEyLDEyLDAsMCwxLTI0LDBWMTEyYTEyLDEyLDAsMCwxLDI0LDBabTAsNTJ2MTJhMTIsMTIsMCwwLDEtMjQsMFYxNjRhMTIsMTIsMCwwLDEsMjQsMFptNDAsMHYxMmExMiwxMiwwLDAsMS0yNCwwVjE2NGExMiwxMiwwLDAsMSwyNCwwWiIvPjwvc3ZnPg==)
 */
export function PhBuildingsBoldIcon(props: PhBuildingsBoldIconProps) {
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
      <path d="M240,204H228V96a20,20,0,0,0-20-20H172V32a20,20,0,0,0-28.45-18.12l-104,48.54A20.06,20.06,0,0,0,28,80.55V204H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM204,100V204H172V100ZM52,83.09,148,38.3V204H52ZM132,112v12a12,12,0,0,1-24,0V112a12,12,0,0,1,24,0Zm-40,0v12a12,12,0,0,1-24,0V112a12,12,0,0,1,24,0Zm0,52v12a12,12,0,0,1-24,0V164a12,12,0,0,1,24,0Zm40,0v12a12,12,0,0,1-24,0V164a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
