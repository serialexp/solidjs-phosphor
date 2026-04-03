import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUUpLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTQ0YTY4LjA3LDY4LjA3LDAsMCwxLTY4LDY4SDgwYTEyLDEyLDAsMCwxLDAtMjRoODhhNDQsNDQsMCwwLDAsMC04OEg2MWwyNy41MiwyNy41MWExMiwxMiwwLDAsMS0xNywxN2wtNDgtNDhhMTIsMTIsMCwwLDEsMC0xN2w0OC00OGExMiwxMiwwLDEsMSwxNywxN0w2MSw3NkgxNjhBNjguMDgsNjguMDgsMCwwLDEsMjM2LDE0NFoiLz48L3N2Zz4=)
 */
export function PhArrowUUpLeftBoldIcon(props: PhArrowUUpLeftBoldIconProps) {
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
      <path d="M236,144a68.07,68.07,0,0,1-68,68H80a12,12,0,0,1,0-24h88a44,44,0,0,0,0-88H61l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,1,1,17,17L61,76H168A68.08,68.08,0,0,1,236,144Z"/>
    </svg>
  );
}
