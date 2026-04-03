import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGradientBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMCwxMDhBMTIsMTIsMCwwLDEsMzIsOTZoNzZhMTIsMTIsMCwwLDEsMCwyNEgzMkExMiwxMiwwLDAsMSwyMCwxMDhaTTIyNCw5NkgxNDhhMTIsMTIsMCwwLDAsMCwyNGg3NmExMiwxMiwwLDAsMCwwLTI0Wk02OCwxMzZIMzJhMTIsMTIsMCwwLDAsMCwyNEg2OGExMiwxMiwwLDAsMCwwLTI0Wm0xNTYsMEgxODhhMTIsMTIsMCwwLDAsMCwyNGgzNmExMiwxMiwwLDAsMCwwLTI0Wk05NiwxNDhhMTIsMTIsMCwwLDAsMTIsMTJoNDBhMTIsMTIsMCwwLDAsMC0yNEgxMDhBMTIsMTIsMCwwLDAsOTYsMTQ4Wk01MiwxNzZIMzJhMTIsMTIsMCwwLDAsMCwyNEg1MmExMiwxMiwwLDAsMCwwLTI0Wm01NiwwSDkyYTEyLDEyLDAsMCwwLDAsMjRoMTZhMTIsMTIsMCwwLDAsMC0yNFptNTYsMEgxNDhhMTIsMTIsMCwwLDAsMCwyNGgxNmExMiwxMiwwLDAsMCwwLTI0Wm02MCwwSDIwNGExMiwxMiwwLDAsMCwwLDI0aDIwYTEyLDEyLDAsMCwwLDAtMjRaTTMyLDgwSDIyNGExMiwxMiwwLDAsMCwwLTI0SDMyYTEyLDEyLDAsMCwwLDAsMjRaIi8+PC9zdmc+)
 */
export function PhGradientBoldIcon(props: PhGradientBoldIconProps) {
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
      <path d="M20,108A12,12,0,0,1,32,96h76a12,12,0,0,1,0,24H32A12,12,0,0,1,20,108ZM224,96H148a12,12,0,0,0,0,24h76a12,12,0,0,0,0-24ZM68,136H32a12,12,0,0,0,0,24H68a12,12,0,0,0,0-24Zm156,0H188a12,12,0,0,0,0,24h36a12,12,0,0,0,0-24ZM96,148a12,12,0,0,0,12,12h40a12,12,0,0,0,0-24H108A12,12,0,0,0,96,148ZM52,176H32a12,12,0,0,0,0,24H52a12,12,0,0,0,0-24Zm56,0H92a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Zm56,0H148a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Zm60,0H204a12,12,0,0,0,0,24h20a12,12,0,0,0,0-24ZM32,80H224a12,12,0,0,0,0-24H32a12,12,0,0,0,0,24Z"/>
    </svg>
  );
}
