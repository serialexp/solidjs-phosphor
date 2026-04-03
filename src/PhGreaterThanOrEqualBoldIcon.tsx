import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGreaterThanOrEqualBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01MS44NSwxNDguNzQsMTczLjI5LDEwNCw1MS44NSw1OS4yNmExMiwxMiwwLDAsMSw4LjMtMjIuNTJsMTUyLDU2YTEyLDEyLDAsMCwxLDAsMjIuNTJsLTE1Miw1NmExMiwxMiwwLDEsMS04LjMtMjIuNTJaTTIwOCwxODhINTZhMTIsMTIsMCwwLDAsMCwyNEgyMDhhMTIsMTIsMCwwLDAsMC0yNFoiLz48L3N2Zz4=)
 */
export function PhGreaterThanOrEqualBoldIcon(props: PhGreaterThanOrEqualBoldIconProps) {
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
      <path d="M51.85,148.74,173.29,104,51.85,59.26a12,12,0,0,1,8.3-22.52l152,56a12,12,0,0,1,0,22.52l-152,56a12,12,0,1,1-8.3-22.52ZM208,188H56a12,12,0,0,0,0,24H208a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
