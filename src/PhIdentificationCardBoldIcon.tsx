import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhIdentificationCardBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsMTA4YTEyLDEyLDAsMCwxLDEyLTEyaDI4YTEyLDEyLDAsMCwxLDAsMjRIMTYwQTEyLDEyLDAsMCwxLDE0OCwxMDhabTQwLDI4SDE2OGExMiwxMiwwLDAsMCwwLDI0aDIwYTEyLDEyLDAsMCwwLDAtMjRabTQ4LTgwVjIwMGEyMCwyMCwwLDAsMS0yMCwyMEg0MGEyMCwyMCwwLDAsMS0yMC0yMFY1NkEyMCwyMCwwLDAsMSw0MCwzNkgyMTZBMjAsMjAsMCwwLDEsMjM2LDU2Wm0tMjQsNEg0NFYxOTZIMjEyWk01OC4yOCwxNTkuMzdBNDMuODIsNDMuODIsMCwwLDEsNzEuNTMsMTQyYTM2LDM2LDAsMSwxLDU2Ljk0LDAsNDMuODQsNDMuODQsMCwwLDEsMTMuMjYsMTcuMzcsMTIsMTIsMCwwLDEtMjIuMTUsOS4yNkMxMTYuNDgsMTYxLjE5LDEwOC40MiwxNTYsMTAwLDE1NnMtMTYuNDcsNS4yLTE5LjU5LDEyLjYzYTEyLDEyLDAsMSwxLTIyLjEzLTkuMjZaTTg4LDEyMGExMiwxMiwwLDEsMCwxMi0xMkExMiwxMiwwLDAsMCw4OCwxMjBaIi8+PC9zdmc+)
 */
export function PhIdentificationCardBoldIcon(props: PhIdentificationCardBoldIconProps) {
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
      <path d="M148,108a12,12,0,0,1,12-12h28a12,12,0,0,1,0,24H160A12,12,0,0,1,148,108Zm40,28H168a12,12,0,0,0,0,24h20a12,12,0,0,0,0-24Zm48-80V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212ZM58.28,159.37A43.82,43.82,0,0,1,71.53,142a36,36,0,1,1,56.94,0,43.84,43.84,0,0,1,13.26,17.37,12,12,0,0,1-22.15,9.26C116.48,161.19,108.42,156,100,156s-16.47,5.2-19.59,12.63a12,12,0,1,1-22.13-9.26ZM88,120a12,12,0,1,0,12-12A12,12,0,0,0,88,120Z"/>
    </svg>
  );
}
