import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChartPieThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm03Ny41OCw1MC41OUwxMzIsMTIxLjA3di04NUE5Mi4wNyw5Mi4wNywwLDAsMSwyMDUuNTgsNzguNTlaTTEyNCwzNi4wOXY4OS42TDQ2LjQyLDE3MC40OEE5Miw5MiwwLDAsMSwxMjQsMzYuMDlaTTEyOCwyMjBhOTIsOTIsMCwwLDEtNzcuNTgtNDIuNTlMMjA5LjU4LDg1LjUyQTkyLDkyLDAsMCwxLDEyOCwyMjBaIi8+PC9zdmc+)
 */
export function PhChartPieThinIcon(props: PhChartPieThinIconProps) {
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
      <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm77.58,50.59L132,121.07v-85A92.07,92.07,0,0,1,205.58,78.59ZM124,36.09v89.6L46.42,170.48A92,92,0,0,1,124,36.09ZM128,220a92,92,0,0,1-77.58-42.59L209.58,85.52A92,92,0,0,1,128,220Z"/>
    </svg>
  );
}
