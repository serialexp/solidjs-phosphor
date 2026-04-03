import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignCenterHorizontalSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNzZIMTQwVjQ4YTEyLDEyLDAsMCwwLTI0LDBWNzZINDhBMjAsMjAsMCwwLDAsMjgsOTZ2NjRhMjAsMjAsMCwwLDAsMjAsMjBoNjh2MjhhMTIsMTIsMCwwLDAsMjQsMFYxODBoNjhhMjAsMjAsMCwwLDAsMjAtMjBWOTZBMjAsMjAsMCwwLDAsMjA4LDc2Wm0tNCw4MEg1MlYxMDBIMjA0WiIvPjwvc3ZnPg==)
 */
export function PhAlignCenterHorizontalSimpleBoldIcon(props: PhAlignCenterHorizontalSimpleBoldIconProps) {
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
      <path d="M208,76H140V48a12,12,0,0,0-24,0V76H48A20,20,0,0,0,28,96v64a20,20,0,0,0,20,20h68v28a12,12,0,0,0,24,0V180h68a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76Zm-4,80H52V100H204Z"/>
    </svg>
  );
}
