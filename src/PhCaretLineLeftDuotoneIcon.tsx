import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLineLeftDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNDhWMjA4bC04MC04MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xOTUuMDYsNDAuNjFhOCw4LDAsMCwwLTguNzIsMS43M2wtODAsODBhOCw4LDAsMCwwLDAsMTEuMzJsODAsODBBOCw4LDAsMCwwLDIwMCwyMDhWNDhBOCw4LDAsMCwwLDE5NS4wNiw0MC42MVpNMTg0LDE4OC42OSwxMjMuMzEsMTI4LDE4NCw2Ny4zMVpNODAsNDhWMjA4YTgsOCwwLDAsMS0xNiwwVjQ4YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 */
export function PhCaretLineLeftDuotoneIcon(props: PhCaretLineLeftDuotoneIconProps) {
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
      <path d="M192,48V208l-80-80Z" opacity="0.2"/><path d="M195.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,200,208V48A8,8,0,0,0,195.06,40.61ZM184,188.69,123.31,128,184,67.31ZM80,48V208a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
