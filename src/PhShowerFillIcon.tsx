import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhShowerFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02NCwyMzZhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsNjQsMjM2Wm0yMC00NGExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCw4NCwxOTJabS02NCwwYTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDIwLDE5MlptMzItMzJhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsNTIsMTYwWk0yNDgsMzJIMjE2YTgsOCwwLDAsMC01LjY2LDIuMzRsLTMwLjIsMzAuMkw1My4zOCw4Ni4xOWExNiwxNiwwLDAsMC04LjY5LDI3LjFsOTgsOThhMTYsMTYsMCwwLDAsMjcuMDktOC42NkwxOTEuNDYsNzUuODYsMjE5LjMxLDQ4SDI0OGE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 */
export function PhShowerFillIcon(props: PhShowerFillIconProps) {
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
      <path d="M64,236a12,12,0,1,1-12-12A12,12,0,0,1,64,236Zm20-44a12,12,0,1,0,12,12A12,12,0,0,0,84,192Zm-64,0a12,12,0,1,0,12,12A12,12,0,0,0,20,192Zm32-32a12,12,0,1,0,12,12A12,12,0,0,0,52,160ZM248,32H216a8,8,0,0,0-5.66,2.34l-30.2,30.2L53.38,86.19a16,16,0,0,0-8.69,27.1l98,98a16,16,0,0,0,27.09-8.66L191.46,75.86,219.31,48H248a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
