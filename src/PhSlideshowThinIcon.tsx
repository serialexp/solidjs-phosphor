import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSlideshowThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNTJINjRBMTIsMTIsMCwwLDAsNTIsNjRWMTkyYTEyLDEyLDAsMCwwLDEyLDEySDE5MmExMiwxMiwwLDAsMCwxMi0xMlY2NEExMiwxMiwwLDAsMCwxOTIsNTJabTQsMTQwYTQsNCwwLDAsMS00LDRINjRhNCw0LDAsMCwxLTQtNFY2NGE0LDQsMCwwLDEsNC00SDE5MmE0LDQsMCwwLDEsNCw0Wk0yMzYsNTZWMjAwYTQsNCwwLDAsMS04LDBWNTZhNCw0LDAsMCwxLDgsMFpNMjgsNTZWMjAwYTQsNCwwLDAsMS04LDBWNTZhNCw0LDAsMCwxLDgsMFoiLz48L3N2Zz4=)
 */
export function PhSlideshowThinIcon(props: PhSlideshowThinIconProps) {
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
      <path d="M192,52H64A12,12,0,0,0,52,64V192a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V64A12,12,0,0,0,192,52Zm4,140a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4ZM236,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0ZM28,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0Z"/>
    </svg>
  );
}
