import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCellSignalHighBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsNzJWMjAwYTEyLDEyLDAsMCwxLTI0LDBWNzJhMTIsMTIsMCwwLDEsMjQsMFptLTUyLDI4YTEyLDEyLDAsMCwwLTEyLDEydjg4YTEyLDEyLDAsMCwwLDI0LDBWMTEyQTEyLDEyLDAsMCwwLDEyMCwxMDBaTTgwLDE0MGExMiwxMiwwLDAsMC0xMiwxMnY0OGExMiwxMiwwLDAsMCwyNCwwVjE1MkExMiwxMiwwLDAsMCw4MCwxNDBaTTQwLDE4MGExMiwxMiwwLDAsMC0xMiwxMnY4YTEyLDEyLDAsMCwwLDI0LDB2LThBMTIsMTIsMCwwLDAsNDAsMTgwWiIvPjwvc3ZnPg==)
 */
export function PhCellSignalHighBoldIcon(props: PhCellSignalHighBoldIconProps) {
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
      <path d="M172,72V200a12,12,0,0,1-24,0V72a12,12,0,0,1,24,0Zm-52,28a12,12,0,0,0-12,12v88a12,12,0,0,0,24,0V112A12,12,0,0,0,120,100ZM80,140a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V152A12,12,0,0,0,80,140ZM40,180a12,12,0,0,0-12,12v8a12,12,0,0,0,24,0v-8A12,12,0,0,0,40,180Z"/>
    </svg>
  );
}
