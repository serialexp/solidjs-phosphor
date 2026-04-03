import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberSquareZeroThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNzZjLTEyLjgyLDAtMjMuNDEsNS44MS0zMC42MiwxNi44MUM5MS4zMywxMDIsODgsMTE0LjUyLDg4LDEyOHMzLjMzLDI2LDkuMzgsMzUuMmM3LjIxLDExLDE3LjgsMTYuOCwzMC42MiwxNi44czIzLjQxLTUuODEsMzAuNjItMTYuOGM2LTkuMjIsOS4zOC0yMS43Miw5LjM4LTM1LjJzLTMuMzMtMjYtOS4zOC0zNS4xOUMxNTEuNDEsODEuODEsMTQwLjgyLDc2LDEyOCw3NlptMCw5NmMtMjIuMTEsMC0zMi0yMi4xLTMyLTQ0czkuODktNDQsMzItNDQsMzIsMjIuMSwzMiw0NFMxNTAuMTEsMTcyLDEyOCwxNzJaTTIwOCwzNkg0OEExMiwxMiwwLDAsMCwzNiw0OFYyMDhhMTIsMTIsMCwwLDAsMTIsMTJIMjA4YTEyLDEyLDAsMCwwLDEyLTEyVjQ4QTEyLDEyLDAsMCwwLDIwOCwzNlptNCwxNzJhNCw0LDAsMCwxLTQsNEg0OGE0LDQsMCwwLDEtNC00VjQ4YTQsNCwwLDAsMSw0LTRIMjA4YTQsNCwwLDAsMSw0LDRaIi8+PC9zdmc+)
 */
export function PhNumberSquareZeroThinIcon(props: PhNumberSquareZeroThinIconProps) {
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
      <path d="M128,76c-12.82,0-23.41,5.81-30.62,16.81C91.33,102,88,114.52,88,128s3.33,26,9.38,35.2c7.21,11,17.8,16.8,30.62,16.8s23.41-5.81,30.62-16.8c6-9.22,9.38-21.72,9.38-35.2s-3.33-26-9.38-35.19C151.41,81.81,140.82,76,128,76Zm0,96c-22.11,0-32-22.1-32-44s9.89-44,32-44,32,22.1,32,44S150.11,172,128,172ZM208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
