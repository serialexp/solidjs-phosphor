import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsInLineVerticalFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MC4zNCw2OS42NkE4LDgsMCwwLDEsOTYsNTZoMjRWMTZhOCw4LDAsMCwxLDE2LDBWNTZoMjRhOCw4LDAsMCwxLDUuNjYsMTMuNjZsLTMyLDMyYTgsOCwwLDAsMS0xMS4zMiwwWm00My4zMiw4NC42OGE4LDgsMCwwLDAtMTEuMzIsMGwtMzIsMzJBOCw4LDAsMCwwLDk2LDIwMGgyNHY0MGE4LDgsMCwwLDAsMTYsMFYyMDBoMjRhOCw4LDAsMCwwLDUuNjYtMTMuNjZaTTIxNiwxMjBINDBhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 */
export function PhArrowsInLineVerticalFillIcon(props: PhArrowsInLineVerticalFillIconProps) {
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
      <path d="M90.34,69.66A8,8,0,0,1,96,56h24V16a8,8,0,0,1,16,0V56h24a8,8,0,0,1,5.66,13.66l-32,32a8,8,0,0,1-11.32,0Zm43.32,84.68a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,96,200h24v40a8,8,0,0,0,16,0V200h24a8,8,0,0,0,5.66-13.66ZM216,120H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
