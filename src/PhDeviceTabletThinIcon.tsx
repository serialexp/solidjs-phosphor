import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceTabletThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjhINjRBMjAsMjAsMCwwLDAsNDQsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDE5MmEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwxOTIsMjhaTTUyLDY4SDIwNFYxODhINTJaTTY0LDM2SDE5MmExMiwxMiwwLDAsMSwxMiwxMlY2MEg1MlY0OEExMiwxMiwwLDAsMSw2NCwzNlpNMTkyLDIyMEg2NGExMiwxMiwwLDAsMS0xMi0xMlYxOTZIMjA0djEyQTEyLDEyLDAsMCwxLDE5MiwyMjBaIi8+PC9zdmc+)
 */
export function PhDeviceTabletThinIcon(props: PhDeviceTabletThinIconProps) {
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
      <path d="M192,28H64A20,20,0,0,0,44,48V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V48A20,20,0,0,0,192,28ZM52,68H204V188H52ZM64,36H192a12,12,0,0,1,12,12V60H52V48A12,12,0,0,1,64,36ZM192,220H64a12,12,0,0,1-12-12V196H204v12A12,12,0,0,1,192,220Z"/>
    </svg>
  );
}
