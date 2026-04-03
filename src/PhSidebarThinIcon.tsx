import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSidebarThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMjAwYTEyLDEyLDAsMCwwLDEyLDEySDIxNmExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMTYsNDRaTTM2LDIwMFYxNDhINTZhNCw0LDAsMCwwLDAtOEgzNlYxMTZINTZhNCw0LDAsMCwwLDAtOEgzNlY4NEg1NmE0LDQsMCwwLDAsMC04SDM2VjU2YTQsNCwwLDAsMSw0LTRIODRWMjA0SDQwQTQsNCwwLDAsMSwzNiwyMDBabTE4NCwwYTQsNCwwLDAsMS00LDRIOTJWNTJIMjE2YTQsNCwwLDAsMSw0LDRaIi8+PC9zdmc+)
 */
export function PhSidebarThinIcon(props: PhSidebarThinIconProps) {
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
      <path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM36,200V148H56a4,4,0,0,0,0-8H36V116H56a4,4,0,0,0,0-8H36V84H56a4,4,0,0,0,0-8H36V56a4,4,0,0,1,4-4H84V204H40A4,4,0,0,1,36,200Zm184,0a4,4,0,0,1-4,4H92V52H216a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
