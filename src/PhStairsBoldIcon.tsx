import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhStairsBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjBINTZBMjAsMjAsMCwwLDAsMzYsNDBWMjE2YTIwLDIwLDAsMCwwLDIwLDIwSDIwMGEyMCwyMCwwLDAsMCwyMC0yMFY0MEEyMCwyMCwwLDAsMCwyMDAsMjBaTTE1MiwxNDhoNDR2MTZIMTE2VjE0OFptMTItMjRWMTA4aDMydjE2Wm0zMi04MFY4NEgxNTJhMTIsMTIsMCwwLDAtMTIsMTJ2MjhIMTA0YTEyLDEyLDAsMCwwLTEyLDEydjI4SDYwVjQ0Wk02MCwyMTJWMTg4SDE5NnYyNFoiLz48L3N2Zz4=)
 */
export function PhStairsBoldIcon(props: PhStairsBoldIconProps) {
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
      <path d="M200,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20ZM152,148h44v16H116V148Zm12-24V108h32v16Zm32-80V84H152a12,12,0,0,0-12,12v28H104a12,12,0,0,0-12,12v28H60V44ZM60,212V188H196v24Z"/>
    </svg>
  );
}
