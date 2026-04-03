import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignTopIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDBhOCw4LDAsMCwxLTgsOEg0MGE4LDgsMCwwLDEsMC0xNkgyMTZBOCw4LDAsMCwxLDIyNCw0MFpNMjA4LDgwdjk2YTE2LDE2LDAsMCwxLTE2LDE2SDE1MmExNiwxNiwwLDAsMS0xNi0xNlY4MGExNiwxNiwwLDAsMSwxNi0xNmg0MEExNiwxNiwwLDAsMSwyMDgsODBabS0xNiwwSDE1MnY5Nmg0MFptLTcyLDBWMjE2YTE2LDE2LDAsMCwxLTE2LDE2SDY0YTE2LDE2LDAsMCwxLTE2LTE2VjgwQTE2LDE2LDAsMCwxLDY0LDY0aDQwQTE2LDE2LDAsMCwxLDEyMCw4MFptLTE2LDBINjRWMjE2aDQwWiIvPjwvc3ZnPg==)
 */
export function PhAlignTopIcon(props: PhAlignTopIconProps) {
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
      <path d="M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM208,80v96a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V80a16,16,0,0,1,16-16h40A16,16,0,0,1,208,80Zm-16,0H152v96h40Zm-72,0V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V80A16,16,0,0,1,64,64h40A16,16,0,0,1,120,80Zm-16,0H64V216h40Z"/>
    </svg>
  );
}
