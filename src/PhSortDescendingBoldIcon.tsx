import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSortDescendingBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNiwxMjhhMTIsMTIsMCwwLDEsMTItMTJoNjhhMTIsMTIsMCwwLDEsMCwyNEg0OEExMiwxMiwwLDAsMSwzNiwxMjhaTTQ4LDc2aDUyYTEyLDEyLDAsMCwwLDAtMjRINDhhMTIsMTIsMCwwLDAsMCwyNFpNMTgwLDE4MEg0OGExMiwxMiwwLDAsMCwwLDI0SDE4MGExMiwxMiwwLDAsMCwwLTI0Wk0yMzIuNDksNzkuNTFsLTQwLTQwYTEyLDEyLDAsMCwwLTE3LDBsLTQwLDQwYTEyLDEyLDAsMCwwLDE3LDE3TDE3Miw3N3Y2N2ExMiwxMiwwLDAsMCwyNCwwVjc3bDE5LjUxLDE5LjUyYTEyLDEyLDAsMCwwLDE3LTE3WiIvPjwvc3ZnPg==)
 */
export function PhSortDescendingBoldIcon(props: PhSortDescendingBoldIconProps) {
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
      <path d="M36,128a12,12,0,0,1,12-12h68a12,12,0,0,1,0,24H48A12,12,0,0,1,36,128ZM48,76h52a12,12,0,0,0,0-24H48a12,12,0,0,0,0,24ZM180,180H48a12,12,0,0,0,0,24H180a12,12,0,0,0,0-24ZM232.49,79.51l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,0,0,17,17L172,77v67a12,12,0,0,0,24,0V77l19.51,19.52a12,12,0,0,0,17-17Z"/>
    </svg>
  );
}
