import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFlagPennantBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuOTQsOTIuNjdsLTE4NC02NEExMiwxMiwwLDAsMCw0NCw0MFYyMTZhMTIsMTIsMCwwLDAsMjQsMFYxNzYuNTNsMTc1Ljk0LTYxLjJhMTIsMTIsMCwwLDAsMC0yMi42NlpNNjgsMTUxLjEyVjU2Ljg4TDIwMy40NywxMDRaIi8+PC9zdmc+)
 */
export function PhFlagPennantBoldIcon(props: PhFlagPennantBoldIconProps) {
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
      <path d="M243.94,92.67l-184-64A12,12,0,0,0,44,40V216a12,12,0,0,0,24,0V176.53l175.94-61.2a12,12,0,0,0,0-22.66ZM68,151.12V56.88L203.47,104Z"/>
    </svg>
  );
}
