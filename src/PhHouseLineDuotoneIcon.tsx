import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHouseLineDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTE2LjY5VjIxNkgxNTJWMTUySDEwNHY2NEg0MFYxMTYuNjlsODIuMzQtODIuMzVhOCw4LDAsMCwxLDExLjMyLDBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQwLDIwOEgyMjRWMTM2bDIuMzQsMi4zNEE4LDgsMCwwLDAsMjM3LjY2LDEyN0wxMzkuMzEsMjguNjhhMTYsMTYsMCwwLDAtMjIuNjIsMEwxOC4zNCwxMjdhOCw4LDAsMCwwLDExLjMyLDExLjMxTDMyLDEzNnY3MkgxNmE4LDgsMCwwLDAsMCwxNkgyNDBhOCw4LDAsMCwwLDAtMTZaTTQ4LDEyMGw4MC04MCw4MCw4MHY4OEgxNjBWMTUyYTgsOCwwLDAsMC04LThIMTA0YTgsOCwwLDAsMC04LDh2NTZINDhabTk2LDg4SDExMlYxNjBoMzJaIi8+PC9zdmc+)
 */
export function PhHouseLineDuotoneIcon(props: PhHouseLineDuotoneIconProps) {
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
      <path d="M216,116.69V216H152V152H104v64H40V116.69l82.34-82.35a8,8,0,0,1,11.32,0Z" opacity="0.2"/><path d="M240,208H224V136l2.34,2.34A8,8,0,0,0,237.66,127L139.31,28.68a16,16,0,0,0-22.62,0L18.34,127a8,8,0,0,0,11.32,11.31L32,136v72H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,120l80-80,80,80v88H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48Zm96,88H112V160h32Z"/>
    </svg>
  );
}
