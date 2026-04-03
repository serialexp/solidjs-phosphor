import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCalendarCheckBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhIMTg4VjI0YTEyLDEyLDAsMCwwLTI0LDB2NEg5MlYyNGExMiwxMiwwLDAsMC0yNCwwdjRINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhaTTY4LDUyYTEyLDEyLDAsMCwwLDI0LDBoNzJhMTIsMTIsMCwwLDAsMjQsMGgxNlY3Nkg1MlY1MlpNNTIsMjA0VjEwMEgyMDRWMjA0Wm0xMjAuNDktODQuNDlhMTIsMTIsMCwwLDEsMCwxN2wtNDgsNDhhMTIsMTIsMCwwLDEtMTcsMGwtMjQtMjRhMTIsMTIsMCwwLDEsMTctMTdMMTE2LDE1OWwzOS41MS0zOS41MkExMiwxMiwwLDAsMSwxNzIuNDksMTE5LjUxWiIvPjwvc3ZnPg==)
 */
export function PhCalendarCheckBoldIcon(props: PhCalendarCheckBoldIconProps) {
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
      <path d="M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm120.49-84.49a12,12,0,0,1,0,17l-48,48a12,12,0,0,1-17,0l-24-24a12,12,0,0,1,17-17L116,159l39.51-39.52A12,12,0,0,1,172.49,119.51Z"/>
    </svg>
  );
}
