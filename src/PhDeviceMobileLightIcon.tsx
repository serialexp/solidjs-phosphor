import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceMobileLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMThIODBBMjIsMjIsMCwwLDAsNTgsNDBWMjE2YTIyLDIyLDAsMCwwLDIyLDIyaDk2YTIyLDIyLDAsMCwwLDIyLTIyVjQwQTIyLDIyLDAsMCwwLDE3NiwxOFpNNzAsNjJIMTg2VjE5NEg3MFpNODAsMzBoOTZhMTAsMTAsMCwwLDEsMTAsMTBWNTBINzBWNDBBMTAsMTAsMCwwLDEsODAsMzBabTk2LDE5Nkg4MGExMCwxMCwwLDAsMS0xMC0xMFYyMDZIMTg2djEwQTEwLDEwLDAsMCwxLDE3NiwyMjZaIi8+PC9zdmc+)
 */
export function PhDeviceMobileLightIcon(props: PhDeviceMobileLightIconProps) {
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
      <path d="M176,18H80A22,22,0,0,0,58,40V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22V40A22,22,0,0,0,176,18ZM70,62H186V194H70ZM80,30h96a10,10,0,0,1,10,10V50H70V40A10,10,0,0,1,80,30Zm96,196H80a10,10,0,0,1-10-10V206H186v10A10,10,0,0,1,176,226Z"/>
    </svg>
  );
}
