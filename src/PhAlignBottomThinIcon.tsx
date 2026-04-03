import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignBottomThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMjE2YTQsNCwwLDAsMS00LDRINDBhNCw0LDAsMCwxLDAtOEgyMTZBNCw0LDAsMCwxLDIyMCwyMTZabS04MC00MFY4MGExMiwxMiwwLDAsMSwxMi0xMmg0MGExMiwxMiwwLDAsMSwxMiwxMnY5NmExMiwxMiwwLDAsMS0xMiwxMkgxNTJBMTIsMTIsMCwwLDEsMTQwLDE3NlptOCwwYTQsNCwwLDAsMCw0LDRoNDBhNCw0LDAsMCwwLDQtNFY4MGE0LDQsMCwwLDAtNC00SDE1MmE0LDQsMCwwLDAtNCw0Wm0tOTYsMFY0MEExMiwxMiwwLDAsMSw2NCwyOGg0MGExMiwxMiwwLDAsMSwxMiwxMlYxNzZhMTIsMTIsMCwwLDEtMTIsMTJINjRBMTIsMTIsMCwwLDEsNTIsMTc2Wm04LDBhNCw0LDAsMCwwLDQsNGg0MGE0LDQsMCwwLDAsNC00VjQwYTQsNCwwLDAsMC00LTRINjRhNCw0LDAsMCwwLTQsNFoiLz48L3N2Zz4=)
 */
export function PhAlignBottomThinIcon(props: PhAlignBottomThinIconProps) {
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
      <path d="M220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216Zm-80-40V80a12,12,0,0,1,12-12h40a12,12,0,0,1,12,12v96a12,12,0,0,1-12,12H152A12,12,0,0,1,140,176Zm8,0a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4V80a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4Zm-96,0V40A12,12,0,0,1,64,28h40a12,12,0,0,1,12,12V176a12,12,0,0,1-12,12H64A12,12,0,0,1,52,176Zm8,0a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4V40a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4Z"/>
    </svg>
  );
}
