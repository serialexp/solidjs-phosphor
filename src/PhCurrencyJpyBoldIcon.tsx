import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyJpyBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDkuMjksNTUuNmwtNTYsNjguNEgxNzZhMTIsMTIsMCwwLDEsMCwyNEgxNDB2MTZoMzZhMTIsMTIsMCwwLDEsMCwyNEgxNDB2MjhhMTIsMTIsMCwwLDEtMjQsMFYxODhIODBhMTIsMTIsMCwwLDEsMC0yNGgzNlYxNDhIODBhMTIsMTIsMCwwLDEsMC0yNGgyMi42OGwtNTYtNjguNEExMiwxMiwwLDEsMSw2NS4yOSw0MC40TDEyOCwxMTcuMDUsMTkwLjcxLDQwLjRhMTIsMTIsMCwxLDEsMTguNTgsMTUuMloiLz48L3N2Zz4=)
 */
export function PhCurrencyJpyBoldIcon(props: PhCurrencyJpyBoldIconProps) {
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
      <path d="M209.29,55.6l-56,68.4H176a12,12,0,0,1,0,24H140v16h36a12,12,0,0,1,0,24H140v28a12,12,0,0,1-24,0V188H80a12,12,0,0,1,0-24h36V148H80a12,12,0,0,1,0-24h22.68l-56-68.4A12,12,0,1,1,65.29,40.4L128,117.05,190.71,40.4a12,12,0,1,1,18.58,15.2Z"/>
    </svg>
  );
}
