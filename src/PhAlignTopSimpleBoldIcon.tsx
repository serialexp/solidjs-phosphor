import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignTopSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMzJhMTIsMTIsMCwwLDEtMTIsMTJINTZhMTIsMTIsMCwwLDEsMC0yNEgyMDBBMTIsMTIsMCwwLDEsMjEyLDMyWk0xODAsODBWMjI0YTIwLDIwLDAsMCwxLTIwLDIwSDk2YTIwLDIwLDAsMCwxLTIwLTIwVjgwQTIwLDIwLDAsMCwxLDk2LDYwaDY0QTIwLDIwLDAsMCwxLDE4MCw4MFptLTI0LDRIMTAwVjIyMGg1NloiLz48L3N2Zz4=)
 */
export function PhAlignTopSimpleBoldIcon(props: PhAlignTopSimpleBoldIconProps) {
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
      <path d="M212,32a12,12,0,0,1-12,12H56a12,12,0,0,1,0-24H200A12,12,0,0,1,212,32ZM180,80V224a20,20,0,0,1-20,20H96a20,20,0,0,1-20-20V80A20,20,0,0,1,96,60h64A20,20,0,0,1,180,80Zm-24,4H100V220h56Z"/>
    </svg>
  );
}
