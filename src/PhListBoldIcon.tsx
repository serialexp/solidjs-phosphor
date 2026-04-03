import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhListBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTI4YTEyLDEyLDAsMCwxLTEyLDEySDQwYTEyLDEyLDAsMCwxLDAtMjRIMjE2QTEyLDEyLDAsMCwxLDIyOCwxMjhaTTQwLDc2SDIxNmExMiwxMiwwLDAsMCwwLTI0SDQwYTEyLDEyLDAsMCwwLDAsMjRaTTIxNiwxODBINDBhMTIsMTIsMCwwLDAsMCwyNEgyMTZhMTIsMTIsMCwwLDAsMC0yNFoiLz48L3N2Zz4=)
 */
export function PhListBoldIcon(props: PhListBoldIconProps) {
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
      <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
