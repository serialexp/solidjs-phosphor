import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberFourDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBWMjE2YTE2LDE2LDAsMCwxLTE2LDE2SDU2YTE2LDE2LDAsMCwxLTE2LTE2VjQwQTE2LDE2LDAsMCwxLDU2LDI0SDIwMEExNiwxNiwwLDAsMSwyMTYsNDBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTg0LDE2MEgxNjhWNDhhOCw4LDAsMCwwLTE0LjI1LTVsLTk2LDEyMEE4LDgsMCwwLDAsNjQsMTc2aDg4djMyYTgsOCwwLDAsMCwxNiwwVjE3NmgxNmE4LDgsMCwwLDAsMC0xNlptLTMyLDBIODAuNjRMMTUyLDcwLjgxWiIvPjwvc3ZnPg==)
 */
export function PhNumberFourDuotoneIcon(props: PhNumberFourDuotoneIconProps) {
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
      <path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2"/><path d="M184,160H168V48a8,8,0,0,0-14.25-5l-96,120A8,8,0,0,0,64,176h88v32a8,8,0,0,0,16,0V176h16a8,8,0,0,0,0-16Zm-32,0H80.64L152,70.81Z"/>
    </svg>
  );
}
