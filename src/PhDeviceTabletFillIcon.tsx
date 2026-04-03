import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceTabletFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjRINjRBMjQsMjQsMCwwLDAsNDAsNDhWMjA4YTI0LDI0LDAsMCwwLDI0LDI0SDE5MmEyNCwyNCwwLDAsMCwyNC0yNFY0OEEyNCwyNCwwLDAsMCwxOTIsMjRaTTY0LDQwSDE5MmE4LDgsMCwwLDEsOCw4djhINTZWNDhBOCw4LDAsMCwxLDY0LDQwWk0xOTIsMjE2SDY0YTgsOCwwLDAsMS04LTh2LThIMjAwdjhBOCw4LDAsMCwxLDE5MiwyMTZaIi8+PC9zdmc+)
 */
export function PhDeviceTabletFillIcon(props: PhDeviceTabletFillIconProps) {
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
      <path d="M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24ZM64,40H192a8,8,0,0,1,8,8v8H56V48A8,8,0,0,1,64,40ZM192,216H64a8,8,0,0,1-8-8v-8H200v8A8,8,0,0,1,192,216Z"/>
    </svg>
  );
}
