import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFadersHorizontalThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsODBhNCw0LDAsMCwxLDQtNGgzMmE0LDQsMCwwLDEsMCw4SDE4NEE0LDQsMCwwLDEsMTgwLDgwWk00MCw4NEgxNDh2MjBhNCw0LDAsMCwwLDgsMFY1NmE0LDQsMCwwLDAtOCwwVjc2SDQwYTQsNCwwLDAsMCwwLDhabTE3Niw4OEgxMjBhNCw0LDAsMCwwLDAsOGg5NmE0LDQsMCwwLDAsMC04Wk04OCwxNDhhNCw0LDAsMCwwLTQsNHYyMEg0MGE0LDQsMCwwLDAsMCw4SDg0djIwYTQsNCwwLDAsMCw4LDBWMTUyQTQsNCwwLDAsMCw4OCwxNDhaIi8+PC9zdmc+)
 */
export function PhFadersHorizontalThinIcon(props: PhFadersHorizontalThinIconProps) {
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
      <path d="M180,80a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H184A4,4,0,0,1,180,80ZM40,84H148v20a4,4,0,0,0,8,0V56a4,4,0,0,0-8,0V76H40a4,4,0,0,0,0,8Zm176,88H120a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8ZM88,148a4,4,0,0,0-4,4v20H40a4,4,0,0,0,0,8H84v20a4,4,0,0,0,8,0V152A4,4,0,0,0,88,148Z"/>
    </svg>
  );
}
