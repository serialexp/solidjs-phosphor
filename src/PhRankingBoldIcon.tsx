import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRankingBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDguNjIsMTAzLjc5YTEyLDEyLDAsMCwxLDcuNTktMTUuMTdsMTItNEExMiwxMiwwLDAsMSwxNDQsOTZ2NDBhMTIsMTIsMCwwLDEtMjQsMFYxMTJoMEExMiwxMiwwLDAsMSwxMDguNjIsMTAzLjc5Wk0yNTIsMjA4YTEyLDEyLDAsMCwxLTEyLDEySDE2YTEyLDEyLDAsMCwxLDAtMjRoNFYxMDRBMjAsMjAsMCwwLDEsNDAsODRINzZWNTZBMjAsMjAsMCwwLDEsOTYsMzZoNjRhMjAsMjAsMCwwLDEsMjAsMjB2NjhoMzZhMjAsMjAsMCwwLDEsMjAsMjB2NTJoNEExMiwxMiwwLDAsMSwyNTIsMjA4Wm0tNzItNjB2NDhoMzJWMTQ4Wm0tODAsNDhoNTZWNjBIMTAwWm0tNTYsMEg3NlYxMDhINDRaIi8+PC9zdmc+)
 */
export function PhRankingBoldIcon(props: PhRankingBoldIconProps) {
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
      <path d="M108.62,103.79a12,12,0,0,1,7.59-15.17l12-4A12,12,0,0,1,144,96v40a12,12,0,0,1-24,0V112h0A12,12,0,0,1,108.62,103.79ZM252,208a12,12,0,0,1-12,12H16a12,12,0,0,1,0-24h4V104A20,20,0,0,1,40,84H76V56A20,20,0,0,1,96,36h64a20,20,0,0,1,20,20v68h36a20,20,0,0,1,20,20v52h4A12,12,0,0,1,252,208Zm-72-60v48h32V148Zm-80,48h56V60H100Zm-56,0H76V108H44Z"/>
    </svg>
  );
}
