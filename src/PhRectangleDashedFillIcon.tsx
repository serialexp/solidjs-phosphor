import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRectangleDashedFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBaTTgwLDE5Mkg2NGExNiwxNiwwLDAsMS0xNi0xNlYxNDRhOCw4LDAsMCwxLDE2LDB2MzJIODBhOCw4LDAsMCwxLDAsMTZaTTgwLDgwSDY0djMyYTgsOCwwLDAsMS0xNiwwVjgwQTE2LDE2LDAsMCwxLDY0LDY0SDgwYTgsOCwwLDAsMSwwLDE2Wm02NCwxMTJIMTEyYTgsOCwwLDAsMSwwLTE2aDMyYTgsOCwwLDAsMSwwLDE2Wm0wLTExMkgxMTJhOCw4LDAsMCwxLDAtMTZoMzJhOCw4LDAsMCwxLDAsMTZabTY0LDk2YTE2LDE2LDAsMCwxLTE2LDE2SDE3NmE4LDgsMCwwLDEsMC0xNmgxNlYxNDRhOCw4LDAsMCwxLDE2LDBabTAtNjRhOCw4LDAsMCwxLTE2LDBWODBIMTc2YTgsOCwwLDAsMSwwLTE2aDE2YTE2LDE2LDAsMCwxLDE2LDE2WiIvPjwvc3ZnPg==)
 */
export function PhRectangleDashedFillIcon(props: PhRectangleDashedFillIconProps) {
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
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,192H64a16,16,0,0,1-16-16V144a8,8,0,0,1,16,0v32H80a8,8,0,0,1,0,16ZM80,80H64v32a8,8,0,0,1-16,0V80A16,16,0,0,1,64,64H80a8,8,0,0,1,0,16Zm64,112H112a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm0-112H112a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm64,96a16,16,0,0,1-16,16H176a8,8,0,0,1,0-16h16V144a8,8,0,0,1,16,0Zm0-64a8,8,0,0,1-16,0V80H176a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16Z"/>
    </svg>
  );
}
