import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyKztBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTAwYTEyLDEyLDAsMCwxLTEyLDEySDE0MFYyMTJhMTIsMTIsMCwwLDEtMjQsMFYxMTJINTZhMTIsMTIsMCwwLDEsMC0yNEgyMDBBMTIsMTIsMCwwLDEsMjEyLDEwMFpNNTYsNjRIMjAwYTEyLDEyLDAsMCwwLDAtMjRINTZhMTIsMTIsMCwwLDAsMCwyNFoiLz48L3N2Zz4=)
 */
export function PhCurrencyKztBoldIcon(props: PhCurrencyKztBoldIconProps) {
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
      <path d="M212,100a12,12,0,0,1-12,12H140V212a12,12,0,0,1-24,0V112H56a12,12,0,0,1,0-24H200A12,12,0,0,1,212,100ZM56,64H200a12,12,0,0,0,0-24H56a12,12,0,0,0,0,24Z"/>
    </svg>
  );
}
