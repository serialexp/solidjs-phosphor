import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMonitorPlayIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBINDhBMjQsMjQsMCwwLDAsMjQsNjRWMTc2YTI0LDI0LDAsMCwwLDI0LDI0SDIwOGEyNCwyNCwwLDAsMCwyNC0yNFY2NEEyNCwyNCwwLDAsMCwyMDgsNDBabTgsMTM2YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFY2NGE4LDgsMCwwLDEsOC04SDIwOGE4LDgsMCwwLDEsOCw4Wm0tNDgsNDhhOCw4LDAsMCwxLTgsOEg5NmE4LDgsMCwwLDEsMC0xNmg2NEE4LDgsMCwwLDEsMTY4LDIyNFptLTMuNTYtMTEwLjY2LTQ4LTMyQTgsOCwwLDAsMCwxMDQsODh2NjRhOCw4LDAsMCwwLDEyLjQ0LDYuNjZsNDgtMzJhOCw4LDAsMCwwLDAtMTMuMzJaTTEyMCwxMzcuMDVWMTAzbDI1LjU4LDE3WiIvPjwvc3ZnPg==)
 */
export function PhMonitorPlayIcon(props: PhMonitorPlayIconProps) {
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
      <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Zm-3.56-110.66-48-32A8,8,0,0,0,104,88v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,137.05V103l25.58,17Z"/>
    </svg>
  );
}
