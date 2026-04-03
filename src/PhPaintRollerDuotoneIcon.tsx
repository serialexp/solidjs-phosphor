import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPaintRollerDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNjR2NjRhOCw4LDAsMCwxLTgsOEg0OGE4LDgsMCwwLDEtOC04VjY0YTgsOCwwLDAsMSw4LThIMjAwQTgsOCwwLDAsMSwyMDgsNjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMyLDg4SDIxNlY2NGExNiwxNiwwLDAsMC0xNi0xNkg0OEExNiwxNiwwLDAsMCwzMiw2NFY4OEgxNmE4LDgsMCwwLDAsMCwxNkgzMnYyNGExNiwxNiwwLDAsMCwxNiwxNkgyMDBhMTYsMTYsMCwwLDAsMTYtMTZWMTA0aDE2djUwTDEzMS42LDE4Mi42NUExNi4wNywxNi4wNywwLDAsMCwxMjAsMTk4djM0YTgsOCwwLDAsMCwxNiwwVjE5OGwxMDAuNC0yOC42OEExNi4wNywxNi4wNywwLDAsMCwyNDgsMTU0VjEwNEExNiwxNiwwLDAsMCwyMzIsODhabS0zMiw0MEg0OFY2NEgyMDB2NjRaIi8+PC9zdmc+)
 */
export function PhPaintRollerDuotoneIcon(props: PhPaintRollerDuotoneIconProps) {
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
      <path d="M208,64v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H200A8,8,0,0,1,208,64Z" opacity="0.2"/><path d="M232,88H216V64a16,16,0,0,0-16-16H48A16,16,0,0,0,32,64V88H16a8,8,0,0,0,0,16H32v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V104h16v50L131.6,182.65A16.07,16.07,0,0,0,120,198v34a8,8,0,0,0,16,0V198l100.4-28.68A16.07,16.07,0,0,0,248,154V104A16,16,0,0,0,232,88Zm-32,40H48V64H200v64Z"/>
    </svg>
  );
}
