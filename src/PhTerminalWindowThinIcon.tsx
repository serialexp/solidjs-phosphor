import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTerminalWindowThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjIuNSwxMjQuODhhNCw0LDAsMCwxLDAsNi4yNGwtNDAsMzJhNCw0LDAsMCwxLTUtNi4yNEwxMTMuNiwxMjgsNzcuNSw5OS4xMmE0LDQsMCwwLDEsNS02LjI0Wk0xNzYsMTU2SDEzNmE0LDQsMCwwLDAsMCw4aDQwYTQsNCwwLDAsMCwwLThaTTIyOCw1NlYyMDBhMTIsMTIsMCwwLDEtMTIsMTJINDBhMTIsMTIsMCwwLDEtMTItMTJWNTZBMTIsMTIsMCwwLDEsNDAsNDRIMjE2QTEyLDEyLDAsMCwxLDIyOCw1NlptLTgsMGE0LDQsMCwwLDAtNC00SDQwYTQsNCwwLDAsMC00LDRWMjAwYTQsNCwwLDAsMCw0LDRIMjE2YTQsNCwwLDAsMCw0LTRaIi8+PC9zdmc+)
 */
export function PhTerminalWindowThinIcon(props: PhTerminalWindowThinIconProps) {
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
      <path d="M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z"/>
    </svg>
  );
}
