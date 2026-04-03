import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVanBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTMuMTEsMTA0LjE4LDIwNy41NCw1MS4wOUExOS45NCwxOS45NCwwLDAsMCwxOTIuMjYsNDRIMzJBMjAsMjAsMCwwLDAsMTIsNjRWMTc2YTIwLDIwLDAsMCwwLDIwLDIwSDQ2LjA2YTM2LDM2LDAsMCwwLDY3Ljg4LDBoNDAuMTJhMzYsMzYsMCwwLDAsNjcuODgsMEgyMzZhMjAsMjAsMCwwLDAsMjAtMjBWMTEyQTEyLjA1LDEyLjA1LDAsMCwwLDI1My4xMSwxMDQuMThaTTIxNy44OSwxMDBIMTc2VjY4aDE0LjQyWk0xMDQsMTAwVjY4aDQ4djMyWk04MCw2OHYzMkgzNlY2OFptMCwxMjhhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsODAsMTk2Wm0xMDgsMGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxODgsMTk2Wm0zMy45NC0yNGEzNiwzNiwwLDAsMC02Ny44OCwwSDExMy45NGEzNiwzNiwwLDAsMC02Ny44OCwwSDM2VjEyNEgyMzJ2NDhaIi8+PC9zdmc+)
 */
export function PhVanBoldIcon(props: PhVanBoldIconProps) {
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
      <path d="M253.11,104.18,207.54,51.09A19.94,19.94,0,0,0,192.26,44H32A20,20,0,0,0,12,64V176a20,20,0,0,0,20,20H46.06a36,36,0,0,0,67.88,0h40.12a36,36,0,0,0,67.88,0H236a20,20,0,0,0,20-20V112A12.05,12.05,0,0,0,253.11,104.18ZM217.89,100H176V68h14.42ZM104,100V68h48v32ZM80,68v32H36V68Zm0,128a12,12,0,1,1,12-12A12,12,0,0,1,80,196Zm108,0a12,12,0,1,1,12-12A12,12,0,0,1,188,196Zm33.94-24a36,36,0,0,0-67.88,0H113.94a36,36,0,0,0-67.88,0H36V124H232v48Z"/>
    </svg>
  );
}
