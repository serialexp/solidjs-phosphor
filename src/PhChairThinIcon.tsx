import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChairThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTQwSDE3MlYxMDBoMjBhMTIsMTIsMCwwLDAsMTItMTJWNDBhMTIsMTIsMCwwLDAtMTItMTJINjRBMTIsMTIsMCwwLDAsNTIsNDBWODhhMTIsMTIsMCwwLDAsMTIsMTJIODR2NDBINDhhMTIsMTIsMCwwLDAtMTIsMTJ2MTZhMTIsMTIsMCwwLDAsMTIsMTJINjB2NDRhNCw0LDAsMCwwLDgsMFYxODBIMTg4djQ0YTQsNCwwLDAsMCw4LDBWMTgwaDEyYTEyLDEyLDAsMCwwLDEyLTEyVjE1MkExMiwxMiwwLDAsMCwyMDgsMTQwWk02MCw4OFY0MGE0LDQsMCwwLDEsNC00SDE5MmE0LDQsMCwwLDEsNCw0Vjg4YTQsNCwwLDAsMS00LDRINjRBNCw0LDAsMCwxLDYwLDg4Wm0zMiwxMmg3MnY0MEg5MlptMTIwLDY4YTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFYxNTJhNCw0LDAsMCwxLDQtNEgyMDhhNCw0LDAsMCwxLDQsNFoiLz48L3N2Zz4=)
 */
export function PhChairThinIcon(props: PhChairThinIconProps) {
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
      <path d="M208,140H172V100h20a12,12,0,0,0,12-12V40a12,12,0,0,0-12-12H64A12,12,0,0,0,52,40V88a12,12,0,0,0,12,12H84v40H48a12,12,0,0,0-12,12v16a12,12,0,0,0,12,12H60v44a4,4,0,0,0,8,0V180H188v44a4,4,0,0,0,8,0V180h12a12,12,0,0,0,12-12V152A12,12,0,0,0,208,140ZM60,88V40a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4V88a4,4,0,0,1-4,4H64A4,4,0,0,1,60,88Zm32,12h72v40H92Zm120,68a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
