import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBookBookmarkDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJWMTkySDcyYTI0LDI0LDAsMCwwLTI0LDI0VjU2QTI0LDI0LDAsMCwxLDcyLDMyaDQwdjk2bDMyLTI0LDMyLDI0VjMyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCwyNEg3MkEzMiwzMiwwLDAsMCw0MCw1NlYyMjRhOCw4LDAsMCwwLDgsOEgxOTJhOCw4LDAsMCwwLDAtMTZINTZhMTYsMTYsMCwwLDEsMTYtMTZIMjA4YTgsOCwwLDAsMCw4LThWMzJBOCw4LDAsMCwwLDIwOCwyNFpNMTIwLDQwaDQ4djcyTDE0OC43OSw5Ny42YTgsOCwwLDAsMC05LjYsMEwxMjAsMTEyWm04MCwxNDRINzJhMzEuODIsMzEuODIsMCwwLDAtMTYsNC4yOVY1NkExNiwxNiwwLDAsMSw3Miw0MGgzMnY4OGE4LDgsMCwwLDAsMTIuOCw2LjRMMTQ0LDExNGwyNy4yMSwyMC40QTgsOCwwLDAsMCwxNzYsMTM2YTguMSw4LjEsMCwwLDAsMy41OC0uODRBOCw4LDAsMCwwLDE4NCwxMjhWNDBoMTZaIi8+PC9zdmc+)
 */
export function PhBookBookmarkDuotoneIcon(props: PhBookBookmarkDuotoneIconProps) {
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
      <path d="M208,32V192H72a24,24,0,0,0-24,24V56A24,24,0,0,1,72,32h40v96l32-24,32,24V32Z" opacity="0.2"/><path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24ZM120,40h48v72L148.79,97.6a8,8,0,0,0-9.6,0L120,112Zm80,144H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40h32v88a8,8,0,0,0,12.8,6.4L144,114l27.21,20.4A8,8,0,0,0,176,136a8.1,8.1,0,0,0,3.58-.84A8,8,0,0,0,184,128V40h16Z"/>
    </svg>
  );
}
