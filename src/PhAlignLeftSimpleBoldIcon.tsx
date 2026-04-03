import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignLeftSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00NCw1NlYyMDBhMTIsMTIsMCwwLDEtMjQsMFY1NmExMiwxMiwwLDAsMSwyNCwwWk0yNDQsOTZ2NjRhMjAsMjAsMCwwLDEtMjAsMjBIODBhMjAsMjAsMCwwLDEtMjAtMjBWOTZBMjAsMjAsMCwwLDEsODAsNzZIMjI0QTIwLDIwLDAsMCwxLDI0NCw5NlptLTI0LDRIODR2NTZIMjIwWiIvPjwvc3ZnPg==)
 */
export function PhAlignLeftSimpleBoldIcon(props: PhAlignLeftSimpleBoldIconProps) {
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
      <path d="M44,56V200a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0ZM244,96v64a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V96A20,20,0,0,1,80,76H224A20,20,0,0,1,244,96Zm-24,4H84v56H220Z"/>
    </svg>
  );
}
