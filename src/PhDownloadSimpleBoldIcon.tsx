import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDownloadSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTQ0djY0YTEyLDEyLDAsMCwxLTEyLDEySDQwYTEyLDEyLDAsMCwxLTEyLTEyVjE0NGExMiwxMiwwLDAsMSwyNCwwdjUySDIwNFYxNDRhMTIsMTIsMCwwLDEsMjQsMFptLTEwOC40OSw4LjQ5YTEyLDEyLDAsMCwwLDE3LDBsNDAtNDBhMTIsMTIsMCwwLDAtMTctMTdMMTQwLDExNVYzMmExMiwxMiwwLDAsMC0yNCwwdjgzTDk2LjQ5LDk1LjUxYTEyLDEyLDAsMCwwLTE3LDE3WiIvPjwvc3ZnPg==)
 */
export function PhDownloadSimpleBoldIcon(props: PhDownloadSimpleBoldIconProps) {
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
      <path d="M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,115V32a12,12,0,0,0-24,0v83L96.49,95.51a12,12,0,0,0-17,17Z"/>
    </svg>
  );
}
