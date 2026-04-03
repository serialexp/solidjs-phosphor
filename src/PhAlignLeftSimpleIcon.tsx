import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignLeftSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00MCw1NlYyMDBhOCw4LDAsMCwxLTE2LDBWNTZhOCw4LDAsMCwxLDE2LDBaTTI0MCw5NnY2NGExNiwxNiwwLDAsMS0xNiwxNkg3MmExNiwxNiwwLDAsMS0xNi0xNlY5NkExNiwxNiwwLDAsMSw3Miw4MEgyMjRBMTYsMTYsMCwwLDEsMjQwLDk2Wm0tMTYsNjRWOTZINzJ2NjRIMjI0WiIvPjwvc3ZnPg==)
 */
export function PhAlignLeftSimpleIcon(props: PhAlignLeftSimpleIconProps) {
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
      <path d="M40,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM240,96v64a16,16,0,0,1-16,16H72a16,16,0,0,1-16-16V96A16,16,0,0,1,72,80H224A16,16,0,0,1,240,96Zm-16,64V96H72v64H224Z"/>
    </svg>
  );
}
