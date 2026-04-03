import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsNineDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhWMjA4YTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjQ4QTE2LDE2LDAsMCwxLDQ4LDMySDIwOEExNiwxNiwwLDAsMSwyMjQsNDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNNzIsNjBBMTIsMTIsMCwxLDEsNjAsNDgsMTIsMTIsMCwwLDEsNzIsNjBabTU2LTEyYTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDEyOCw0OFptNjgsMjRhMTIsMTIsMCwxLDAtMTItMTJBMTIsMTIsMCwwLDAsMTk2LDcyWk02MCwxMTZhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsNjAsMTE2Wm02OCwwYTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDEyOCwxMTZabTY4LDBhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTk2LDExNlpNNjAsMTg0YTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDYwLDE4NFptNjgsMGExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCwxMjgsMTg0Wm02OCwwYTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDE5NiwxODRaIi8+PC9zdmc+)
 */
export function PhDotsNineDuotoneIcon(props: PhDotsNineDuotoneIconProps) {
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
      <path d="M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Z" opacity="0.2"/><path d="M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z"/>
    </svg>
  );
}
