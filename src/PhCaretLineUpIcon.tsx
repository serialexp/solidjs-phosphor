import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLineUpIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsMTk3LjY2YTgsOCwwLDAsMS0xMS4zMiwwTDEyOCwxMjMuMzEsNTMuNjYsMTk3LjY2YTgsOCwwLDAsMS0xMS4zMi0xMS4zMmw4MC04MGE4LDgsMCwwLDEsMTEuMzIsMGw4MCw4MEE4LDgsMCwwLDEsMjEzLjY2LDE5Ny42NlpNNDgsODBIMjA4YTgsOCwwLDAsMCwwLTE2SDQ4YTgsOCwwLDAsMCwwLDE2WiIvPjwvc3ZnPg==)
 */
export function PhCaretLineUpIcon(props: PhCaretLineUpIconProps) {
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
      <path d="M213.66,197.66a8,8,0,0,1-11.32,0L128,123.31,53.66,197.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,197.66ZM48,80H208a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Z"/>
    </svg>
  );
}
