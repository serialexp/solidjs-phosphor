import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhStepsBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIsNTZhMTIsMTIsMCwwLDEtMTIsMTJIMTk2djM2YTEyLDEyLDAsMCwxLTEyLDEySDE0MHYzNmExMiwxMiwwLDAsMS0xMiwxMkg4NHYzNmExMiwxMiwwLDAsMS0xMiwxMkgxNmExMiwxMiwwLDAsMSwwLTI0SDYwVjE1MmExMiwxMiwwLDAsMSwxMi0xMmg0NFYxMDRhMTIsMTIsMCwwLDEsMTItMTJoNDRWNTZhMTIsMTIsMCwwLDEsMTItMTJoNTZBMTIsMTIsMCwwLDEsMjUyLDU2WiIvPjwvc3ZnPg==)
 */
export function PhStepsBoldIcon(props: PhStepsBoldIconProps) {
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
      <path d="M252,56a12,12,0,0,1-12,12H196v36a12,12,0,0,1-12,12H140v36a12,12,0,0,1-12,12H84v36a12,12,0,0,1-12,12H16a12,12,0,0,1,0-24H60V152a12,12,0,0,1,12-12h44V104a12,12,0,0,1,12-12h44V56a12,12,0,0,1,12-12h56A12,12,0,0,1,252,56Z"/>
    </svg>
  );
}
