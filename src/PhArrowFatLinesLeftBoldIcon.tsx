import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLinesLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsNjhoLTRWMzJhMTIsMTIsMCwwLDAtMjAuNDktOC40OWwtOTYsOTZhMTIsMTIsMCwwLDAsMCwxN2w5Niw5NkExMiwxMiwwLDAsMCwxMzIsMjI0VjE4OGg0YTEyLDEyLDAsMCwwLDEyLTEyVjgwQTEyLDEyLDAsMCwwLDEzNiw2OFptLTEyLDk2aC00YTEyLDEyLDAsMCwwLTEyLDEydjE5TDQxLDEyOGw2Ny02N1Y4MGExMiwxMiwwLDAsMCwxMiwxMmg0Wk0yMjgsODB2OTZhMTIsMTIsMCwwLDEtMjQsMFY4MGExMiwxMiwwLDAsMSwyNCwwWm0tNDAsMHY5NmExMiwxMiwwLDAsMS0yNCwwVjgwYTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 */
export function PhArrowFatLinesLeftBoldIcon(props: PhArrowFatLinesLeftBoldIconProps) {
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
      <path d="M136,68h-4V32a12,12,0,0,0-20.49-8.49l-96,96a12,12,0,0,0,0,17l96,96A12,12,0,0,0,132,224V188h4a12,12,0,0,0,12-12V80A12,12,0,0,0,136,68Zm-12,96h-4a12,12,0,0,0-12,12v19L41,128l67-67V80a12,12,0,0,0,12,12h4ZM228,80v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Zm-40,0v96a12,12,0,0,1-24,0V80a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
