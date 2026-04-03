import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSpadeIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzEuNTgsMTYuODVhOCw4LDAsMCwwLTcuMTYsMEMxMjAuMzIsMTguOSwyNCw2Ny44NCwyNCwxMzZhNTYsNTYsMCwwLDAsNzQuMTUsNTNMODguMzQsMjIxLjdBOCw4LDAsMCwwLDk2LDIzMmg2NGE4LDgsMCwwLDAsNy42Ni0xMC4zTDE1Ny44NSwxODlBNTYsNTYsMCwwLDAsMjMyLDEzNkMyMzIsNjcuODQsMTM1LjY4LDE4LjksMTMxLjU4LDE2Ljg1Wk0xNzYsMTc2YTQwLDQwLDAsMCwxLTI2LjI5LTkuODUsOCw4LDAsMCwwLTEyLjkyLDguMzNMMTQ5LjI1LDIxNmgtNDIuNWwxMi40Ni00MS41MmE4LDgsMCwwLDAtMTIuOTItOC4zM0E0MCw0MCwwLDAsMSw0MCwxMzZjMC0yOS44OCwyNC40MS01Ni41NSw0NC44OS03My42NkEyNzkuMTMsMjc5LjEzLDAsMCwxLDEyOCwzMy4wNmEyNzkuMTMsMjc5LjEzLDAsMCwxLDQzLjExLDI5LjI4QzIwOC4yMSw5My4zNCwyMTYsMTE5LjUxLDIxNiwxMzZBNDAsNDAsMCwwLDEsMTc2LDE3NloiLz48L3N2Zz4=)
 */
export function PhSpadeIcon(props: PhSpadeIconProps) {
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
      <path d="M131.58,16.85a8,8,0,0,0-7.16,0C120.32,18.9,24,67.84,24,136a56,56,0,0,0,74.15,53L88.34,221.7A8,8,0,0,0,96,232h64a8,8,0,0,0,7.66-10.3L157.85,189A56,56,0,0,0,232,136C232,67.84,135.68,18.9,131.58,16.85ZM176,176a40,40,0,0,1-26.29-9.85,8,8,0,0,0-12.92,8.33L149.25,216h-42.5l12.46-41.52a8,8,0,0,0-12.92-8.33A40,40,0,0,1,40,136c0-29.88,24.41-56.55,44.89-73.66A279.13,279.13,0,0,1,128,33.06a279.13,279.13,0,0,1,43.11,29.28C208.21,93.34,216,119.51,216,136A40,40,0,0,1,176,176Z"/>
    </svg>
  );
}
