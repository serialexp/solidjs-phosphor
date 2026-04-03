import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignTopBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsNDBhMTIsMTIsMCwwLDEtMTIsMTJINDBhMTIsMTIsMCwwLDEsMC0yNEgyMTZBMTIsMTIsMCwwLDEsMjI4LDQwWk0yMTIsODh2ODhhMjAsMjAsMCwwLDEtMjAsMjBIMTU2YTIwLDIwLDAsMCwxLTIwLTIwVjg4YTIwLDIwLDAsMCwxLDIwLTIwaDM2QTIwLDIwLDAsMCwxLDIxMiw4OFptLTI0LDRIMTYwdjgwaDI4Wm0tNjgtNFYyMTZhMjAsMjAsMCwwLDEtMjAsMjBINjRhMjAsMjAsMCwwLDEtMjAtMjBWODhBMjAsMjAsMCwwLDEsNjQsNjhoMzZBMjAsMjAsMCwwLDEsMTIwLDg4Wk05Niw5Mkg2OFYyMTJIOTZaIi8+PC9zdmc+)
 */
export function PhAlignTopBoldIcon(props: PhAlignTopBoldIconProps) {
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
      <path d="M228,40a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,40ZM212,88v88a20,20,0,0,1-20,20H156a20,20,0,0,1-20-20V88a20,20,0,0,1,20-20h36A20,20,0,0,1,212,88Zm-24,4H160v80h28Zm-68-4V216a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V88A20,20,0,0,1,64,68h36A20,20,0,0,1,120,88ZM96,92H68V212H96Z"/>
    </svg>
  );
}
