import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceTabletIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjRINjRBMjQsMjQsMCwwLDAsNDAsNDhWMjA4YTI0LDI0LDAsMCwwLDI0LDI0SDE5MmEyNCwyNCwwLDAsMCwyNC0yNFY0OEEyNCwyNCwwLDAsMCwxOTIsMjRaTTU2LDcySDIwMFYxODRINTZabTgtMzJIMTkyYTgsOCwwLDAsMSw4LDh2OEg1NlY0OEE4LDgsMCwwLDEsNjQsNDBaTTE5MiwyMTZINjRhOCw4LDAsMCwxLTgtOHYtOEgyMDB2OEE4LDgsMCwwLDEsMTkyLDIxNloiLz48L3N2Zz4=)
 */
export function PhDeviceTabletIcon(props: PhDeviceTabletIconProps) {
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
      <path d="M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24ZM56,72H200V184H56Zm8-32H192a8,8,0,0,1,8,8v8H56V48A8,8,0,0,1,64,40ZM192,216H64a8,8,0,0,1-8-8v-8H200v8A8,8,0,0,1,192,216Z"/>
    </svg>
  );
}
