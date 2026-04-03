import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineDownRightThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsNDBhNCw0LDAsMCwxLTQsNEg0MGE0LDQsMCwwLDEsMC04SDIxNkE0LDQsMCwwLDEsMjIwLDQwWm0tMjgsNjBhNCw0LDAsMCwwLTQsNHY4Ni4zNEw4Mi44Myw4NS4xN2E0LDQsMCwwLDAtNS42Niw1LjY2TDE4Mi4zNCwxOTZIOTZhNCw0LDAsMCwwLDAsOGg5NmE0LDQsMCwwLDAsNC00VjEwNEE0LDQsMCwwLDAsMTkyLDEwMFoiLz48L3N2Zz4=)
 */
export function PhArrowLineDownRightThinIcon(props: PhArrowLineDownRightThinIconProps) {
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
      <path d="M220,40a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,40Zm-28,60a4,4,0,0,0-4,4v86.34L82.83,85.17a4,4,0,0,0-5.66,5.66L182.34,196H96a4,4,0,0,0,0,8h96a4,4,0,0,0,4-4V104A4,4,0,0,0,192,100Z"/>
    </svg>
  );
}
