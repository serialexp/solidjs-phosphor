import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhKeyThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNzQsNDIuMjZBNzYsNzYsMCwwLDAsODguNTEsMTIxLjg0bC01Nyw1N0ExMS45MywxMS45MywwLDAsMCwyOCwxODcuMzFWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDcyYTQsNCwwLDAsMCw0LTRWMjA0SDk2YTQsNCwwLDAsMCw0LTRWMTgwaDIwYTQsNCwwLDAsMCwyLjgzLTEuMTdsMTEuMzMtMTEuMzRBNzUuNzIsNzUuNzIsMCwwLDAsMTYwLDE3MmguMUE3Niw3NiwwLDAsMCwyMTMuNzQsNDIuMjZabTE0LjIyLDU2Yy0xLjE1LDM2LjIyLTMxLjYsNjUuNzItNjcuODcsNjUuNzdIMTYwYTY3LjUyLDY3LjUyLDAsMCwxLTI1LjIxLTQuODMsNCw0LDAsMCwwLTQuNDUuODNsLTEyLDEySDk2YTQsNCwwLDAsMC00LDR2MjBINzJhNCw0LDAsMCwwLTQsNHYyMEg0MGE0LDQsMCwwLDEtNC00VjE4Ny4zMWE0LjA2LDQuMDYsMCwwLDEsMS4xNy0yLjgzTDk2LDEyNS42NmE0LDQsMCwwLDAsLjgzLTQuNDVBNjcuNTEsNjcuNTEsMCwwLDEsOTIsOTUuOTFDOTIsNTkuNjQsMTIxLjU1LDI5LjE5LDE1Ny43NywyOEE2OCw2OCwwLDAsMSwyMjgsOTguMjNaTTE4OCw3NmE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxODgsNzZaIi8+PC9zdmc+)
 */
export function PhKeyThinIcon(props: PhKeyThinIconProps) {
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
      <path d="M213.74,42.26A76,76,0,0,0,88.51,121.84l-57,57A11.93,11.93,0,0,0,28,187.31V216a12,12,0,0,0,12,12H72a4,4,0,0,0,4-4V204H96a4,4,0,0,0,4-4V180h20a4,4,0,0,0,2.83-1.17l11.33-11.34A75.72,75.72,0,0,0,160,172h.1A76,76,0,0,0,213.74,42.26Zm14.22,56c-1.15,36.22-31.6,65.72-67.87,65.77H160a67.52,67.52,0,0,1-25.21-4.83,4,4,0,0,0-4.45.83l-12,12H96a4,4,0,0,0-4,4v20H72a4,4,0,0,0-4,4v20H40a4,4,0,0,1-4-4V187.31a4.06,4.06,0,0,1,1.17-2.83L96,125.66a4,4,0,0,0,.83-4.45A67.51,67.51,0,0,1,92,95.91C92,59.64,121.55,29.19,157.77,28A68,68,0,0,1,228,98.23ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z"/>
    </svg>
  );
}
