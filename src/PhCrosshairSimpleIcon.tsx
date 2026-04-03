import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCrosshairSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm04LDE5MS42M1YxODRhOCw4LDAsMCwwLTE2LDB2MzEuNjNBODguMTMsODguMTMsMCwwLDEsNDAuMzcsMTM2SDcyYTgsOCwwLDAsMCwwLTE2SDQwLjM3QTg4LjEzLDg4LjEzLDAsMCwxLDEyMCw0MC4zN1Y3MmE4LDgsMCwwLDAsMTYsMFY0MC4zN0E4OC4xMyw4OC4xMywwLDAsMSwyMTUuNjMsMTIwSDE4NGE4LDgsMCwwLDAsMCwxNmgzMS42M0E4OC4xMyw4OC4xMywwLDAsMSwxMzYsMjE1LjYzWiIvPjwvc3ZnPg==)
 */
export function PhCrosshairSimpleIcon(props: PhCrosshairSimpleIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V184a8,8,0,0,0-16,0v31.63A88.13,88.13,0,0,1,40.37,136H72a8,8,0,0,0,0-16H40.37A88.13,88.13,0,0,1,120,40.37V72a8,8,0,0,0,16,0V40.37A88.13,88.13,0,0,1,215.63,120H184a8,8,0,0,0,0,16h31.63A88.13,88.13,0,0,1,136,215.63Z"/>
    </svg>
  );
}
