import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHandGrabbingFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTA0djQ4YTg4LDg4LDAsMCwxLTE3NiwwVjEzNmExNiwxNiwwLDAsMSwzMiwwdjhhOCw4LDAsMCwwLDE2LDBWODhhMTYsMTYsMCwwLDEsMzIsMHYxNmE4LDgsMCwwLDAsMTYsMFY4OGExNiwxNiwwLDAsMSwzMiwwdjE2YTgsOCwwLDAsMCwxNiwwLDE2LDE2LDAsMCwxLDMyLDBaIi8+PC9zdmc+)
 */
export function PhHandGrabbingFillIcon(props: PhHandGrabbingFillIconProps) {
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
      <path d="M216,104v48a88,88,0,0,1-176,0V136a16,16,0,0,1,32,0v8a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0,16,16,0,0,1,32,0Z"/>
    </svg>
  );
}
