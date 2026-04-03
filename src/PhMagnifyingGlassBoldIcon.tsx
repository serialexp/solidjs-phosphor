import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMagnifyingGlassBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIuNDksMjE1LjUxLDE4NSwxNjhhOTIuMTIsOTIuMTIsMCwxLDAtMTcsMTdsNDcuNTMsNDcuNTRhMTIsMTIsMCwwLDAsMTctMTdaTTQ0LDExMmE2OCw2OCwwLDEsMSw2OCw2OEE2OC4wNyw2OC4wNywwLDAsMSw0NCwxMTJaIi8+PC9zdmc+)
 */
export function PhMagnifyingGlassBoldIcon(props: PhMagnifyingGlassBoldIconProps) {
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
      <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"/>
    </svg>
  );
}
