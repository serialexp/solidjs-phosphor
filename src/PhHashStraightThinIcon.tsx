import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHashStraightThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTU2SDE2NFYxMDBoNTJhNCw0LDAsMCwwLDAtOEgxNjRWNDBhNCw0LDAsMCwwLTgsMFY5MkgxMDBWNDBhNCw0LDAsMCwwLTgsMFY5Mkg0MGE0LDQsMCwwLDAsMCw4SDkydjU2SDQwYTQsNCwwLDAsMCwwLDhIOTJ2NTJhNCw0LDAsMCwwLDgsMFYxNjRoNTZ2NTJhNCw0LDAsMCwwLDgsMFYxNjRoNTJhNCw0LDAsMCwwLDAtOFptLTExNiwwVjEwMGg1NnY1NloiLz48L3N2Zz4=)
 */
export function PhHashStraightThinIcon(props: PhHashStraightThinIconProps) {
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
      <path d="M216,156H164V100h52a4,4,0,0,0,0-8H164V40a4,4,0,0,0-8,0V92H100V40a4,4,0,0,0-8,0V92H40a4,4,0,0,0,0,8H92v56H40a4,4,0,0,0,0,8H92v52a4,4,0,0,0,8,0V164h56v52a4,4,0,0,0,8,0V164h52a4,4,0,0,0,0-8Zm-116,0V100h56v56Z"/>
    </svg>
  );
}
