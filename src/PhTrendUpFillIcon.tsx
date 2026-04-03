import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrendUpFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsNTZ2NjRhOCw4LDAsMCwxLTEzLjY2LDUuNjZMMjAwLDk5LjMxbC01OC4zNCw1OC4zNWE4LDgsMCwwLDEtMTEuMzIsMEw5NiwxMjMuMzEsMjkuNjYsMTg5LjY2YTgsOCwwLDAsMS0xMS4zMi0xMS4zMmw3Mi03MmE4LDgsMCwwLDEsMTEuMzIsMEwxMzYsMTQwLjY5LDE4OC42OSw4OCwxNjIuMzQsNjEuNjZBOCw4LDAsMCwxLDE2OCw0OGg2NEE4LDgsMCwwLDEsMjQwLDU2WiIvPjwvc3ZnPg==)
 */
export function PhTrendUpFillIcon(props: PhTrendUpFillIconProps) {
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
      <path d="M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z"/>
    </svg>
  );
}
