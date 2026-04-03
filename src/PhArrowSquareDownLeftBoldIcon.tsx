import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowSquareDownLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhabS00LDE3Nkg1MlY1MkgyMDRaTTg0LDE2MFYxMTJhMTIsMTIsMCwwLDEsMjQsMHYxOWw0My41MS00My41MmExMiwxMiwwLDAsMSwxNywxN0wxMjUsMTQ4aDE5YTEyLDEyLDAsMCwxLDAsMjRIOTZBMTIsMTIsMCwwLDEsODQsMTYwWiIvPjwvc3ZnPg==)
 */
export function PhArrowSquareDownLeftBoldIcon(props: PhArrowSquareDownLeftBoldIconProps) {
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
      <path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM84,160V112a12,12,0,0,1,24,0v19l43.51-43.52a12,12,0,0,1,17,17L125,148h19a12,12,0,0,1,0,24H96A12,12,0,0,1,84,160Z"/>
    </svg>
  );
}
