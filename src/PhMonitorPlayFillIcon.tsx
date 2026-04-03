import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMonitorPlayFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMjI0YTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMCwxLDAtMTZoNjRBOCw4LDAsMCwxLDE2OCwyMjRaTTIzMiw2NFYxNzZhMjQsMjQsMCwwLDEtMjQsMjRINDhhMjQsMjQsMCwwLDEtMjQtMjRWNjRBMjQsMjQsMCwwLDEsNDgsNDBIMjA4QTI0LDI0LDAsMCwxLDIzMiw2NFptLTY4LDU2YTgsOCwwLDAsMC0zLjQxLTYuNTVsLTQwLTI4QTgsOCwwLDAsMCwxMDgsOTJ2NTZhOCw4LDAsMCwwLDEyLjU5LDYuNTVsNDAtMjhBOCw4LDAsMCwwLDE2NCwxMjBaIi8+PC9zdmc+)
 */
export function PhMonitorPlayFillIcon(props: PhMonitorPlayFillIconProps) {
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
      <path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224ZM232,64V176a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64Zm-68,56a8,8,0,0,0-3.41-6.55l-40-28A8,8,0,0,0,108,92v56a8,8,0,0,0,12.59,6.55l40-28A8,8,0,0,0,164,120Z"/>
    </svg>
  );
}
