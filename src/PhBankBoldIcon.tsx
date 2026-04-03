import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBankBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNCwxMDhINDR2NDhIMzJhMTIsMTIsMCwwLDAsMCwyNEgyMjRhMTIsMTIsMCwwLDAsMC0yNEgyMTJWMTA4aDIwYTEyLDEyLDAsMCwwLDYuMjktMjIuMjJsLTEwNC02NGExMiwxMiwwLDAsMC0xMi41OCwwbC0xMDQsNjRBMTIsMTIsMCwwLDAsMjQsMTA4Wm00NCwwSDkydjQ4SDY4Wm03MiwwdjQ4SDExNlYxMDhabTQ4LDQ4SDE2NFYxMDhoMjRaTTEyOCw0Ni4wOSwxODkuNiw4NEg2Ni40Wk0yNTIsMjA4YTEyLDEyLDAsMCwxLTEyLDEySDE2YTEyLDEyLDAsMCwxLDAtMjRIMjQwQTEyLDEyLDAsMCwxLDI1MiwyMDhaIi8+PC9zdmc+)
 */
export function PhBankBoldIcon(props: PhBankBoldIconProps) {
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
      <path d="M24,108H44v48H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24H212V108h20a12,12,0,0,0,6.29-22.22l-104-64a12,12,0,0,0-12.58,0l-104,64A12,12,0,0,0,24,108Zm44,0H92v48H68Zm72,0v48H116V108Zm48,48H164V108h24ZM128,46.09,189.6,84H66.4ZM252,208a12,12,0,0,1-12,12H16a12,12,0,0,1,0-24H240A12,12,0,0,1,252,208Z"/>
    </svg>
  );
}
