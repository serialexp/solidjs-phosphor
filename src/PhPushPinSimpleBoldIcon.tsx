import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPushPinSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTY0aC01LjkzTDE5MC4zLDUySDE5MmExMiwxMiwwLDAsMCwwLTI0SDY0YTEyLDEyLDAsMCwwLDAsMjRoMS43TDQ1LjkzLDE2NEg0MGExMiwxMiwwLDAsMCwwLDI0aDc2djUyYTEyLDEyLDAsMCwwLDI0LDBWMTg4aDc2YTEyLDEyLDAsMCwwLDAtMjRaTTkwLjA3LDUyaDc1Ljg2TDE4NS43LDE2NEg3MC4zWiIvPjwvc3ZnPg==)
 */
export function PhPushPinSimpleBoldIcon(props: PhPushPinSimpleBoldIconProps) {
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
      <path d="M216,164h-5.93L190.3,52H192a12,12,0,0,0,0-24H64a12,12,0,0,0,0,24h1.7L45.93,164H40a12,12,0,0,0,0,24h76v52a12,12,0,0,0,24,0V188h76a12,12,0,0,0,0-24ZM90.07,52h75.86L185.7,164H70.3Z"/>
    </svg>
  );
}
