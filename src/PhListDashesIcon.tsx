import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhListDashesIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCw2NGE4LDgsMCwwLDEsOC04SDIxNmE4LDgsMCwwLDEsMCwxNkg5NkE4LDgsMCwwLDEsODgsNjRabTEyOCw1Nkg5NmE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZabTAsNjRIOTZhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2Wk01Niw1Nkg0MGE4LDgsMCwwLDAsMCwxNkg1NmE4LDgsMCwwLDAsMC0xNlptMCw2NEg0MGE4LDgsMCwwLDAsMCwxNkg1NmE4LDgsMCwwLDAsMC0xNlptMCw2NEg0MGE4LDgsMCwwLDAsMCwxNkg1NmE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 */
export function PhListDashesIcon(props: PhListDashesIconProps) {
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
      <path d="M88,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm128,56H96a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H96a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM56,56H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
