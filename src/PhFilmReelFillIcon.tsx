import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFilmReelFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjE2SDE4My4zNkExMDMuOTUsMTAzLjk1LDAsMSwwLDEyOCwyMzJIMjMyYTgsOCwwLDAsMCwwLTE2Wk04MCwxNDhhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsODAsMTQ4Wm00OCw0OGEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSwxMjgsMTk2Wm0wLTk2YTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDEyOCwxMDBabTI4LDI4YTIwLDIwLDAsMSwxLDIwLDIwQTIwLDIwLDAsMCwxLDE1NiwxMjhaIi8+PC9zdmc+)
 */
export function PhFilmReelFillIcon(props: PhFilmReelFillIconProps) {
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
      <path d="M232,216H183.36A103.95,103.95,0,1,0,128,232H232a8,8,0,0,0,0-16ZM80,148a20,20,0,1,1,20-20A20,20,0,0,1,80,148Zm48,48a20,20,0,1,1,20-20A20,20,0,0,1,128,196Zm0-96a20,20,0,1,1,20-20A20,20,0,0,1,128,100Zm28,28a20,20,0,1,1,20,20A20,20,0,0,1,156,128Z"/>
    </svg>
  );
}
