import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceMobileThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMjBIODBBMjAsMjAsMCwwLDAsNjAsNDBWMjE2YTIwLDIwLDAsMCwwLDIwLDIwaDk2YTIwLDIwLDAsMCwwLDIwLTIwVjQwQTIwLDIwLDAsMCwwLDE3NiwyMFpNNjgsNjBIMTg4VjE5Nkg2OFpNODAsMjhoOTZhMTIsMTIsMCwwLDEsMTIsMTJWNTJINjhWNDBBMTIsMTIsMCwwLDEsODAsMjhabTk2LDIwMEg4MGExMiwxMiwwLDAsMS0xMi0xMlYyMDRIMTg4djEyQTEyLDEyLDAsMCwxLDE3NiwyMjhaIi8+PC9zdmc+)
 */
export function PhDeviceMobileThinIcon(props: PhDeviceMobileThinIconProps) {
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
      <path d="M176,20H80A20,20,0,0,0,60,40V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20V40A20,20,0,0,0,176,20ZM68,60H188V196H68ZM80,28h96a12,12,0,0,1,12,12V52H68V40A12,12,0,0,1,80,28Zm96,200H80a12,12,0,0,1-12-12V204H188v12A12,12,0,0,1,176,228Z"/>
    </svg>
  );
}
