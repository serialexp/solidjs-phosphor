import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLinkSimpleHorizontalBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwxMTZoOTZhMTIsMTIsMCwwLDEsMCwyNEg4MGExMiwxMiwwLDAsMSwwLTI0Wm0yNCw0OEg2NGEzNiwzNiwwLDAsMSwwLTcyaDQwYTEyLDEyLDAsMCwwLDAtMjRINjRhNjAsNjAsMCwwLDAsMCwxMjBoNDBhMTIsMTIsMCwwLDAsMC0yNFptODgtOTZIMTUyYTEyLDEyLDAsMCwwLDAsMjRoNDBhMzYsMzYsMCwwLDEsMCw3MkgxNTJhMTIsMTIsMCwwLDAsMCwyNGg0MGE2MCw2MCwwLDAsMCwwLTEyMFoiLz48L3N2Zz4=)
 */
export function PhLinkSimpleHorizontalBoldIcon(props: PhLinkSimpleHorizontalBoldIconProps) {
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
      <path d="M80,116h96a12,12,0,0,1,0,24H80a12,12,0,0,1,0-24Zm24,48H64a36,36,0,0,1,0-72h40a12,12,0,0,0,0-24H64a60,60,0,0,0,0,120h40a12,12,0,0,0,0-24Zm88-96H152a12,12,0,0,0,0,24h40a36,36,0,0,1,0,72H152a12,12,0,0,0,0,24h40a60,60,0,0,0,0-120Z"/>
    </svg>
  );
}
