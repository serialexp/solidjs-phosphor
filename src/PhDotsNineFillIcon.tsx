import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsNineFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTc2LDE5MmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSw3NiwxOTJabTAtNTJhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsNzYsMTQwWm0wLTUyQTEyLDEyLDAsMSwxLDg4LDc2LDEyLDEyLDAsMCwxLDc2LDg4Wm01MiwxMDRhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTI4LDE5MlptMC01MmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxMjgsMTQwWm0wLTUyYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEyOCw4OFptNTIsMTA0YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE4MCwxOTJabTAtNTJhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTgwLDE0MFptMC01MmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxODAsODhaIi8+PC9zdmc+)
 */
export function PhDotsNineFillIcon(props: PhDotsNineFillIconProps) {
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
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM76,192a12,12,0,1,1,12-12A12,12,0,0,1,76,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-52A12,12,0,1,1,88,76,12,12,0,0,1,76,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,180,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"/>
    </svg>
  );
}
