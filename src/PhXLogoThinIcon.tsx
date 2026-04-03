import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhXLogoThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuMzcsMjEzLjg1LDE0Ny4xMywxMTIuOSwyMTEsNDIuNjlBNCw0LDAsMCwwLDIwNSwzNy4zMUwxNDIuNjgsMTA1LjksOTkuMzgsMzcuODVBNCw0LDAsMCwwLDk2LDM2SDQ4YTQsNCwwLDAsMC0zLjM3LDYuMTVMMTA4Ljg3LDE0My4xLDQ1LDIxMy4zMUE0LDQsMCwxLDAsNTEsMjE4LjY5bDYyLjM2LTY4LjU5LDQzLjMsNjguMDVBNCw0LDAsMCwwLDE2MCwyMjBoNDhhNCw0LDAsMCwwLDMuMzctNi4xNVpNMTYyLjIsMjEyLDU1LjI5LDQ0SDkzLjhMMjAwLjcxLDIxMloiLz48L3N2Zz4=)
 */
export function PhXLogoThinIcon(props: PhXLogoThinIconProps) {
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
      <path d="M211.37,213.85,147.13,112.9,211,42.69A4,4,0,0,0,205,37.31L142.68,105.9,99.38,37.85A4,4,0,0,0,96,36H48a4,4,0,0,0-3.37,6.15L108.87,143.1,45,213.31A4,4,0,1,0,51,218.69l62.36-68.59,43.3,68.05A4,4,0,0,0,160,220h48a4,4,0,0,0,3.37-6.15ZM162.2,212,55.29,44H93.8L200.71,212Z"/>
    </svg>
  );
}
