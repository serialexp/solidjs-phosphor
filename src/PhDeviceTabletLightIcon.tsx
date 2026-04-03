import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceTabletLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjZINjRBMjIsMjIsMCwwLDAsNDIsNDhWMjA4YTIyLDIyLDAsMCwwLDIyLDIySDE5MmEyMiwyMiwwLDAsMCwyMi0yMlY0OEEyMiwyMiwwLDAsMCwxOTIsMjZaTTU0LDcwSDIwMlYxODZINTRaTTY0LDM4SDE5MmExMCwxMCwwLDAsMSwxMCwxMFY1OEg1NFY0OEExMCwxMCwwLDAsMSw2NCwzOFpNMTkyLDIxOEg2NGExMCwxMCwwLDAsMS0xMC0xMFYxOThIMjAydjEwQTEwLDEwLDAsMCwxLDE5MiwyMThaIi8+PC9zdmc+)
 */
export function PhDeviceTabletLightIcon(props: PhDeviceTabletLightIconProps) {
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
      <path d="M192,26H64A22,22,0,0,0,42,48V208a22,22,0,0,0,22,22H192a22,22,0,0,0,22-22V48A22,22,0,0,0,192,26ZM54,70H202V186H54ZM64,38H192a10,10,0,0,1,10,10V58H54V48A10,10,0,0,1,64,38ZM192,218H64a10,10,0,0,1-10-10V198H202v10A10,10,0,0,1,192,218Z"/>
    </svg>
  );
}
