import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChalkboardSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTkyaC04VjE2OGE4LDgsMCwwLDAtOC04SDE2MGE4LDgsMCwwLDAtOCw4djI0SDQwVjU2SDIxNnY4MGE4LDgsMCwwLDAsMTYsMFY1NmExNiwxNiwwLDAsMC0xNi0xNkg0MEExNiwxNiwwLDAsMCwyNCw1NlYxOTJIMTZhOCw4LDAsMCwwLDAsMTZIMjQwYTgsOCwwLDAsMCwwLTE2Wm0tNzItMTZoNDh2MTZIMTY4WiIvPjwvc3ZnPg==)
 */
export function PhChalkboardSimpleIcon(props: PhChalkboardSimpleIconProps) {
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
      <path d="M240,192h-8V168a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v24H40V56H216v80a8,8,0,0,0,16,0V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-72-16h48v16H168Z"/>
    </svg>
  );
}
