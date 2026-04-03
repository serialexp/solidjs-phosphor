import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSplitHorizontalFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsNDhWMjA4YTgsOCwwLDAsMS0xNiwwVjEzNkg2NHYyNGE4LDgsMCwwLDEtMTMuNjYsNS42NmwtMzItMzJhOCw4LDAsMCwxLDAtMTEuMzJsMzItMzJBOCw4LDAsMCwxLDY0LDk2djI0SDk2VjQ4YTgsOCwwLDAsMSwxNiwwWm0xMjUuNjYsNzQuMzQtMzItMzJBOCw4LDAsMCwwLDE5Miw5NnYyNEgxNjBWNDhhOCw4LDAsMCwwLTE2LDBWMjA4YTgsOCwwLDAsMCwxNiwwVjEzNmgzMnYyNGE4LDgsMCwwLDAsMTMuNjYsNS42NmwzMi0zMkE4LDgsMCwwLDAsMjM3LjY2LDEyMi4zNFoiLz48L3N2Zz4=)
 */
export function PhSplitHorizontalFillIcon(props: PhSplitHorizontalFillIconProps) {
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
      <path d="M112,48V208a8,8,0,0,1-16,0V136H64v24a8,8,0,0,1-13.66,5.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,64,96v24H96V48a8,8,0,0,1,16,0Zm125.66,74.34-32-32A8,8,0,0,0,192,96v24H160V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V136h32v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,237.66,122.34Z"/>
    </svg>
  );
}
