import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUUpRightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjcuNTEsMTI3LjUxLDE5NSwxMDBIODhhNDQsNDQsMCwwLDAsMCw4OGg4OGExMiwxMiwwLDAsMSwwLDI0SDg4QTY4LDY4LDAsMCwxLDg4LDc2SDE5NUwxNjcuNTEsNDguNDlhMTIsMTIsMCwxLDEsMTctMTdsNDgsNDhhMTIsMTIsMCwwLDEsMCwxN2wtNDgsNDhhMTIsMTIsMCwwLDEtMTctMTdaIi8+PC9zdmc+)
 */
export function PhArrowUUpRightBoldIcon(props: PhArrowUUpRightBoldIconProps) {
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
      <path d="M167.51,127.51,195,100H88a44,44,0,0,0,0,88h88a12,12,0,0,1,0,24H88A68,68,0,0,1,88,76H195L167.51,48.49a12,12,0,1,1,17-17l48,48a12,12,0,0,1,0,17l-48,48a12,12,0,0,1-17-17Z"/>
    </svg>
  );
}
