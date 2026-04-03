import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDesktopFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBINDhBMjQsMjQsMCwwLDAsMjQsNjRWMTc2YTI0LDI0LDAsMCwwLDI0LDI0aDcydjE2SDk2YTgsOCwwLDAsMCwwLDE2aDY0YTgsOCwwLDAsMCwwLTE2SDEzNlYyMDBoNzJhMjQsMjQsMCwwLDAsMjQtMjRWNjRBMjQsMjQsMCwwLDAsMjA4LDQwWm0wLDE0NEg0OGE4LDgsMCwwLDEtOC04VjE2MEgyMTZ2MTZBOCw4LDAsMCwxLDIwOCwxODRaIi8+PC9zdmc+)
 */
export function PhDesktopFillIcon(props: PhDesktopFillIconProps) {
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
      <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm0,144H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"/>
    </svg>
  );
}
