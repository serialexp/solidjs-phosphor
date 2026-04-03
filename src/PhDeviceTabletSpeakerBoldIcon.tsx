import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceTabletSpeakerBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjBINjRBMjgsMjgsMCwwLDAsMzYsNDhWMjA4YTI4LDI4LDAsMCwwLDI4LDI4SDE5MmEyOCwyOCwwLDAsMCwyOC0yOFY0OEEyOCwyOCwwLDAsMCwxOTIsMjBabTQsMTg4YTQsNCwwLDAsMS00LDRINjRhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsNC00SDE5MmE0LDQsMCwwLDEsNCw0Wk0xNzIsNzJhMTIsMTIsMCwwLDEtMTIsMTJIOTZhMTIsMTIsMCwwLDEsMC0yNGg2NEExMiwxMiwwLDAsMSwxNzIsNzJaIi8+PC9zdmc+)
 */
export function PhDeviceTabletSpeakerBoldIcon(props: PhDeviceTabletSpeakerBoldIconProps) {
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
      <path d="M192,20H64A28,28,0,0,0,36,48V208a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V48A28,28,0,0,0,192,20Zm4,188a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4ZM172,72a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,72Z"/>
    </svg>
  );
}
