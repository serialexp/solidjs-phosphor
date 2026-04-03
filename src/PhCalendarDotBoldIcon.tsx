import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCalendarDotBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsMTUyYTIwLDIwLDAsMSwxLTIwLTIwQTIwLDIwLDAsMCwxLDE0OCwxNTJaTTIyOCw0OFYyMDhhMjAsMjAsMCwwLDEtMjAsMjBINDhhMjAsMjAsMCwwLDEtMjAtMjBWNDhBMjAsMjAsMCwwLDEsNDgsMjhINjhWMjRhMTIsMTIsMCwwLDEsMjQsMHY0aDcyVjI0YTEyLDEyLDAsMCwxLDI0LDB2NGgyMEEyMCwyMCwwLDAsMSwyMjgsNDhaTTUyLDUyVjc2SDIwNFY1MkgxODhhMTIsMTIsMCwwLDEtMjQsMEg5MmExMiwxMiwwLDAsMS0yNCwwWk0yMDQsMjA0VjEwMEg1MlYyMDRaIi8+PC9zdmc+)
 */
export function PhCalendarDotBoldIcon(props: PhCalendarDotBoldIconProps) {
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
      <path d="M148,152a20,20,0,1,1-20-20A20,20,0,0,1,148,152ZM228,48V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H68V24a12,12,0,0,1,24,0v4h72V24a12,12,0,0,1,24,0v4h20A20,20,0,0,1,228,48ZM52,52V76H204V52H188a12,12,0,0,1-24,0H92a12,12,0,0,1-24,0ZM204,204V100H52V204Z"/>
    </svg>
  );
}
