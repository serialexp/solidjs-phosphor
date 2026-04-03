import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberSquareZeroBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTg4YzI4LjI2LDAsNDgtMjQuNjcsNDgtNjBzLTE5Ljc0LTYwLTQ4LTYwUzgwLDkyLjY3LDgwLDEyOCw5OS43NCwxODgsMTI4LDE4OFptMC05NmMyMy4zMywwLDI0LDMyLjMyLDI0LDM2cy0uNjcsMzYtMjQsMzYtMjQtMzIuMzItMjQtMzZTMTA0LjY3LDkyLDEyOCw5MlptODAtNjRINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhabS00LDE3Nkg1MlY1MkgyMDRaIi8+PC9zdmc+)
 */
export function PhNumberSquareZeroBoldIcon(props: PhNumberSquareZeroBoldIconProps) {
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
      <path d="M128,188c28.26,0,48-24.67,48-60s-19.74-60-48-60S80,92.67,80,128,99.74,188,128,188Zm0-96c23.33,0,24,32.32,24,36s-.67,36-24,36-24-32.32-24-36S104.67,92,128,92Zm80-64H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204Z"/>
    </svg>
  );
}
