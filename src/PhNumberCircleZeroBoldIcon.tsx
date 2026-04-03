import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberCircleZeroBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0wLDE5MmE4NCw4NCwwLDEsMSw4NC04NEE4NC4wOSw4NC4wOSwwLDAsMSwxMjgsMjEyWm0wLTE0NGMtMjguMjYsMC00OCwyNC42Ny00OCw2MHMxOS43NCw2MCw0OCw2MCw0OC0yNC42Nyw0OC02MFMxNTYuMjYsNjgsMTI4LDY4Wm0wLDk2Yy0yMy4zMywwLTI0LTMyLjMyLTI0LTM2cy42Ny0zNiwyNC0zNiwyNCwzMi4zMiwyNCwzNlMxNTEuMzMsMTY0LDEyOCwxNjRaIi8+PC9zdmc+)
 */
export function PhNumberCircleZeroBoldIcon(props: PhNumberCircleZeroBoldIconProps) {
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
      <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm0-144c-28.26,0-48,24.67-48,60s19.74,60,48,60,48-24.67,48-60S156.26,68,128,68Zm0,96c-23.33,0-24-32.32-24-36s.67-36,24-36,24,32.32,24,36S151.33,164,128,164Z"/>
    </svg>
  );
}
