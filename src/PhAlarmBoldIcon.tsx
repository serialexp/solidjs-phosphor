import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlarmBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMzZBMTAwLDEwMCwwLDEsMCwyMjgsMTM2LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDM2Wm0wLDE3NmE3Niw3NiwwLDEsMSw3Ni03NkE3Ni4wOCw3Ni4wOCwwLDAsMSwxMjgsMjEyWk0zMi40OSw3Mi40OWExMiwxMiwwLDEsMS0xNy0xN2wzMi0zMmExMiwxMiwwLDEsMSwxNywxN1ptMjA4LDBhMTIsMTIsMCwwLDEtMTcsMGwtMzItMzJhMTIsMTIsMCwxLDEsMTctMTdsMzIsMzJBMTIsMTIsMCwwLDEsMjQwLjQ5LDcyLjQ5Wk0xNzYsMTI0YTEyLDEyLDAsMCwxLDAsMjRIMTI4YTEyLDEyLDAsMCwxLTEyLTEyVjg4YTEyLDEyLDAsMCwxLDI0LDB2MzZaIi8+PC9zdmc+)
 */
export function PhAlarmBoldIcon(props: PhAlarmBoldIconProps) {
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
      <path d="M128,36A100,100,0,1,0,228,136,100.11,100.11,0,0,0,128,36Zm0,176a76,76,0,1,1,76-76A76.08,76.08,0,0,1,128,212ZM32.49,72.49a12,12,0,1,1-17-17l32-32a12,12,0,1,1,17,17Zm208,0a12,12,0,0,1-17,0l-32-32a12,12,0,1,1,17-17l32,32A12,12,0,0,1,240.49,72.49ZM176,124a12,12,0,0,1,0,24H128a12,12,0,0,1-12-12V88a12,12,0,0,1,24,0v36Z"/>
    </svg>
  );
}
