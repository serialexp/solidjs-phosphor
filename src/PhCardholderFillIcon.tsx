import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCardholderFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDhINDhBMjQsMjQsMCwwLDAsMjQsNzJWMTg0YTI0LDI0LDAsMCwwLDI0LDI0SDIwOGEyNCwyNCwwLDAsMCwyNC0yNFY3MkEyNCwyNCwwLDAsMCwyMDgsNDhabS01Niw3MmEyNCwyNCwwLDAsMS00OCwwLDgsOCwwLDAsMC04LThINDBWOTZIMjE2djE2SDE2MEE4LDgsMCwwLDAsMTUyLDEyMFpNNDgsNjRIMjA4YTgsOCwwLDAsMSw4LDh2OEg0MFY3MkE4LDgsMCwwLDEsNDgsNjRaIi8+PC9zdmc+)
 */
export function PhCardholderFillIcon(props: PhCardholderFillIconProps) {
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
      <path d="M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48Zm-56,72a24,24,0,0,1-48,0,8,8,0,0,0-8-8H40V96H216v16H160A8,8,0,0,0,152,120ZM48,64H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64Z"/>
    </svg>
  );
}
