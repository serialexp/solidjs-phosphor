import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignTopSimpleDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsNzJWMjI0YTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMCwxLTgtOFY3MmE4LDgsMCwwLDEsOC04aDY0QTgsOCwwLDAsMSwxNjgsNzJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDMyYTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLDAtMTZIMjAwQTgsOCwwLDAsMSwyMDgsMzJaTTE3Niw3MlYyMjRhMTYsMTYsMCwwLDEtMTYsMTZIOTZhMTYsMTYsMCwwLDEtMTYtMTZWNzJBMTYsMTYsMCwwLDEsOTYsNTZoNjRBMTYsMTYsMCwwLDEsMTc2LDcyWm0tMTYsMEg5NlYyMjRoNjRaIi8+PC9zdmc+)
 */
export function PhAlignTopSimpleDuotoneIcon(props: PhAlignTopSimpleDuotoneIconProps) {
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
      <path d="M168,72V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h64A8,8,0,0,1,168,72Z" opacity="0.2"/><path d="M208,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,32ZM176,72V224a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V72A16,16,0,0,1,96,56h64A16,16,0,0,1,176,72Zm-16,0H96V224h64Z"/>
    </svg>
  );
}
