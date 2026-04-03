import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberSquareFiveThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsNC00SDIwOGE0LDQsMCwwLDEsNCw0Wk0xMTUuMzksODRsLTUuODcsMzUuMjFBMzMuMjYsMzMuMjYsMCwwLDEsMTI0LDExNmEzMiwzMiwwLDAsMSwwLDY0LDMxLjYyLDMxLjYyLDAsMCwxLTIyLjg2LTkuMiw0LDQsMCwxLDEsNS43Mi01LjZBMjMuNjcsMjMuNjcsMCwwLDAsMTI0LDE3MmEyNCwyNCwwLDAsMCwwLTQ4LDIzLjY3LDIzLjY3LDAsMCwwLTE3LjE0LDYuOCw0LDQsMCwwLDEtNi44MS0zLjQ2bDgtNDhBNCw0LDAsMCwxLDExMiw3Nmg0MGE0LDQsMCwwLDEsMCw4WiIvPjwvc3ZnPg==)
 */
export function PhNumberSquareFiveThinIcon(props: PhNumberSquareFiveThinIconProps) {
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
      <path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM115.39,84l-5.87,35.21A33.26,33.26,0,0,1,124,116a32,32,0,0,1,0,64,31.62,31.62,0,0,1-22.86-9.2,4,4,0,1,1,5.72-5.6A23.67,23.67,0,0,0,124,172a24,24,0,0,0,0-48,23.67,23.67,0,0,0-17.14,6.8,4,4,0,0,1-6.81-3.46l8-48A4,4,0,0,1,112,76h40a4,4,0,0,1,0,8Z"/>
    </svg>
  );
}
