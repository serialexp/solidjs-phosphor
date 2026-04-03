import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceTabletCameraThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjhINjRBMjAsMjAsMCwwLDAsNDQsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDE5MmEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwxOTIsMjhabTEyLDE4MGExMiwxMiwwLDAsMS0xMiwxMkg2NGExMiwxMiwwLDAsMS0xMi0xMlY0OEExMiwxMiwwLDAsMSw2NCwzNkgxOTJhMTIsMTIsMCwwLDEsMTIsMTJaTTEzNiw2OGE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxMzYsNjhaIi8+PC9zdmc+)
 */
export function PhDeviceTabletCameraThinIcon(props: PhDeviceTabletCameraThinIconProps) {
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
      <path d="M192,28H64A20,20,0,0,0,44,48V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V48A20,20,0,0,0,192,28Zm12,180a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V48A12,12,0,0,1,64,36H192a12,12,0,0,1,12,12ZM136,68a8,8,0,1,1-8-8A8,8,0,0,1,136,68Z"/>
    </svg>
  );
}
