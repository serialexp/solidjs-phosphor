import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSynagogueBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNTQuMzRWMzJhMTIsMTIsMCwwLDAtMjQsMFY1NC4zNEEzMi4wNiwzMi4wNiwwLDAsMCwxNjQsODR2MjYuNzVMMTQwLDk3VjcyYTEyLDEyLDAsMCwwLTI0LDBWOTdMOTIsMTEwLjc1Vjg0QTMyLjA2LDMyLjA2LDAsMCwwLDcyLDU0LjM0VjMyYTEyLDEyLDAsMCwwLTI0LDBWNTQuMzRBMzIuMDYsMzIuMDYsMCwwLDAsMjgsODRWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDIxNmExMiwxMiwwLDAsMCwxMi0xMlY4NEEzMi4wNiwzMi4wNiwwLDAsMCwyMDgsNTQuMzRaTTEyOCwxNjBhMTIsMTIsMCwwLDAtMTIsMTJ2MzJIOTJWMTM4LjM5bDM2LTIwLjU3LDM2LDIwLjU3VjIwNEgxNDBWMTcyQTEyLDEyLDAsMCwwLDEyOCwxNjBaTTUyLDg0YTgsOCwwLDAsMSwxNiwwdjE2SDUyWm0xMzYsMGE4LDgsMCwwLDEsMTYsMHYxNkgxODhaTTUyLDEyNEg2OHY4MEg1MlptMTM2LDgwVjEyNGgxNnY4MFoiLz48L3N2Zz4=)
 */
export function PhSynagogueBoldIcon(props: PhSynagogueBoldIconProps) {
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
      <path d="M208,54.34V32a12,12,0,0,0-24,0V54.34A32.06,32.06,0,0,0,164,84v26.75L140,97V72a12,12,0,0,0-24,0V97L92,110.75V84A32.06,32.06,0,0,0,72,54.34V32a12,12,0,0,0-24,0V54.34A32.06,32.06,0,0,0,28,84V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V84A32.06,32.06,0,0,0,208,54.34ZM128,160a12,12,0,0,0-12,12v32H92V138.39l36-20.57,36,20.57V204H140V172A12,12,0,0,0,128,160ZM52,84a8,8,0,0,1,16,0v16H52Zm136,0a8,8,0,0,1,16,0v16H188ZM52,124H68v80H52Zm136,80V124h16v80Z"/>
    </svg>
  );
}
