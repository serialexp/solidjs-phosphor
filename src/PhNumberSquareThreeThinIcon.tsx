import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberSquareThreeThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsNC00SDIwOGE0LDQsMCwwLDEsNCw0Wm0tNTYtNjBhMzIsMzIsMCwwLDEtNTQuODYsMjIuNCw0LDQsMCwxLDEsNS43Mi01LjZBMjQsMjQsMCwxLDAsMTI0LDEyNGE0LDQsMCwwLDEtMy4yOC02LjI5TDE0NC4zMiw4NEgxMDRhNCw0LDAsMCwxLDAtOGg0OGE0LDQsMCwwLDEsMy4yOCw2LjI5TDEzMS4xMiwxMTYuOEEzMi4wNiwzMi4wNiwwLDAsMSwxNTYsMTQ4WiIvPjwvc3ZnPg==)
 */
export function PhNumberSquareThreeThinIcon(props: PhNumberSquareThreeThinIconProps) {
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
      <path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-56-60a32,32,0,0,1-54.86,22.4,4,4,0,1,1,5.72-5.6A24,24,0,1,0,124,124a4,4,0,0,1-3.28-6.29L144.32,84H104a4,4,0,0,1,0-8h48a4,4,0,0,1,3.28,6.29L131.12,116.8A32.06,32.06,0,0,1,156,148Z"/>
    </svg>
  );
}
