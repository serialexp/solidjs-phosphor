import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChalkboardSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTk2SDIyOFYxNjhhNCw0LDAsMCwwLTQtNEgxNjBhNCw0LDAsMCwwLTQsNHYyOEgzNlY1NmE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsNCw0djgwYTQsNCwwLDAsMCw4LDBWNTZhMTIsMTIsMCwwLDAtMTItMTJINDBBMTIsMTIsMCwwLDAsMjgsNTZWMTk2SDE2YTQsNCwwLDAsMCwwLDhIMjQwYTQsNCwwLDAsMCwwLThabS03Ni0yNGg1NnYyNEgxNjRaIi8+PC9zdmc+)
 */
export function PhChalkboardSimpleThinIcon(props: PhChalkboardSimpleThinIconProps) {
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
      <path d="M240,196H228V168a4,4,0,0,0-4-4H160a4,4,0,0,0-4,4v28H36V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v80a4,4,0,0,0,8,0V56a12,12,0,0,0-12-12H40A12,12,0,0,0,28,56V196H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8Zm-76-24h56v24H164Z"/>
    </svg>
  );
}
