import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsMTAxLjY2bC05Niw5NmE4LDgsMCwwLDEtMTEuMzIsMEwzMiw5OS4zMVYxNTJhOCw4LDAsMCwxLTE2LDBWODBhOCw4LDAsMCwxLDgtOEg5NmE4LDgsMCwwLDEsMCwxNkg0My4zMUwxMzYsMTgwLjY5bDkwLjM0LTkwLjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMloiLz48L3N2Zz4=)
 */
export function PhArrowElbowLeftIcon(props: PhArrowElbowLeftIconProps) {
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
      <path d="M237.66,101.66l-96,96a8,8,0,0,1-11.32,0L32,99.31V152a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H43.31L136,180.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"/>
    </svg>
  );
}
