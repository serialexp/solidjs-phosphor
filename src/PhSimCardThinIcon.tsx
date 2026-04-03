import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSimCardThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuODMsODUuMTdsLTU2LTU2QTQsNCwwLDAsMCwxNTIsMjhINTZBMTIsMTIsMCwwLDAsNDQsNDBWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDIwMGExMiwxMiwwLDAsMCwxMi0xMlY4OEE0LDQsMCwwLDAsMjEwLjgzLDg1LjE3Wk0yMDQsMjE2YTQsNCwwLDAsMS00LDRINTZhNCw0LDAsMCwxLTQtNFY0MGE0LDQsMCwwLDEsNC00aDk0LjM1TDIwNCw4OS42NlpNNzYsMTIwdjcyYTQsNCwwLDAsMCw0LDRoOTZhNCw0LDAsMCwwLDQtNFYxMjBhNCw0LDAsMCwwLTQtNEg4MEE0LDQsMCwwLDAsNzYsMTIwWm04LDRoODh2NjRIMTQ4VjE1MmE0LDQsMCwwLDAtOCwwdjM2SDExNlYxNTJhNCw0LDAsMCwwLTgsMHYzNkg4NFoiLz48L3N2Zz4=)
 */
export function PhSimCardThinIcon(props: PhSimCardThinIconProps) {
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
      <path d="M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM204,216a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h94.35L204,89.66ZM76,120v72a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4V120a4,4,0,0,0-4-4H80A4,4,0,0,0,76,120Zm8,4h88v64H148V152a4,4,0,0,0-8,0v36H116V152a4,4,0,0,0-8,0v36H84Z"/>
    </svg>
  );
}
