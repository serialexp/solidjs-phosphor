import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPianoKeysFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTg4LDIwOEg0OFY0OEg3MnY5NmE4LDgsMCwwLDAsOCw4aDhabTY0LDBIMTA0VjE1Mmg4YTgsOCwwLDAsMCw4LThWNDhoMTZ2OTZhOCw4LDAsMCwwLDgsOGg4Wm01NiwwSDE2OFYxNTJoOGE4LDgsMCwwLDAsOC04VjQ4aDI0VjIwOFoiLz48L3N2Zz4=)
 */
export function PhPianoKeysFillIcon(props: PhPianoKeysFillIconProps) {
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
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM88,208H48V48H72v96a8,8,0,0,0,8,8h8Zm64,0H104V152h8a8,8,0,0,0,8-8V48h16v96a8,8,0,0,0,8,8h8Zm56,0H168V152h8a8,8,0,0,0,8-8V48h24V208Z"/>
    </svg>
  );
}
