import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUploadSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTQ0djY0YTEyLDEyLDAsMCwxLTEyLDEySDQwYTEyLDEyLDAsMCwxLTEyLTEyVjE0NGExMiwxMiwwLDAsMSwyNCwwdjUySDIwNFYxNDRhMTIsMTIsMCwwLDEsMjQsMFpNOTYuNDksODAuNDksMTE2LDYxdjgzYTEyLDEyLDAsMCwwLDI0LDBWNjFsMTkuNTEsMTkuNTJhMTIsMTIsMCwxLDAsMTctMTdsLTQwLTQwYTEyLDEyLDAsMCwwLTE3LDBsLTQwLDQwYTEyLDEyLDAsMSwwLDE3LDE3WiIvPjwvc3ZnPg==)
 */
export function PhUploadSimpleBoldIcon(props: PhUploadSimpleBoldIconProps) {
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
      <path d="M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0ZM96.49,80.49,116,61v83a12,12,0,0,0,24,0V61l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z"/>
    </svg>
  );
}
