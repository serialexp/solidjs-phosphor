import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFramerLogoBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTA0VjQwYTEyLDEyLDAsMCwwLTEyLTEySDU2YTEyLDEyLDAsMCwwLTgsMjFMOTYuNDQsOTJINTZhMTIsMTIsMCwwLDAtMTIsMTJ2NjRhMTIsMTIsMCwwLDAsMy41Miw4LjQ5bDcyLDcyQTEyLDEyLDAsMCwwLDE0MCwyNDBWMTgwaDYwYTEyLDEyLDAsMCwwLDgtMjFsLTQ4LjQxLTQzSDIwMEExMiwxMiwwLDAsMCwyMTIsMTA0Wm0tNDMuNTYsNTJIMTI4YTEyLDEyLDAsMCwwLTEyLDEydjQzTDY4LDE2M1YxMTZoNTUuNDRaTTE4OCw5MkgxMzIuNTZsLTQ1LTQwSDE4OFoiLz48L3N2Zz4=)
 */
export function PhFramerLogoBoldIcon(props: PhFramerLogoBoldIconProps) {
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
      <path d="M212,104V40a12,12,0,0,0-12-12H56a12,12,0,0,0-8,21L96.44,92H56a12,12,0,0,0-12,12v64a12,12,0,0,0,3.52,8.49l72,72A12,12,0,0,0,140,240V180h60a12,12,0,0,0,8-21l-48.41-43H200A12,12,0,0,0,212,104Zm-43.56,52H128a12,12,0,0,0-12,12v43L68,163V116h55.44ZM188,92H132.56l-45-40H188Z"/>
    </svg>
  );
}
