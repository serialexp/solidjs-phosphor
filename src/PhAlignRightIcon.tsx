import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignRightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDBWMjE2YTgsOCwwLDAsMS0xNiwwVjQwYTgsOCwwLDAsMSwxNiwwWk0xOTIsNjR2NDBhMTYsMTYsMCwwLDEtMTYsMTZIODBhMTYsMTYsMCwwLDEtMTYtMTZWNjRBMTYsMTYsMCwwLDEsODAsNDhoOTZBMTYsMTYsMCwwLDEsMTkyLDY0Wm0tMTYsMEg4MHY0MGg5NlptMTYsODh2NDBhMTYsMTYsMCwwLDEtMTYsMTZINDBhMTYsMTYsMCwwLDEtMTYtMTZWMTUyYTE2LDE2LDAsMCwxLDE2LTE2SDE3NkExNiwxNiwwLDAsMSwxOTIsMTUyWm0tMTYsMEg0MHY0MEgxNzZaIi8+PC9zdmc+)
 */
export function PhAlignRightIcon(props: PhAlignRightIconProps) {
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
      <path d="M224,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM192,64v40a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V64A16,16,0,0,1,80,48h96A16,16,0,0,1,192,64Zm-16,0H80v40h96Zm16,88v40a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H176A16,16,0,0,1,192,152Zm-16,0H40v40H176Z"/>
    </svg>
  );
}
