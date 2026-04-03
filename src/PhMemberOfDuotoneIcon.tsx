import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMemberOfDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDhWMjA4SDEyOGE4MCw4MCwwLDAsMS04MC04MGgwYTgwLDgwLDAsMCwxLDgwLTgwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwMCwxMzZINTYuNDZBNzIuMDgsNzIuMDgsMCwwLDAsMTI4LDIwMGg3MmE4LDgsMCwwLDEsMCwxNkgxMjhhODgsODgsMCwwLDEsMC0xNzZoNzJhOCw4LDAsMCwxLDAsMTZIMTI4YTcyLjA4LDcyLjA4LDAsMCwwLTcxLjU0LDY0SDIwMGE4LDgsMCwwLDEsMCwxNloiLz48L3N2Zz4=)
 */
export function PhMemberOfDuotoneIcon(props: PhMemberOfDuotoneIconProps) {
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
      <path d="M200,48V208H128a80,80,0,0,1-80-80h0a80,80,0,0,1,80-80Z" opacity="0.2"/><path d="M200,136H56.46A72.08,72.08,0,0,0,128,200h72a8,8,0,0,1,0,16H128a88,88,0,0,1,0-176h72a8,8,0,0,1,0,16H128a72.08,72.08,0,0,0-71.54,64H200a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
