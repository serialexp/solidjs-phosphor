import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceMobileCameraBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTJIODBBMjgsMjgsMCwwLDAsNTIsNDBWMjE2YTI4LDI4LDAsMCwwLDI4LDI4aDk2YTI4LDI4LDAsMCwwLDI4LTI4VjQwQTI4LDI4LDAsMCwwLDE3NiwxMlptNCwyMDRhNCw0LDAsMCwxLTQsNEg4MGE0LDQsMCwwLDEtNC00VjQwYTQsNCwwLDAsMSw0LTRoOTZhNCw0LDAsMCwxLDQsNFpNMTQ0LDY4YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE0NCw2OFoiLz48L3N2Zz4=)
 */
export function PhDeviceMobileCameraBoldIcon(props: PhDeviceMobileCameraBoldIconProps) {
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
      <path d="M176,12H80A28,28,0,0,0,52,40V216a28,28,0,0,0,28,28h96a28,28,0,0,0,28-28V40A28,28,0,0,0,176,12Zm4,204a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4ZM144,68a16,16,0,1,1-16-16A16,16,0,0,1,144,68Z"/>
    </svg>
  );
}
