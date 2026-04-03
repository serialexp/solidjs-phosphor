import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSupersetOfIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjAwYTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLDAtMTZIMjA4QTgsOCwwLDAsMSwyMTYsMjAwWm0tNjQtNDhINTZhOCw4LDAsMCwwLDAsMTZoOTZhNjQsNjQsMCwwLDAsMC0xMjhINTZhOCw4LDAsMCwwLDAsMTZoOTZhNDgsNDgsMCwwLDEsMCw5NloiLz48L3N2Zz4=)
 */
export function PhSupersetOfIcon(props: PhSupersetOfIconProps) {
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
      <path d="M216,200a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200Zm-64-48H56a8,8,0,0,0,0,16h96a64,64,0,0,0,0-128H56a8,8,0,0,0,0,16h96a48,48,0,0,1,0,96Z"/>
    </svg>
  );
}
