import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextColumnsBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsNjRhMTIsMTIsMCwwLDEtMTIsMTJINDBhMTIsMTIsMCwwLDEsMC0yNGg2OEExMiwxMiwwLDAsMSwxMjAsNjRaTTEwOCw5Mkg0MGExMiwxMiwwLDAsMCwwLDI0aDY4YTEyLDEyLDAsMCwwLDAtMjRabTAsNDBINDBhMTIsMTIsMCwwLDAsMCwyNGg2OGExMiwxMiwwLDAsMCwwLTI0Wm0wLDQwSDQwYTEyLDEyLDAsMCwwLDAsMjRoNjhhMTIsMTIsMCwwLDAsMC0yNFptNDAtOTZoNjhhMTIsMTIsMCwwLDAsMC0yNEgxNDhhMTIsMTIsMCwwLDAsMCwyNFptNjgsMTZIMTQ4YTEyLDEyLDAsMCwwLDAsMjRoNjhhMTIsMTIsMCwwLDAsMC0yNFptMCw0MEgxNDhhMTIsMTIsMCwwLDAsMCwyNGg2OGExMiwxMiwwLDAsMCwwLTI0Wm0wLDQwSDE0OGExMiwxMiwwLDAsMCwwLDI0aDY4YTEyLDEyLDAsMCwwLDAtMjRaIi8+PC9zdmc+)
 */
export function PhTextColumnsBoldIcon(props: PhTextColumnsBoldIconProps) {
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
      <path d="M120,64a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24h68A12,12,0,0,1,120,64ZM108,92H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm40-96h68a12,12,0,0,0,0-24H148a12,12,0,0,0,0,24Zm68,16H148a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H148a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm0,40H148a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
