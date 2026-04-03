import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhKeyReturnIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTA0djMyYTgsOCwwLDAsMS04LDhIOTkuMzFsMTAuMzUsMTAuMzRhOCw4LDAsMCwxLTExLjMyLDExLjMybC0yNC0yNGE4LDgsMCwwLDEsMC0xMS4zMmwyNC0yNGE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMOTkuMzEsMTI4SDE2OFYxMDRhOCw4LDAsMCwxLDE2LDBabTQ4LTQ4VjIwMGExNiwxNiwwLDAsMS0xNiwxNkg0MGExNiwxNiwwLDAsMS0xNi0xNlY1NkExNiwxNiwwLDAsMSw0MCw0MEgyMTZBMTYsMTYsMCwwLDEsMjMyLDU2Wk0yMTYsMjAwVjU2SDQwVjIwMEgyMTZaIi8+PC9zdmc+)
 */
export function PhKeyReturnIcon(props: PhKeyReturnIconProps) {
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
      <path d="M184,104v32a8,8,0,0,1-8,8H99.31l10.35,10.34a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L99.31,128H168V104a8,8,0,0,1,16,0Zm48-48V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"/>
    </svg>
  );
}
