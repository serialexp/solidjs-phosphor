import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhOvenDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTEydjcySDcyVjExMloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJabTAsMTc2SDQ4VjQ4SDIwOFYyMDhaTTcyLDc2QTEyLDEyLDAsMSwxLDg0LDg4LDEyLDEyLDAsMCwxLDcyLDc2Wm00NCwwYTEyLDEyLDAsMSwxLDEyLDEyQTEyLDEyLDAsMCwxLDExNiw3NlptNDQsMGExMiwxMiwwLDEsMSwxMiwxMkExMiwxMiwwLDAsMSwxNjAsNzZabTI0LDI4SDcyYTgsOCwwLDAsMC04LDh2NzJhOCw4LDAsMCwwLDgsOEgxODRhOCw4LDAsMCwwLDgtOFYxMTJBOCw4LDAsMCwwLDE4NCwxMDRabS04LDcySDgwVjEyMGg5NloiLz48L3N2Zz4=)
 */
export function PhOvenDuotoneIcon(props: PhOvenDuotoneIconProps) {
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
      <path d="M184,112v72H72V112Z" opacity="0.2"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM72,76A12,12,0,1,1,84,88,12,12,0,0,1,72,76Zm44,0a12,12,0,1,1,12,12A12,12,0,0,1,116,76Zm44,0a12,12,0,1,1,12,12A12,12,0,0,1,160,76Zm24,28H72a8,8,0,0,0-8,8v72a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V112A8,8,0,0,0,184,104Zm-8,72H80V120h96Z"/>
    </svg>
  );
}
