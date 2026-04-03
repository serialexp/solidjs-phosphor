import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSplitHorizontalIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsNDhWMjA4YTgsOCwwLDAsMS0xNiwwVjEzNkg0My4zMWwxOC4zNSwxOC4zNGE4LDgsMCwwLDEtMTEuMzIsMTEuMzJsLTMyLTMyYTgsOCwwLDAsMSwwLTExLjMybDMyLTMyYTgsOCwwLDAsMSwxMS4zMiwxMS4zMkw0My4zMSwxMjBIOTZWNDhhOCw4LDAsMCwxLDE2LDBabTEyNS42Niw3NC4zNC0zMi0zMmE4LDgsMCwwLDAtMTEuMzIsMTEuMzJMMjEyLjY5LDEyMEgxNjBWNDhhOCw4LDAsMCwwLTE2LDBWMjA4YTgsOCwwLDAsMCwxNiwwVjEzNmg1Mi42OWwtMTguMzUsMTguMzRhOCw4LDAsMCwwLDExLjMyLDExLjMybDMyLTMyQTgsOCwwLDAsMCwyMzcuNjYsMTIyLjM0WiIvPjwvc3ZnPg==)
 */
export function PhSplitHorizontalIcon(props: PhSplitHorizontalIconProps) {
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
      <path d="M112,48V208a8,8,0,0,1-16,0V136H43.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L43.31,120H96V48a8,8,0,0,1,16,0Zm125.66,74.34-32-32a8,8,0,0,0-11.32,11.32L212.69,120H160V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V136h52.69l-18.35,18.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,237.66,122.34Z"/>
    </svg>
  );
}
