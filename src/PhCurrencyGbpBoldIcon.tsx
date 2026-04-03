import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyGbpBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsMjA4YTEyLDEyLDAsMCwxLTEyLDEySDU2YTEyLDEyLDAsMCwxLDAtMjRoNGEyNCwyNCwwLDAsMCwyNC0yNFYxNDBINTZhMTIsMTIsMCwwLDEsMC0yNEg4NFY4NGE1Niw1NiwwLDAsMSw5MS42My00My4yMUExMiwxMiwwLDAsMSwxNjAuMzUsNTkuMywzMS42NiwzMS42NiwwLDAsMCwxNDAsNTJhMzIsMzIsMCwwLDAtMzIsMzJ2MzJoMjhhMTIsMTIsMCwwLDEsMCwyNEgxMDh2MzJhNDcuNzQsNDcuNzQsMCwwLDEtNi40NCwyNEgxODRBMTIsMTIsMCwwLDEsMTk2LDIwOFoiLz48L3N2Zz4=)
 */
export function PhCurrencyGbpBoldIcon(props: PhCurrencyGbpBoldIconProps) {
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
      <path d="M196,208a12,12,0,0,1-12,12H56a12,12,0,0,1,0-24h4a24,24,0,0,0,24-24V140H56a12,12,0,0,1,0-24H84V84a56,56,0,0,1,91.63-43.21A12,12,0,0,1,160.35,59.3,31.66,31.66,0,0,0,140,52a32,32,0,0,0-32,32v32h28a12,12,0,0,1,0,24H108v32a47.74,47.74,0,0,1-6.44,24H184A12,12,0,0,1,196,208Z"/>
    </svg>
  );
}
