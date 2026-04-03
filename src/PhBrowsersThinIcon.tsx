import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBrowsersThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINzJBMTIsMTIsMCwwLDAsNjAsNTZWNzZINDBBMTIsMTIsMCwwLDAsMjgsODhWMjAwYTEyLDEyLDAsMCwwLDEyLDEySDE4NGExMiwxMiwwLDAsMCwxMi0xMlYxODBoMjBhMTIsMTIsMCwwLDAsMTItMTJWNTZBMTIsMTIsMCwwLDAsMjE2LDQ0Wk00MCw4NEgxODRhNCw0LDAsMCwxLDQsNHYyMEgzNlY4OEE0LDQsMCwwLDEsNDAsODRaTTE4OCwyMDBhNCw0LDAsMCwxLTQsNEg0MGE0LDQsMCwwLDEtNC00VjExNkgxODhabTMyLTMyYTQsNCwwLDAsMS00LDRIMTk2Vjg4YTEyLDEyLDAsMCwwLTEyLTEySDY4VjU2YTQsNCwwLDAsMSw0LTRIMjE2YTQsNCwwLDAsMSw0LDRaIi8+PC9zdmc+)
 */
export function PhBrowsersThinIcon(props: PhBrowsersThinIconProps) {
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
      <path d="M216,44H72A12,12,0,0,0,60,56V76H40A12,12,0,0,0,28,88V200a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V180h20a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,84H184a4,4,0,0,1,4,4v20H36V88A4,4,0,0,1,40,84ZM188,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V116H188Zm32-32a4,4,0,0,1-4,4H196V88a12,12,0,0,0-12-12H68V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
