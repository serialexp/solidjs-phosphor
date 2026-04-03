import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextHThreeLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYsMTgwYTM0LDM0LDAsMCwxLTU4LjI5LDIzLjc5LDYsNiwwLDAsMSw4LjU4LTguMzlBMjIsMjIsMCwxLDAsMjEyLDE1OGE2LDYsMCwwLDEtNC45Mi05LjQ0TDIyOC40OCwxMThIMTkyYTYsNiwwLDAsMSwwLTEyaDQ4YTYsNiwwLDAsMSw0LjkxLDkuNDRsLTIyLjUyLDMyLjE4QTM0LjA2LDM0LjA2LDAsMCwxLDI0NiwxODBaTTE0NCw1MGE2LDYsMCwwLDAtNiw2djU0SDQ2VjU2YTYsNiwwLDAsMC0xMiwwVjE3NmE2LDYsMCwwLDAsMTIsMFYxMjJoOTJ2NTRhNiw2LDAsMCwwLDEyLDBWNTZBNiw2LDAsMCwwLDE0NCw1MFoiLz48L3N2Zz4=)
 */
export function PhTextHThreeLightIcon(props: PhTextHThreeLightIconProps) {
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
      <path d="M246,180a34,34,0,0,1-58.29,23.79,6,6,0,0,1,8.58-8.39A22,22,0,1,0,212,158a6,6,0,0,1-4.92-9.44L228.48,118H192a6,6,0,0,1,0-12h48a6,6,0,0,1,4.91,9.44l-22.52,32.18A34.06,34.06,0,0,1,246,180ZM144,50a6,6,0,0,0-6,6v54H46V56a6,6,0,0,0-12,0V176a6,6,0,0,0,12,0V122h92v54a6,6,0,0,0,12,0V56A6,6,0,0,0,144,50Z"/>
    </svg>
  );
}
