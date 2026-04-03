import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSquareHalfBottomDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTI4djcyYTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLTgtOFYxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjAwLDQwSDU2QTE2LDE2LDAsMCwwLDQwLDU2VjIwMGExNiwxNiwwLDAsMCwxNiwxNkgyMDBhMTYsMTYsMCwwLDAsMTYtMTZWNTZBMTYsMTYsMCwwLDAsMjAwLDQwWm0wLDE2djY0SDU2VjU2Wm0wLDE0NEg1NlYxMzZIMjAwdjY0WiIvPjwvc3ZnPg==)
 */
export function PhSquareHalfBottomDuotoneIcon(props: PhSquareHalfBottomDuotoneIconProps) {
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
      <path d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128Z" opacity="0.2"/><path d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,16v64H56V56Zm0,144H56V136H200v64Z"/>
    </svg>
  );
}
