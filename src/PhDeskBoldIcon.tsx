import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeskBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsNjBIMTJhMTIsMTIsMCwwLDAsMCwyNGg0VjE5MmExMiwxMiwwLDAsMCwyNCwwVjE1NkgyMTZ2MzZhMTIsMTIsMCwwLDAsMjQsMFY4NGg0YTEyLDEyLDAsMCwwLDAtMjRaTTQwLDg0aDc2djQ4SDQwWm0xNzYsNDhIMTQwVjg0aDc2Wk0xMDAsMTA4YTEyLDEyLDAsMCwxLTEyLDEySDY4YTEyLDEyLDAsMCwxLDAtMjRIODhBMTIsMTIsMCwwLDEsMTAwLDEwOFptNTYsMGExMiwxMiwwLDAsMSwxMi0xMmgyMGExMiwxMiwwLDAsMSwwLDI0SDE2OEExMiwxMiwwLDAsMSwxNTYsMTA4WiIvPjwvc3ZnPg==)
 */
export function PhDeskBoldIcon(props: PhDeskBoldIconProps) {
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
      <path d="M244,60H12a12,12,0,0,0,0,24h4V192a12,12,0,0,0,24,0V156H216v36a12,12,0,0,0,24,0V84h4a12,12,0,0,0,0-24ZM40,84h76v48H40Zm176,48H140V84h76ZM100,108a12,12,0,0,1-12,12H68a12,12,0,0,1,0-24H88A12,12,0,0,1,100,108Zm56,0a12,12,0,0,1,12-12h20a12,12,0,0,1,0,24H168A12,12,0,0,1,156,108Z"/>
    </svg>
  );
}
