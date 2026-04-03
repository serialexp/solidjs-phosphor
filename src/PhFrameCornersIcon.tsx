import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFrameCornersIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsODB2MzJhOCw4LDAsMCwxLTE2LDBWODhIMTYwYTgsOCwwLDAsMSwwLTE2aDMyQTgsOCwwLDAsMSwyMDAsODBaTTk2LDE2OEg3MlYxNDRhOCw4LDAsMCwwLTE2LDB2MzJhOCw4LDAsMCwwLDgsOEg5NmE4LDgsMCwwLDAsMC0xNlpNMjMyLDU2VjIwMGExNiwxNiwwLDAsMS0xNiwxNkg0MGExNiwxNiwwLDAsMS0xNi0xNlY1NkExNiwxNiwwLDAsMSw0MCw0MEgyMTZBMTYsMTYsMCwwLDEsMjMyLDU2Wk0yMTYsMjAwVjU2SDQwVjIwMEgyMTZaIi8+PC9zdmc+)
 */
export function PhFrameCornersIcon(props: PhFrameCornersIconProps) {
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
      <path d="M200,80v32a8,8,0,0,1-16,0V88H160a8,8,0,0,1,0-16h32A8,8,0,0,1,200,80ZM96,168H72V144a8,8,0,0,0-16,0v32a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"/>
    </svg>
  );
}
