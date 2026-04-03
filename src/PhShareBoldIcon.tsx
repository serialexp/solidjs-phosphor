import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhShareBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIuNDksMTEyLjQ5bC00OCw0OGExMiwxMiwwLDAsMS0xNy0xN0wxOTUsMTE2SDE2NWE4NCw4NCwwLDAsMC04MS4zNiw2MywxMiwxMiwwLDEsMS0yMy4yNC02QTEwNy45NCwxMDcuOTQsMCwwLDEsMTY1LDkySDE5NUwxNjcuNTEsNjQuNDhhMTIsMTIsMCwwLDEsMTctMTdsNDgsNDhBMTIsMTIsMCwwLDEsMjMyLjQ5LDExMi40OVpNMTkyLDIwNEg0NFY4OGExMiwxMiwwLDAsMC0yNCwwVjIxNmExMiwxMiwwLDAsMCwxMiwxMkgxOTJhMTIsMTIsMCwwLDAsMC0yNFoiLz48L3N2Zz4=)
 */
export function PhShareBoldIcon(props: PhShareBoldIconProps) {
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
      <path d="M232.49,112.49l-48,48a12,12,0,0,1-17-17L195,116H165a84,84,0,0,0-81.36,63,12,12,0,1,1-23.24-6A107.94,107.94,0,0,1,165,92H195L167.51,64.48a12,12,0,0,1,17-17l48,48A12,12,0,0,1,232.49,112.49ZM192,204H44V88a12,12,0,0,0-24,0V216a12,12,0,0,0,12,12H192a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
