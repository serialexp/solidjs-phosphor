import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPopsicleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNEE3Ni4wOCw3Ni4wOCwwLDAsMCw1Miw4MHY5NmEyMCwyMCwwLDAsMCwyMCwyMEg5NnYyOGEzMiwzMiwwLDAsMCw2NCwwVjE5NmgyNGEyMCwyMCwwLDAsMCwyMC0yMFY4MEE3Ni4wOCw3Ni4wOCwwLDAsMCwxMjgsNFptOCwyMjBhOCw4LDAsMCwxLTE2LDBWMTk2aDE2Wm00NC01Mkg3NlY4MGE1Miw1MiwwLDAsMSwxMDQsMFpNMTIwLDc2djY4YTEyLDEyLDAsMCwxLTI0LDBWNzZhMTIsMTIsMCwwLDEsMjQsMFptNDAsMHY2OGExMiwxMiwwLDAsMS0yNCwwVjc2YTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 */
export function PhPopsicleBoldIcon(props: PhPopsicleBoldIconProps) {
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
      <path d="M128,4A76.08,76.08,0,0,0,52,80v96a20,20,0,0,0,20,20H96v28a32,32,0,0,0,64,0V196h24a20,20,0,0,0,20-20V80A76.08,76.08,0,0,0,128,4Zm8,220a8,8,0,0,1-16,0V196h16Zm44-52H76V80a52,52,0,0,1,104,0ZM120,76v68a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Zm40,0v68a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
