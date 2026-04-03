import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCardsThreeBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsOTZINDhhMjAsMjAsMCwwLDAtMjAsMjB2ODRhMjAsMjAsMCwwLDAsMjAsMjBIMjA4YTIwLDIwLDAsMCwwLDIwLTIwVjExNkEyMCwyMCwwLDAsMCwyMDgsOTZabS00LDEwMEg1MlYxMjBIMjA0Wk00NCw2OEExMiwxMiwwLDAsMSw1Niw1NkgyMDBhMTIsMTIsMCwwLDEsMCwyNEg1NkExMiwxMiwwLDAsMSw0NCw2OFpNNjAsMjhBMTIsMTIsMCwwLDEsNzIsMTZIMTg0YTEyLDEyLDAsMCwxLDAsMjRINzJBMTIsMTIsMCwwLDEsNjAsMjhaIi8+PC9zdmc+)
 */
export function PhCardsThreeBoldIcon(props: PhCardsThreeBoldIconProps) {
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
      <path d="M208,96H48a20,20,0,0,0-20,20v84a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V116A20,20,0,0,0,208,96Zm-4,100H52V120H204ZM44,68A12,12,0,0,1,56,56H200a12,12,0,0,1,0,24H56A12,12,0,0,1,44,68ZM60,28A12,12,0,0,1,72,16H184a12,12,0,0,1,0,24H72A12,12,0,0,1,60,28Z"/>
    </svg>
  );
}
