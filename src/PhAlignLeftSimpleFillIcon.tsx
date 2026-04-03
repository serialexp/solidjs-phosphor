import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignLeftSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00MCw1NlYyMDBhOCw4LDAsMCwxLTE2LDBWNTZhOCw4LDAsMCwxLDE2LDBaTTIyNCw4MEg3MkExNiwxNiwwLDAsMCw1Niw5NnY2NGExNiwxNiwwLDAsMCwxNiwxNkgyMjRhMTYsMTYsMCwwLDAsMTYtMTZWOTZBMTYsMTYsMCwwLDAsMjI0LDgwWiIvPjwvc3ZnPg==)
 */
export function PhAlignLeftSimpleFillIcon(props: PhAlignLeftSimpleFillIconProps) {
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
      <path d="M40,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM224,80H72A16,16,0,0,0,56,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80Z"/>
    </svg>
  );
}
