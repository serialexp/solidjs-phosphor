import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCalendarSlashBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01Ni44OCwzMS45M0ExMiwxMiwwLDAsMCw0OCwyOCwyMCwyMCwwLDAsMCwyOCw0OFYyMDhhMjAsMjAsMCwwLDAsMjAsMjBIMjA4YTEyLDEyLDAsMCwwLDguODgtMjAuMDdaTTUyLDIwNFY2Mi4yNEwxODAuODcsMjA0Wk0yMjgsNDhWMTY1LjM0YTEyLDEyLDAsMSwxLTI0LDBWMTAwSDE0NS42OWExMiwxMiwwLDAsMSwwLTI0SDIwNFY1MkgxODhhMTIsMTIsMCwwLDEtMjQsMEgxMDIuMDZhMTIsMTIsMCwwLDEsMC0yNEgxNjRWMjRhMTIsMTIsMCwwLDEsMjQsMHY0aDIwQTIwLDIwLDAsMCwxLDIyOCw0OFoiLz48L3N2Zz4=)
 */
export function PhCalendarSlashBoldIcon(props: PhCalendarSlashBoldIconProps) {
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
      <path d="M56.88,31.93A12,12,0,0,0,48,28,20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a12,12,0,0,0,8.88-20.07ZM52,204V62.24L180.87,204ZM228,48V165.34a12,12,0,1,1-24,0V100H145.69a12,12,0,0,1,0-24H204V52H188a12,12,0,0,1-24,0H102.06a12,12,0,0,1,0-24H164V24a12,12,0,0,1,24,0v4h20A20,20,0,0,1,228,48Z"/>
    </svg>
  );
}
