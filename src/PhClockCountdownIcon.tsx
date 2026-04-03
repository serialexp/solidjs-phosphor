import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhClockCountdownIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTM2LjY2QTEwNC4xMiwxMDQuMTIsMCwxLDEsMTE5LjM0LDI0LDgsOCwwLDAsMSwxMjAuNjYsNDAsODguMTIsODguMTIsMCwxLDAsMjE2LDEzNS4zNCw4LDgsMCwwLDEsMjMyLDEzNi42NlpNMTIwLDcydjU2YTgsOCwwLDAsMCw4LDhoNTZhOCw4LDAsMCwwLDAtMTZIMTM2VjcyYTgsOCwwLDAsMC0xNiwwWm00MC0yNGExMiwxMiwwLDEsMC0xMi0xMkExMiwxMiwwLDAsMCwxNjAsNDhabTM2LDI0YTEyLDEyLDAsMSwwLTEyLTEyQTEyLDEyLDAsMCwwLDE5Niw3MlptMjQsMzZhMTIsMTIsMCwxLDAtMTItMTJBMTIsMTIsMCwwLDAsMjIwLDEwOFoiLz48L3N2Zz4=)
 */
export function PhClockCountdownIcon(props: PhClockCountdownIconProps) {
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
      <path d="M232,136.66A104.12,104.12,0,1,1,119.34,24,8,8,0,0,1,120.66,40,88.12,88.12,0,1,0,216,135.34,8,8,0,0,1,232,136.66ZM120,72v56a8,8,0,0,0,8,8h56a8,8,0,0,0,0-16H136V72a8,8,0,0,0-16,0Zm40-24a12,12,0,1,0-12-12A12,12,0,0,0,160,48Zm36,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm24,36a12,12,0,1,0-12-12A12,12,0,0,0,220,108Z"/>
    </svg>
  );
}
