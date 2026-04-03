import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBookBookmarkFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjRINzJBMzIsMzIsMCwwLDAsNDAsNTZWMjI0YTgsOCwwLDAsMCw4LDhIMTkyYTgsOCwwLDAsMCwwLTE2SDU2YTE2LDE2LDAsMCwxLDE2LTE2SDIwOGE4LDgsMCwwLDAsOC04VjMyQTgsOCwwLDAsMCwyMDgsMjRabS0yNCw5Ni0yNS42MS0xOS4yYTQsNCwwLDAsMC00LjgsMEwxMjgsMTIwVjQwaDU2WiIvPjwvc3ZnPg==)
 */
export function PhBookBookmarkFillIcon(props: PhBookBookmarkFillIconProps) {
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
      <path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-24,96-25.61-19.2a4,4,0,0,0-4.8,0L128,120V40h56Z"/>
    </svg>
  );
}
