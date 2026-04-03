import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPianoKeysDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDBWMTQ0SDE0NFY0MFpNNzIsMTQ0aDQwVjQwSDcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCwzMkg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlpNODAsNDhoMjR2ODhIODBabTMyLDEwNGE4LDgsMCwwLDAsOC04VjQ4aDE2djk2YTgsOCwwLDAsMCw4LDhoOHY1NkgxMDRWMTUyWm00MC0xNlY0OGgyNHY4OFpNNDgsNDhINjR2OTZhOCw4LDAsMCwwLDgsOEg4OHY1Nkg0OFpNMjA4LDIwOEgxNjhWMTUyaDE2YTgsOCwwLDAsMCw4LThWNDhoMTZWMjA4WiIvPjwvc3ZnPg==)
 */
export function PhPianoKeysDuotoneIcon(props: PhPianoKeysDuotoneIconProps) {
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
      <path d="M184,40V144H144V40ZM72,144h40V40H72Z" opacity="0.2"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,48h24v88H80Zm32,104a8,8,0,0,0,8-8V48h16v96a8,8,0,0,0,8,8h8v56H104V152Zm40-16V48h24v88ZM48,48H64v96a8,8,0,0,0,8,8H88v56H48ZM208,208H168V152h16a8,8,0,0,0,8-8V48h16V208Z"/>
    </svg>
  );
}
