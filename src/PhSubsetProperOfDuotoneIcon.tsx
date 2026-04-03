import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSubsetProperOfDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDhWMjA4SDEyOGE4MCw4MCwwLDAsMS04MC04MGgwYTgwLDgwLDAsMCwxLDgwLTgwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCwyMDhhOCw4LDAsMCwxLTgsOEgxMjhhODgsODgsMCwwLDEsMC0xNzZoNzJhOCw4LDAsMCwxLDAsMTZIMTI4YTcyLDcyLDAsMCwwLDAsMTQ0aDcyQTgsOCwwLDAsMSwyMDgsMjA4WiIvPjwvc3ZnPg==)
 */
export function PhSubsetProperOfDuotoneIcon(props: PhSubsetProperOfDuotoneIconProps) {
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
      <path d="M200,48V208H128a80,80,0,0,1-80-80h0a80,80,0,0,1,80-80Z" opacity="0.2"/><path d="M208,208a8,8,0,0,1-8,8H128a88,88,0,0,1,0-176h72a8,8,0,0,1,0,16H128a72,72,0,0,0,0,144h72A8,8,0,0,1,208,208Z"/>
    </svg>
  );
}
