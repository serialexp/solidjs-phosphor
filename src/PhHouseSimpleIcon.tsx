import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHouseSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuMzEsMTA4LjY4bC04MC04MGExNiwxNiwwLDAsMC0yMi42MiwwbC04MCw4MEExNS44NywxNS44NywwLDAsMCwzMiwxMjB2OTZhOCw4LDAsMCwwLDgsOEgyMTZhOCw4LDAsMCwwLDgtOFYxMjBBMTUuODcsMTUuODcsMCwwLDAsMjE5LjMxLDEwOC42OFpNMjA4LDIwOEg0OFYxMjBsODAtODAsODAsODBaIi8+PC9zdmc+)
 */
export function PhHouseSimpleIcon(props: PhHouseSimpleIconProps) {
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
      <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H48V120l80-80,80,80Z"/>
    </svg>
  );
}
