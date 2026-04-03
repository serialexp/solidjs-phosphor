import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChartBarBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTk2aC00VjQwYTEyLDEyLDAsMCwwLTEyLTEySDE1MmExMiwxMiwwLDAsMC0xMiwxMlY3Nkg5NkExMiwxMiwwLDAsMCw4NCw4OHYzNkg0OGExMiwxMiwwLDAsMC0xMiwxMnY2MEgzMmExMiwxMiwwLDAsMCwwLDI0SDIyNGExMiwxMiwwLDAsMCwwLTI0Wk0xNjQsNTJoMzJWMTk2SDE2NFptLTU2LDQ4aDMydjk2SDEwOFpNNjAsMTQ4SDg0djQ4SDYwWiIvPjwvc3ZnPg==)
 */
export function PhChartBarBoldIcon(props: PhChartBarBoldIconProps) {
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
      <path d="M224,196h-4V40a12,12,0,0,0-12-12H152a12,12,0,0,0-12,12V76H96A12,12,0,0,0,84,88v36H48a12,12,0,0,0-12,12v60H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM164,52h32V196H164Zm-56,48h32v96H108ZM60,148H84v48H60Z"/>
    </svg>
  );
}
