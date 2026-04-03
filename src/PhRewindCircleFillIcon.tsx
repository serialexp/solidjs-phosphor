import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRewindCircleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm01NiwxNDBhOCw4LDAsMCwxLTEyLjgsNi40bC00OC0zNkE4LDgsMCwwLDEsMTIwLDEyOHYzNmE4LDgsMCwwLDEtMTIuOCw2LjRsLTQ4LTM2YTgsOCwwLDAsMSwwLTEyLjhsNDgtMzZBOCw4LDAsMCwxLDEyMCw5MnYzNmE4LDgsMCwwLDEsMy4yLTYuNGw0OC0zNkE4LDgsMCwwLDEsMTg0LDkyWiIvPjwvc3ZnPg==)
 */
export function PhRewindCircleFillIcon(props: PhRewindCircleFillIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,140a8,8,0,0,1-12.8,6.4l-48-36A8,8,0,0,1,120,128v36a8,8,0,0,1-12.8,6.4l-48-36a8,8,0,0,1,0-12.8l48-36A8,8,0,0,1,120,92v36a8,8,0,0,1,3.2-6.4l48-36A8,8,0,0,1,184,92Z"/>
    </svg>
  );
}
