import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChalkboardSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTg4aC00VjE2MGExMiwxMiwwLDAsMC0xMi0xMkgxNjBhMTIsMTIsMCwwLDAtMTIsMTJ2MjhINDRWNjBIMjEydjYwYTEyLDEyLDAsMCwwLDI0LDBWNTZhMjAsMjAsMCwwLDAtMjAtMjBINDBBMjAsMjAsMCwwLDAsMjAsNTZWMTg4SDE2YTEyLDEyLDAsMCwwLDAsMjRIMjQwYTEyLDEyLDAsMCwwLDAtMjRabS02OC0xNmg0MHYxNkgxNzJaIi8+PC9zdmc+)
 */
export function PhChalkboardSimpleBoldIcon(props: PhChalkboardSimpleBoldIconProps) {
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
      <path d="M240,188h-4V160a12,12,0,0,0-12-12H160a12,12,0,0,0-12,12v28H44V60H212v60a12,12,0,0,0,24,0V56a20,20,0,0,0-20-20H40A20,20,0,0,0,20,56V188H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24Zm-68-16h40v16H172Z"/>
    </svg>
  );
}
