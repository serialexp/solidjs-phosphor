import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUDownLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTEyYTY4LjA3LDY4LjA3LDAsMCwxLTY4LDY4SDYxbDI3LjUyLDI3LjUxYTEyLDEyLDAsMCwxLTE3LDE3bC00OC00OGExMiwxMiwwLDAsMSwwLTE3bDQ4LTQ4YTEyLDEyLDAsMSwxLDE3LDE3TDYxLDE1NkgxNjhhNDQsNDQsMCwwLDAsMC04OEg4MGExMiwxMiwwLDAsMSwwLTI0aDg4QTY4LjA3LDY4LjA3LDAsMCwxLDIzNiwxMTJaIi8+PC9zdmc+)
 */
export function PhArrowUDownLeftBoldIcon(props: PhArrowUDownLeftBoldIconProps) {
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
      <path d="M236,112a68.07,68.07,0,0,1-68,68H61l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,1,1,17,17L61,156H168a44,44,0,0,0,0-88H80a12,12,0,0,1,0-24h88A68.07,68.07,0,0,1,236,112Z"/>
    </svg>
  );
}
