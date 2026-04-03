import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFastForwardCircleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDE5MmE4OCw4OCwwLDEsMSw4OC04OEE4OC4xLDg4LjEsMCwwLDEsMTI4LDIxNlptNjguOC05NC40LTQ4LTM2QTgsOCwwLDAsMCwxMzYsOTJ2NzJhOCw4LDAsMCwwLDEyLjgsNi40bDQ4LTM2YTgsOCwwLDAsMCwwLTEyLjhaTTE1MiwxNDhWMTA4bDI2LjY3LDIwWm0tMTkuMi0yNi40LTQ4LTM2QTgsOCwwLDAsMCw3Miw5MnY3MmE4LDgsMCwwLDAsMTIuOCw2LjRsNDgtMzZhOCw4LDAsMCwwLDAtMTIuOFpNODgsMTQ4VjEwOGwyNi42NywyMFoiLz48L3N2Zz4=)
 */
export function PhFastForwardCircleIcon(props: PhFastForwardCircleIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm68.8-94.4-48-36A8,8,0,0,0,136,92v72a8,8,0,0,0,12.8,6.4l48-36a8,8,0,0,0,0-12.8ZM152,148V108l26.67,20Zm-19.2-26.4-48-36A8,8,0,0,0,72,92v72a8,8,0,0,0,12.8,6.4l48-36a8,8,0,0,0,0-12.8ZM88,148V108l26.67,20Z"/>
    </svg>
  );
}
