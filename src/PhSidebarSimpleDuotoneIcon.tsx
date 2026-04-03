import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSidebarSimpleDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCw0OFYyMDhINDBhOCw4LDAsMCwxLTgtOFY1NmE4LDgsMCwwLDEsOC04WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNiw0MEg0MEExNiwxNiwwLDAsMCwyNCw1NlYyMDBhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjU2QTE2LDE2LDAsMCwwLDIxNiw0MFpNNDAsNTZIODBWMjAwSDQwWk0yMTYsMjAwSDk2VjU2SDIxNlYyMDBaIi8+PC9zdmc+)
 */
export function PhSidebarSimpleDuotoneIcon(props: PhSidebarSimpleDuotoneIconProps) {
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
      <path d="M88,48V208H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z" opacity="0.2"/><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H80V200H40ZM216,200H96V56H216V200Z"/>
    </svg>
  );
}
