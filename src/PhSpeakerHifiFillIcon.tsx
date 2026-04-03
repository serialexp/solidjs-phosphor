import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSpeakerHifiFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTYwYTI0LDI0LDAsMSwxLTI0LTI0QTI0LDI0LDAsMCwxLDE1MiwxNjBaTTIwOCw0MFYyMTZhMTYsMTYsMCwwLDEtMTYsMTZINjRhMTYsMTYsMCwwLDEtMTYtMTZWNDBBMTYsMTYsMCwwLDEsNjQsMjRIMTkyQTE2LDE2LDAsMCwxLDIwOCw0MFpNMTE2LDY4YTEyLDEyLDAsMSwwLDEyLTEyQTEyLDEyLDAsMCwwLDExNiw2OFptNTIsOTJhNDAsNDAsMCwxLDAtNDAsNDBBNDAsNDAsMCwwLDAsMTY4LDE2MFoiLz48L3N2Zz4=)
 */
export function PhSpeakerHifiFillIcon(props: PhSpeakerHifiFillIconProps) {
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
      <path d="M152,160a24,24,0,1,1-24-24A24,24,0,0,1,152,160ZM208,40V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V40A16,16,0,0,1,64,24H192A16,16,0,0,1,208,40ZM116,68a12,12,0,1,0,12-12A12,12,0,0,0,116,68Zm52,92a40,40,0,1,0-40,40A40,40,0,0,0,168,160Z"/>
    </svg>
  );
}
