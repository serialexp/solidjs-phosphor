import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMapPinSimpleLineThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjEySDEzMlYxMzEuODNhNTIsNTIsMCwxLDAtOCwwVjIxMkg0MGE0LDQsMCwwLDAsMCw4SDIxNmE0LDQsMCwwLDAsMC04Wk04NCw4MGE0NCw0NCwwLDEsMSw0NCw0NEE0NC4wNSw0NC4wNSwwLDAsMSw4NCw4MFoiLz48L3N2Zz4=)
 */
export function PhMapPinSimpleLineThinIcon(props: PhMapPinSimpleLineThinIconProps) {
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
      <path d="M216,212H132V131.83a52,52,0,1,0-8,0V212H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM84,80a44,44,0,1,1,44,44A44.05,44.05,0,0,1,84,80Z"/>
    </svg>
  );
}
