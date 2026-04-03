import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotSupersetOfBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTg4SDg5LjY3bDE0LjU1LTE2SDE1MkE2OCw2OCwwLDAsMCwyMDQuODYsNjEuMjlsMTItMTMuMjJhMTIsMTIsMCwwLDAtMTcuNzYtMTYuMTRsLTEyLjQsMTMuNjNBNjcuNjIsNjcuNjIsMCwwLDAsMTUyLDM2SDU2YTEyLDEyLDAsMCwwLDAsMjRoOTZhNDMuNzQsNDMuNzQsMCwwLDEsMTguMDYsMy44OUw5My42LDE0OEg1NmExMiwxMiwwLDAsMCwwLDI0SDcxLjc4TDM5LjEyLDIwNy45M2ExMiwxMiwwLDEsMCwxNy43NiwxNi4xNGwxMS0xMi4wN0gyMDhhMTIsMTIsMCwwLDAsMC0yNFpNMTg4LjQ0LDc5LjM2QTQ0LDQ0LDAsMCwxLDE1MiwxNDhIMTI2WiIvPjwvc3ZnPg==)
 */
export function PhNotSupersetOfBoldIcon(props: PhNotSupersetOfBoldIconProps) {
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
      <path d="M208,188H89.67l14.55-16H152A68,68,0,0,0,204.86,61.29l12-13.22a12,12,0,0,0-17.76-16.14l-12.4,13.63A67.62,67.62,0,0,0,152,36H56a12,12,0,0,0,0,24h96a43.74,43.74,0,0,1,18.06,3.89L93.6,148H56a12,12,0,0,0,0,24H71.78L39.12,207.93a12,12,0,1,0,17.76,16.14l11-12.07H208a12,12,0,0,0,0-24ZM188.44,79.36A44,44,0,0,1,152,148H126Z"/>
    </svg>
  );
}
