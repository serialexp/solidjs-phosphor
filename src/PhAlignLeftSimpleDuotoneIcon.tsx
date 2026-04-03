import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignLeftSimpleDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsOTZ2NjRhOCw4LDAsMCwxLTgsOEg3MmE4LDgsMCwwLDEtOC04Vjk2YTgsOCwwLDAsMSw4LThIMjI0QTgsOCwwLDAsMSwyMzIsOTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNNDAsNTZWMjAwYTgsOCwwLDAsMS0xNiwwVjU2YTgsOCwwLDAsMSwxNiwwWk0yNDAsOTZ2NjRhMTYsMTYsMCwwLDEtMTYsMTZINzJhMTYsMTYsMCwwLDEtMTYtMTZWOTZBMTYsMTYsMCwwLDEsNzIsODBIMjI0QTE2LDE2LDAsMCwxLDI0MCw5NlptLTE2LDY0Vjk2SDcydjY0SDIyNFoiLz48L3N2Zz4=)
 */
export function PhAlignLeftSimpleDuotoneIcon(props: PhAlignLeftSimpleDuotoneIconProps) {
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
      <path d="M232,96v64a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H224A8,8,0,0,1,232,96Z" opacity="0.2"/><path d="M40,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM240,96v64a16,16,0,0,1-16,16H72a16,16,0,0,1-16-16V96A16,16,0,0,1,72,80H224A16,16,0,0,1,240,96Zm-16,64V96H72v64H224Z"/>
    </svg>
  );
}
