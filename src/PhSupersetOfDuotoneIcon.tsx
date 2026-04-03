import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSupersetOfDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTA0YTU2LDU2LDAsMCwxLTU2LDU2SDU2VjQ4aDk2QTU2LDU2LDAsMCwxLDIwOCwxMDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE2LDIwMGE4LDgsMCwwLDEtOCw4SDU2YTgsOCwwLDAsMSwwLTE2SDIwOEE4LDgsMCwwLDEsMjE2LDIwMFptLTY0LTQ4SDU2YTgsOCwwLDAsMCwwLDE2aDk2YTY0LDY0LDAsMCwwLDAtMTI4SDU2YTgsOCwwLDAsMCwwLDE2aDk2YTQ4LDQ4LDAsMCwxLDAsOTZaIi8+PC9zdmc+)
 */
export function PhSupersetOfDuotoneIcon(props: PhSupersetOfDuotoneIconProps) {
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
      <path d="M208,104a56,56,0,0,1-56,56H56V48h96A56,56,0,0,1,208,104Z" opacity="0.2"/><path d="M216,200a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200Zm-64-48H56a8,8,0,0,0,0,16h96a64,64,0,0,0,0-128H56a8,8,0,0,0,0,16h96a48,48,0,0,1,0,96Z"/>
    </svg>
  );
}
