import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceTabletCameraFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjRINjRBMjQsMjQsMCwwLDAsNDAsNDhWMjA4YTI0LDI0LDAsMCwwLDI0LDI0SDE5MmEyNCwyNCwwLDAsMCwyNC0yNFY0OEEyNCwyNCwwLDAsMCwxOTIsMjRaTTEyOCw4MGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxMjgsODBaIi8+PC9zdmc+)
 */
export function PhDeviceTabletCameraFillIcon(props: PhDeviceTabletCameraFillIconProps) {
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
      <path d="M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24ZM128,80a12,12,0,1,1,12-12A12,12,0,0,1,128,80Z"/>
    </svg>
  );
}
