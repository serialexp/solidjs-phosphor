import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberFiveDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBWMjE2YTE2LDE2LDAsMCwxLTE2LDE2SDU2YTE2LDE2LDAsMCwxLTE2LTE2VjQwQTE2LDE2LDAsMCwxLDU2LDI0SDIwMEExNiwxNiwwLDAsMSwyMTYsNDBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTc2LDE2MGE1Niw1NiwwLDAsMS05My4zMyw0MS43NCw4LDgsMCwxLDEsMTAuNjYtMTEuOTIsNDAsNDAsMCwxLDAsLjc3LTYwLjMsOCw4LDAsMCwxLTEzLTcuNjZMOTYuMTYsNDYuNDNBOCw4LDAsMCwxLDEwNCw0MGg2NGE4LDgsMCwwLDEsMCwxNkgxMTAuNTZsLTEwLjMyLDUxLjZBNTYsNTYsMCwwLDEsMTc2LDE2MFoiLz48L3N2Zz4=)
 */
export function PhNumberFiveDuotoneIcon(props: PhNumberFiveDuotoneIconProps) {
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
      <path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2"/><path d="M176,160a56,56,0,0,1-93.33,41.74,8,8,0,1,1,10.66-11.92,40,40,0,1,0,.77-60.3,8,8,0,0,1-13-7.66L96.16,46.43A8,8,0,0,1,104,40h64a8,8,0,0,1,0,16H110.56l-10.32,51.6A56,56,0,0,1,176,160Z"/>
    </svg>
  );
}
