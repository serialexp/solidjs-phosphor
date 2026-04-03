import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsHorizontalIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsMTMzLjY2bC0zMiwzMmE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMjEyLjY5LDEzNkg0My4zMWwxOC4zNSwxOC4zNGE4LDgsMCwwLDEtMTEuMzIsMTEuMzJsLTMyLTMyYTgsOCwwLDAsMSwwLTExLjMybDMyLTMyYTgsOCwwLDAsMSwxMS4zMiwxMS4zMkw0My4zMSwxMjBIMjEyLjY5bC0xOC4zNS0xOC4zNGE4LDgsMCwwLDEsMTEuMzItMTEuMzJsMzIsMzJBOCw4LDAsMCwxLDIzNy42NiwxMzMuNjZaIi8+PC9zdmc+)
 */
export function PhArrowsHorizontalIcon(props: PhArrowsHorizontalIconProps) {
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
      <path d="M237.66,133.66l-32,32a8,8,0,0,1-11.32-11.32L212.69,136H43.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L43.31,120H212.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,133.66Z"/>
    </svg>
  );
}
