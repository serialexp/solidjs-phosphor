import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignBottomSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMjMyYTEyLDEyLDAsMCwxLTEyLDEySDU2YTEyLDEyLDAsMCwxLDAtMjRIMjAwQTEyLDEyLDAsMCwxLDIxMiwyMzJaTTc2LDE4NFY0MEEyMCwyMCwwLDAsMSw5NiwyMGg2NGEyMCwyMCwwLDAsMSwyMCwyMFYxODRhMjAsMjAsMCwwLDEtMjAsMjBIOTZBMjAsMjAsMCwwLDEsNzYsMTg0Wm0yNC00aDU2VjQ0SDEwMFoiLz48L3N2Zz4=)
 */
export function PhAlignBottomSimpleBoldIcon(props: PhAlignBottomSimpleBoldIconProps) {
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
      <path d="M212,232a12,12,0,0,1-12,12H56a12,12,0,0,1,0-24H200A12,12,0,0,1,212,232ZM76,184V40A20,20,0,0,1,96,20h64a20,20,0,0,1,20,20V184a20,20,0,0,1-20,20H96A20,20,0,0,1,76,184Zm24-4h56V44H100Z"/>
    </svg>
  );
}
