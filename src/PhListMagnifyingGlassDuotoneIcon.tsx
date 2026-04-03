import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhListMagnifyingGlassDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTQ0YTMyLDMyLDAsMSwxLTMyLTMyQTMyLDMyLDAsMCwxLDIxNiwxNDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMzIsNjRhOCw4LDAsMCwxLDgtOEgyMTZhOCw4LDAsMCwxLDAsMTZINDBBOCw4LDAsMCwxLDMyLDY0Wm04LDcyaDcyYTgsOCwwLDAsMCwwLTE2SDQwYTgsOCwwLDAsMCwwLDE2Wm04OCw0OEg0MGE4LDgsMCwwLDAsMCwxNmg4OGE4LDgsMCwwLDAsMC0xNlptMTA5LjY2LDEzLjY2YTgsOCwwLDAsMS0xMS4zMiwwTDIwNiwxNzcuMzZBNDAsNDAsMCwxLDEsMjE3LjM2LDE2NmwyMC4zLDIwLjNBOCw4LDAsMCwxLDIzNy42NiwxOTcuNjZaTTE4NCwxNjhhMjQsMjQsMCwxLDAtMjQtMjRBMjQsMjQsMCwwLDAsMTg0LDE2OFoiLz48L3N2Zz4=)
 */
export function PhListMagnifyingGlassDuotoneIcon(props: PhListMagnifyingGlassDuotoneIconProps) {
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
      <path d="M216,144a32,32,0,1,1-32-32A32,32,0,0,1,216,144Z" opacity="0.2"/><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,13.66a8,8,0,0,1-11.32,0L206,177.36A40,40,0,1,1,217.36,166l20.3,20.3A8,8,0,0,1,237.66,197.66ZM184,168a24,24,0,1,0-24-24A24,24,0,0,0,184,168Z"/>
    </svg>
  );
}
