import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCardholderBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDRINDhBMjgsMjgsMCwwLDAsMjAsNzJWMTg0YTI4LDI4LDAsMCwwLDI4LDI4SDIwOGEyOCwyOCwwLDAsMCwyOC0yOFY3MkEyOCwyOCwwLDAsMCwyMDgsNDRaTTQ4LDY4SDIwOGE0LDQsMCwwLDEsNCw0Vjg4SDE2MGExMiwxMiwwLDAsMC0xMiwxMiwyMCwyMCwwLDAsMS00MCwwQTEyLDEyLDAsMCwwLDk2LDg4SDQ0VjcyQTQsNCwwLDAsMSw0OCw2OFpNMjA4LDE4OEg0OGE0LDQsMCwwLDEtNC00VjExMkg4NS42NmE0NCw0NCwwLDAsMCw4NC42OCwwSDIxMnY3MkE0LDQsMCwwLDEsMjA4LDE4OFoiLz48L3N2Zz4=)
 */
export function PhCardholderBoldIcon(props: PhCardholderBoldIconProps) {
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
      <path d="M208,44H48A28,28,0,0,0,20,72V184a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V72A28,28,0,0,0,208,44ZM48,68H208a4,4,0,0,1,4,4V88H160a12,12,0,0,0-12,12,20,20,0,0,1-40,0A12,12,0,0,0,96,88H44V72A4,4,0,0,1,48,68ZM208,188H48a4,4,0,0,1-4-4V112H85.66a44,44,0,0,0,84.68,0H212v72A4,4,0,0,1,208,188Z"/>
    </svg>
  );
}
