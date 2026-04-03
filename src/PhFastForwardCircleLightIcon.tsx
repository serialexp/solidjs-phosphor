import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFastForwardCircleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFptNjMuNi05NC44LTQ4LTM2QTYsNiwwLDAsMCwxMzQsOTJ2MzBMODcuNiw4Ny4yQTYsNiwwLDAsMCw3OCw5MnY3MmE2LDYsMCwwLDAsOS42LDQuOEwxMzQsMTM0djMwYTYsNiwwLDAsMCw5LjYsNC44bDQ4LTM2YTYsNiwwLDAsMCwwLTkuNlpNOTAsMTUyVjEwNGwzMiwyNFptNTYsMFYxMDRsMzIsMjRaIi8+PC9zdmc+)
 */
export function PhFastForwardCircleLightIcon(props: PhFastForwardCircleLightIconProps) {
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
      <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm63.6-94.8-48-36A6,6,0,0,0,134,92v30L87.6,87.2A6,6,0,0,0,78,92v72a6,6,0,0,0,9.6,4.8L134,134v30a6,6,0,0,0,9.6,4.8l48-36a6,6,0,0,0,0-9.6ZM90,152V104l32,24Zm56,0V104l32,24Z"/>
    </svg>
  );
}
