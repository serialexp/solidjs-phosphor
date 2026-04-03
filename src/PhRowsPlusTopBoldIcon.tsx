import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRowsPlusTopBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTU2SDQ4YTIwLDIwLDAsMCwwLTIwLDIwdjI0YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFYxNzZBMjAsMjAsMCwwLDAsMjA4LDE1NlptLTQsNDBINTJWMTgwSDIwNFptNC0xMTZINDhhMjAsMjAsMCwwLDAtMjAsMjB2MjRhMjAsMjAsMCwwLDAsMjAsMjBIMjA4YTIwLDIwLDAsMCwwLDIwLTIwVjEwMEEyMCwyMCwwLDAsMCwyMDgsODBabS00LDQwSDUyVjEwNEgyMDRaTTk2LDM2YTEyLDEyLDAsMCwxLDEyLTEyaDhWMTZhMTIsMTIsMCwwLDEsMjQsMHY4aDhhMTIsMTIsMCwwLDEsMCwyNGgtOHY4YTEyLDEyLDAsMCwxLTI0LDBWNDhoLThBMTIsMTIsMCwwLDEsOTYsMzZaIi8+PC9zdmc+)
 */
export function PhRowsPlusTopBoldIcon(props: PhRowsPlusTopBoldIconProps) {
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
      <path d="M208,156H48a20,20,0,0,0-20,20v24a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V176A20,20,0,0,0,208,156Zm-4,40H52V180H204Zm4-116H48a20,20,0,0,0-20,20v24a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V100A20,20,0,0,0,208,80Zm-4,40H52V104H204ZM96,36a12,12,0,0,1,12-12h8V16a12,12,0,0,1,24,0v8h8a12,12,0,0,1,0,24h-8v8a12,12,0,0,1-24,0V48h-8A12,12,0,0,1,96,36Z"/>
    </svg>
  );
}
