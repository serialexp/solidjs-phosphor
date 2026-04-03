import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignRightDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNjR2NDBhOCw4LDAsMCwxLTgsOEg4MGE4LDgsMCwwLDEtOC04VjY0YTgsOCwwLDAsMSw4LThoOTZBOCw4LDAsMCwxLDE4NCw2NFptLTgsODBINDBhOCw4LDAsMCwwLTgsOHY0MGE4LDgsMCwwLDAsOCw4SDE3NmE4LDgsMCwwLDAsOC04VjE1MkE4LDgsMCwwLDAsMTc2LDE0NFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMjQsNDBWMjE2YTgsOCwwLDAsMS0xNiwwVjQwYTgsOCwwLDAsMSwxNiwwWk0xOTIsNjR2NDBhMTYsMTYsMCwwLDEtMTYsMTZIODBhMTYsMTYsMCwwLDEtMTYtMTZWNjRBMTYsMTYsMCwwLDEsODAsNDhoOTZBMTYsMTYsMCwwLDEsMTkyLDY0Wm0tMTYsMEg4MHY0MGg5NlptMTYsODh2NDBhMTYsMTYsMCwwLDEtMTYsMTZINDBhMTYsMTYsMCwwLDEtMTYtMTZWMTUyYTE2LDE2LDAsMCwxLDE2LTE2SDE3NkExNiwxNiwwLDAsMSwxOTIsMTUyWm0tMTYsMEg0MHY0MEgxNzZaIi8+PC9zdmc+)
 */
export function PhAlignRightDuotoneIcon(props: PhAlignRightDuotoneIconProps) {
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
      <path d="M184,64v40a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8h96A8,8,0,0,1,184,64Zm-8,80H40a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H176a8,8,0,0,0,8-8V152A8,8,0,0,0,176,144Z" opacity="0.2"/><path d="M224,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM192,64v40a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V64A16,16,0,0,1,80,48h96A16,16,0,0,1,192,64Zm-16,0H80v40h96Zm16,88v40a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H176A16,16,0,0,1,192,152Zm-16,0H40v40H176Z"/>
    </svg>
  );
}
