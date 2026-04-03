import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAngleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05OCw3MmE2LDYsMCwwLDEsNi02QTEwMi4xMiwxMDIuMTIsMCwwLDEsMjA2LDE2OGE2LDYsMCwwLDEtMTIsMCw5MC4xLDkwLjEsMCwwLDAtOTAtOTBBNiw2LDAsMCwxLDk4LDcyWk0yNDAsMTk0SDc4VjMyYTYsNiwwLDAsMC0xMiwwVjY2SDMyYTYsNiwwLDAsMCwwLDEySDY2VjIwMGE2LDYsMCwwLDAsNiw2SDI0MGE2LDYsMCwwLDAsMC0xMloiLz48L3N2Zz4=)
 */
export function PhAngleLightIcon(props: PhAngleLightIconProps) {
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
      <path d="M98,72a6,6,0,0,1,6-6A102.12,102.12,0,0,1,206,168a6,6,0,0,1-12,0,90.1,90.1,0,0,0-90-90A6,6,0,0,1,98,72ZM240,194H78V32a6,6,0,0,0-12,0V66H32a6,6,0,0,0,0,12H66V200a6,6,0,0,0,6,6H240a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
