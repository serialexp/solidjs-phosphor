import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLinkedinLogoThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjhINDBBMTIsMTIsMCwwLDAsMjgsNDBWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDIxNmExMiwxMiwwLDAsMCwxMi0xMlY0MEExMiwxMiwwLDAsMCwyMTYsMjhabTQsMTg4YTQsNCwwLDAsMS00LDRINDBhNCw0LDAsMCwxLTQtNFY0MGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsNCw0Wk05MiwxMTJ2NjRhNCw0LDAsMCwxLTgsMFYxMTJhNCw0LDAsMCwxLDgsMFptODgsMjh2MzZhNCw0LDAsMCwxLTgsMFYxNDBhMjQsMjQsMCwwLDAtNDgsMHYzNmE0LDQsMCwwLDEtOCwwVjExMmE0LDQsMCwwLDEsOCwwdjYuODdBMzIsMzIsMCwwLDEsMTgwLDE0MFpNOTYsODRhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsOTYsODRaIi8+PC9zdmc+)
 */
export function PhLinkedinLogoThinIcon(props: PhLinkedinLogoThinIconProps) {
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
      <path d="M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z"/>
    </svg>
  );
}
