import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBuildingsThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMjEySDIyMFY5NmExMiwxMiwwLDAsMC0xMi0xMkgxNDBWMzJhMTIsMTIsMCwwLDAtMTguNjYtMTBsLTgwLDUzLjMzYTEyLDEyLDAsMCwwLTUuMzQsMTBWMjEySDE2YTQsNCwwLDAsMCwwLDhIMjQwYTQsNCwwLDAsMCwwLThaTTIwOCw5MmE0LDQsMCwwLDEsNCw0VjIxMkgxNDBWOTJaTTQ0LDg1LjM0QTQsNCwwLDAsMSw0NS43OCw4Mmw4MC01My4zM0E0LDQsMCwwLDEsMTMyLDMyVjIxMkg0NFpNMTA4LDExMnYxNmE0LDQsMCwwLDEtOCwwVjExMmE0LDQsMCwwLDEsOCwwWm0tMzIsMHYxNmE0LDQsMCwwLDEtOCwwVjExMmE0LDQsMCwwLDEsOCwwWm0wLDU2djE2YTQsNCwwLDAsMS04LDBWMTY4YTQsNCwwLDAsMSw4LDBabTMyLDB2MTZhNCw0LDAsMCwxLTgsMFYxNjhhNCw0LDAsMCwxLDgsMFoiLz48L3N2Zz4=)
 */
export function PhBuildingsThinIcon(props: PhBuildingsThinIconProps) {
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
      <path d="M240,212H220V96a12,12,0,0,0-12-12H140V32a12,12,0,0,0-18.66-10l-80,53.33a12,12,0,0,0-5.34,10V212H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM208,92a4,4,0,0,1,4,4V212H140V92ZM44,85.34A4,4,0,0,1,45.78,82l80-53.33A4,4,0,0,1,132,32V212H44ZM108,112v16a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm-32,0v16a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm0,56v16a4,4,0,0,1-8,0V168a4,4,0,0,1,8,0Zm32,0v16a4,4,0,0,1-8,0V168a4,4,0,0,1,8,0Z"/>
    </svg>
  );
}
