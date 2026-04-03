import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextAlignJustifyIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zMiw2NGE4LDgsMCwwLDEsOC04SDIxNmE4LDgsMCwwLDEsMCwxNkg0MEE4LDgsMCwwLDEsMzIsNjRaTTIxNiw5Nkg0MGE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZabTAsNDBINDBhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2Wm0wLDQwSDQwYTgsOCwwLDAsMCwwLDE2SDIxNmE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 */
export function PhTextAlignJustifyIcon(props: PhTextAlignJustifyIconProps) {
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
      <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
