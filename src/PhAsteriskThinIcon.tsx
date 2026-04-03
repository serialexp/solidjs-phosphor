import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAsteriskThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuNDMsMTc4LjA2YTQsNCwwLDAsMS01LjQ5LDEuMzdMMTMyLDEzNS4wNlYyMTZhNCw0LDAsMCwxLTgsMFYxMzUuMDZMNTAuMDYsMTc5LjQzYTQsNCwwLDAsMS00LjEyLTYuODZMMTIwLjIyLDEyOCw0NS45NCw4My40M2E0LDQsMCwwLDEsNC4xMi02Ljg2TDEyNCwxMjAuOTRWNDBhNCw0LDAsMCwxLDgsMHY4MC45NGw3My45NC00NC4zN2E0LDQsMCwxLDEsNC4xMiw2Ljg2TDEzNS43OCwxMjhsNzQuMjgsNDQuNTdBNCw0LDAsMCwxLDIxMS40MywxNzguMDZaIi8+PC9zdmc+)
 */
export function PhAsteriskThinIcon(props: PhAsteriskThinIconProps) {
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
      <path d="M211.43,178.06a4,4,0,0,1-5.49,1.37L132,135.06V216a4,4,0,0,1-8,0V135.06L50.06,179.43a4,4,0,0,1-4.12-6.86L120.22,128,45.94,83.43a4,4,0,0,1,4.12-6.86L124,120.94V40a4,4,0,0,1,8,0v80.94l73.94-44.37a4,4,0,1,1,4.12,6.86L135.78,128l74.28,44.57A4,4,0,0,1,211.43,178.06Z"/>
    </svg>
  );
}
