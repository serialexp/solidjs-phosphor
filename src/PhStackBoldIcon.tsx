import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhStackBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuMzYsMTcwQTEyLDEyLDAsMCwxLDIzMCwxODYuMzdsLTk2LDU2YTEyLDEyLDAsMCwxLTEyLjEsMGwtOTYtNTZhMTIsMTIsMCwwLDEsMTIuMDktMjAuNzRsOTAsNTIuNDhMMjE4LDE2NS42M0ExMiwxMiwwLDAsMSwyMzQuMzYsMTcwWk0yMTgsMTE3LjYzLDEyOCwxNzAuMTEsMzguMDUsMTE3LjYzQTEyLDEyLDAsMCwwLDI2LDEzOC4zN2w5Niw1NmExMiwxMiwwLDAsMCwxMi4xLDBsOTYtNTZBMTIsMTIsMCwwLDAsMjE4LDExNy42M1pNMjAsODBhMTIsMTIsMCwwLDEsNi0xMC4zN2w5Ni01NmExMi4wNiwxMi4wNiwwLDAsMSwxMi4xLDBsOTYsNTZhMTIsMTIsMCwwLDEsMCwyMC43NGwtOTYsNTZhMTIsMTIsMCwwLDEtMTIuMSwwbC05Ni01NkExMiwxMiwwLDAsMSwyMCw4MFptMzUuODIsMEwxMjgsMTIyLjExLDIwMC4xOCw4MCwxMjgsMzcuODlaIi8+PC9zdmc+)
 */
export function PhStackBoldIcon(props: PhStackBoldIconProps) {
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
      <path d="M234.36,170A12,12,0,0,1,230,186.37l-96,56a12,12,0,0,1-12.1,0l-96-56a12,12,0,0,1,12.09-20.74l90,52.48L218,165.63A12,12,0,0,1,234.36,170ZM218,117.63,128,170.11,38.05,117.63A12,12,0,0,0,26,138.37l96,56a12,12,0,0,0,12.1,0l96-56A12,12,0,0,0,218,117.63ZM20,80a12,12,0,0,1,6-10.37l96-56a12.06,12.06,0,0,1,12.1,0l96,56a12,12,0,0,1,0,20.74l-96,56a12,12,0,0,1-12.1,0l-96-56A12,12,0,0,1,20,80Zm35.82,0L128,122.11,200.18,80,128,37.89Z"/>
    </svg>
  );
}
