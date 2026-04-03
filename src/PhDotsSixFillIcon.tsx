import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsSixFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhIMzJBMTYsMTYsMCwwLDAsMTYsNjRWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDIyNGExNiwxNiwwLDAsMCwxNi0xNlY2NEExNiwxNiwwLDAsMCwyMjQsNDhaTTY4LDE2OGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSw2OCwxNjhabTAtNTZhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsNjgsMTEyWm02MCw1NmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxMjgsMTY4Wm0wLTU2YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEyOCwxMTJabTYwLDU2YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE4OCwxNjhabTAtNTZhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTg4LDExMloiLz48L3N2Zz4=)
 */
export function PhDotsSixFillIcon(props: PhDotsSixFillIconProps) {
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
      <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM68,168a12,12,0,1,1,12-12A12,12,0,0,1,68,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,68,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,128,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,128,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,188,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,188,112Z"/>
    </svg>
  );
}
