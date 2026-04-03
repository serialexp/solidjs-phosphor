import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEjectSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjAwYTgsOCwwLDAsMS04LDhIMzJhOCw4LDAsMSwxLDAtMTZIMjI0QTgsOCwwLDAsMSwyMzIsMjAwWk00MC4wOSwxNjBIMjE1LjkxYTE2LjEsMTYuMSwwLDAsMCwxMi40OC0yNi4yM0wxNDYuNzQsMzIuOTRhMjQuMTEsMjQuMTEsMCwwLDAtMzcuNDgsMEwyNy42MSwxMzMuNzdBMTYuMSwxNi4xLDAsMCwwLDQwLjA5LDE2MFoiLz48L3N2Zz4=)
 */
export function PhEjectSimpleFillIcon(props: PhEjectSimpleFillIconProps) {
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
      <path d="M232,200a8,8,0,0,1-8,8H32a8,8,0,1,1,0-16H224A8,8,0,0,1,232,200ZM40.09,160H215.91a16.1,16.1,0,0,0,12.48-26.23L146.74,32.94a24.11,24.11,0,0,0-37.48,0L27.61,133.77A16.1,16.1,0,0,0,40.09,160Z"/>
    </svg>
  );
}
