import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowArcRightThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsODh2NjRhNCw0LDAsMCwxLTQsNEgxNjhhNCw0LDAsMCwxLDAtOGg1NC4zbC0yOS4yNC0yOUE5Miw5MiwwLDAsMCwzNiwxODRhNCw0LDAsMCwxLTgsMCwxMDAsMTAwLDAsMCwxLDE3MC43MS03MC43MUwyMjgsMTQyLjM5Vjg4YTQsNCwwLDAsMSw4LDBaIi8+PC9zdmc+)
 */
export function PhArrowArcRightThinIcon(props: PhArrowArcRightThinIconProps) {
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
      <path d="M236,88v64a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h54.3l-29.24-29A92,92,0,0,0,36,184a4,4,0,0,1-8,0,100,100,0,0,1,170.71-70.71L228,142.39V88a4,4,0,0,1,8,0Z"/>
    </svg>
  );
}
