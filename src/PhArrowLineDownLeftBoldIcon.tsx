import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineDownLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsNDhhMTIsMTIsMCwwLDEtMTIsMTJINDhhMTIsMTIsMCwwLDEsMC0yNEgyMjRBMTIsMTIsMCwwLDEsMjM2LDQ4Wk0xNzUuNTEsODcuNTEsODQsMTc5VjExMmExMiwxMiwwLDAsMC0yNCwwdjk2YTEyLDEyLDAsMCwwLDEyLDEyaDk2YTEyLDEyLDAsMCwwLDAtMjRIMTAxbDkxLjUyLTkxLjUxYTEyLDEyLDAsMCwwLTE3LTE3WiIvPjwvc3ZnPg==)
 */
export function PhArrowLineDownLeftBoldIcon(props: PhArrowLineDownLeftBoldIconProps) {
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
      <path d="M236,48a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24H224A12,12,0,0,1,236,48ZM175.51,87.51,84,179V112a12,12,0,0,0-24,0v96a12,12,0,0,0,12,12h96a12,12,0,0,0,0-24H101l91.52-91.51a12,12,0,0,0-17-17Z"/>
    </svg>
  );
}
