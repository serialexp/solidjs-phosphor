import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhScooterBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTMybC0uNjgsMEwxNzkuMzgsMzYuMjFBMTIsMTIsMCwwLDAsMTY4LDI4SDEzNmExMiwxMiwwLDAsMCwwLDI0aDIzLjM1bDE0LjgzLDQ0LjQ5TDExNC41OSwxNjRIODMuMmE0MCw0MCwwLDEsMC0yLjU1LDI0SDEyMGExMiwxMiwwLDAsMCw5LTQuMDZsNTQtNjEuMTMsNS42LDE2LjgxQTQwLDQwLDAsMSwwLDIxMiwxMzJaTTQ0LDE4OGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSw0NCwxODhabTE2OCwwYTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDIxMiwxODhaIi8+PC9zdmc+)
 */
export function PhScooterBoldIcon(props: PhScooterBoldIconProps) {
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
      <path d="M212,132l-.68,0L179.38,36.21A12,12,0,0,0,168,28H136a12,12,0,0,0,0,24h23.35l14.83,44.49L114.59,164H83.2a40,40,0,1,0-2.55,24H120a12,12,0,0,0,9-4.06l54-61.13,5.6,16.81A40,40,0,1,0,212,132ZM44,188a16,16,0,1,1,16-16A16,16,0,0,1,44,188Zm168,0a16,16,0,1,1,16-16A16,16,0,0,1,212,188Z"/>
    </svg>
  );
}
