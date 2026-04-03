import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBeltBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMTU2SDE5NlYxMDBoNDhhMTIsMTIsMCwwLDAsMC0yNEgxOTJhMjAsMjAsMCwwLDAtMTYtOEgxMTJhMjAsMjAsMCwwLDAtMTYsOEg2Ny4zYTEyLDEyLDAsMCwwLTIyLjYsMEgxMmExMiwxMiwwLDAsMCwwLDI0SDQ0djU2SDEyYTEyLDEyLDAsMCwwLDAsMjRINDQuN2ExMiwxMiwwLDAsMCwyMi42LDBIOTZhMjAsMjAsMCwwLDAsMTYsOGg2NGEyMCwyMCwwLDAsMCwxNi04aDUyYTEyLDEyLDAsMCwwLDAtMjRaTTY4LDEwMEg5MnY1Nkg2OFptNDgtOGg1NnYyNEgxNDRhMTIsMTIsMCwwLDAsMCwyNGgyOHYyNEgxMTZaIi8+PC9zdmc+)
 */
export function PhBeltBoldIcon(props: PhBeltBoldIconProps) {
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
      <path d="M244,156H196V100h48a12,12,0,0,0,0-24H192a20,20,0,0,0-16-8H112a20,20,0,0,0-16,8H67.3a12,12,0,0,0-22.6,0H12a12,12,0,0,0,0,24H44v56H12a12,12,0,0,0,0,24H44.7a12,12,0,0,0,22.6,0H96a20,20,0,0,0,16,8h64a20,20,0,0,0,16-8h52a12,12,0,0,0,0-24ZM68,100H92v56H68Zm48-8h56v24H144a12,12,0,0,0,0,24h28v24H116Z"/>
    </svg>
  );
}
