import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceMobileSpeakerDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNDBWMjE2YTE2LDE2LDAsMCwxLTE2LDE2SDgwYTE2LDE2LDAsMCwxLTE2LTE2VjQwQTE2LDE2LDAsMCwxLDgwLDI0aDk2QTE2LDE2LDAsMCwxLDE5Miw0MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNzYsMTZIODBBMjQsMjQsMCwwLDAsNTYsNDBWMjE2YTI0LDI0LDAsMCwwLDI0LDI0aDk2YTI0LDI0LDAsMCwwLDI0LTI0VjQwQTI0LDI0LDAsMCwwLDE3NiwxNlptOCwyMDBhOCw4LDAsMCwxLTgsOEg4MGE4LDgsMCwwLDEtOC04VjQwYTgsOCwwLDAsMSw4LThoOTZhOCw4LDAsMCwxLDgsOFpNMTY4LDU2YTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMCwxLDAtMTZoNjRBOCw4LDAsMCwxLDE2OCw1NloiLz48L3N2Zz4=)
 */
export function PhDeviceMobileSpeakerDuotoneIcon(props: PhDeviceMobileSpeakerDuotoneIconProps) {
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
      <path d="M192,40V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V40A16,16,0,0,1,80,24h96A16,16,0,0,1,192,40Z" opacity="0.2"/><path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM168,56a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,56Z"/>
    </svg>
  );
}
