import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGreaterThanOrEqualDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTA0LDU2LDE2MFY0OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik01My4yNCwxNTIuNDksMTg0Ljg2LDEwNCw1My4yNCw1NS41MWE4LDgsMCwxLDEsNS41My0xNWwxNTIsNTZhOCw4LDAsMCwxLDAsMTVsLTE1Miw1NkE4LjEzLDguMTMsMCwwLDEsNTYsMTY4YTgsOCwwLDAsMS0yLjc2LTE1LjUxWk0yMDgsMTkySDU2YTgsOCwwLDAsMCwwLDE2SDIwOGE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 */
export function PhGreaterThanOrEqualDuotoneIcon(props: PhGreaterThanOrEqualDuotoneIconProps) {
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
      <path d="M208,104,56,160V48Z" opacity="0.2"/><path d="M53.24,152.49,184.86,104,53.24,55.51a8,8,0,1,1,5.53-15l152,56a8,8,0,0,1,0,15l-152,56A8.13,8.13,0,0,1,56,168a8,8,0,0,1-2.76-15.51ZM208,192H56a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
