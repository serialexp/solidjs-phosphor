import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsSixVerticalIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsNjBBMTIsMTIsMCwxLDEsOTIsNDgsMTIsMTIsMCwwLDEsMTA0LDYwWm02MCwxMmExMiwxMiwwLDEsMC0xMi0xMkExMiwxMiwwLDAsMCwxNjQsNzJaTTkyLDExNmExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCw5MiwxMTZabTcyLDBhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTY0LDExNlpNOTIsMTg0YTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDkyLDE4NFptNzIsMGExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCwxNjQsMTg0WiIvPjwvc3ZnPg==)
 */
export function PhDotsSixVerticalIcon(props: PhDotsSixVerticalIconProps) {
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
      <path d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"/>
    </svg>
  );
}
