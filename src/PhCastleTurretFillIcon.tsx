import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCastleTurretFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjE2SDIwMFYxMTUuMzFMMjExLjMxLDEwNEExNS44NiwxNS44NiwwLDAsMCwyMTYsOTIuNjlWNDhhMTYsMTYsMCwwLDAtMTYtMTZIMTgwYTgsOCwwLDAsMC04LDhWNjRIMTQ4VjQwYTgsOCwwLDAsMC04LThIMTE2YTgsOCwwLDAsMC04LDhWNjRIODRWNDBhOCw4LDAsMCwwLTgtOEg1NkExNiwxNiwwLDAsMCw0MCw0OFY5Mi42OUExNS44NiwxNS44NiwwLDAsMCw0NC42OSwxMDRMNTYsMTE1LjMxVjIxNkg0MGE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZaTTExMiwxNjhhMTYsMTYsMCwwLDEsMzIsMHY0OEgxMTJaIi8+PC9zdmc+)
 */
export function PhCastleTurretFillIcon(props: PhCastleTurretFillIconProps) {
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
      <path d="M216,216H200V115.31L211.31,104A15.86,15.86,0,0,0,216,92.69V48a16,16,0,0,0-16-16H180a8,8,0,0,0-8,8V64H148V40a8,8,0,0,0-8-8H116a8,8,0,0,0-8,8V64H84V40a8,8,0,0,0-8-8H56A16,16,0,0,0,40,48V92.69A15.86,15.86,0,0,0,44.69,104L56,115.31V216H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM112,168a16,16,0,0,1,32,0v48H112Z"/>
    </svg>
  );
}
