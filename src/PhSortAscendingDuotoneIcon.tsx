import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSortAscendingDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsODB2ODhsLTI0LDI0SDQ4VjY0SDIwOEExNiwxNiwwLDAsMSwyMjQsODBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDEyOGE4LDgsMCwwLDEtOCw4SDQ4YTgsOCwwLDAsMSwwLTE2aDcyQTgsOCwwLDAsMSwxMjgsMTI4Wk00OCw3MkgxODRhOCw4LDAsMCwwLDAtMTZINDhhOCw4LDAsMCwwLDAsMTZabTU2LDExMkg0OGE4LDgsMCwwLDAsMCwxNmg1NmE4LDgsMCwwLDAsMC0xNlptMTI1LjY2LTIxLjY2YTgsOCwwLDAsMC0xMS4zMiwwTDE5MiwxODguNjlWMTEyYTgsOCwwLDAsMC0xNiwwdjc2LjY5bC0yNi4zNC0yNi4zNWE4LDgsMCwwLDAtMTEuMzIsMTEuMzJsNDAsNDBhOCw4LDAsMCwwLDExLjMyLDBsNDAtNDBBOCw4LDAsMCwwLDIyOS42NiwxNjIuMzRaIi8+PC9zdmc+)
 */
export function PhSortAscendingDuotoneIcon(props: PhSortAscendingDuotoneIconProps) {
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
      <path d="M224,80v88l-24,24H48V64H208A16,16,0,0,1,224,80Z" opacity="0.2"/><path d="M128,128a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16h72A8,8,0,0,1,128,128ZM48,72H184a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Zm56,112H48a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Zm125.66-21.66a8,8,0,0,0-11.32,0L192,188.69V112a8,8,0,0,0-16,0v76.69l-26.34-26.35a8,8,0,0,0-11.32,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,229.66,162.34Z"/>
    </svg>
  );
}
