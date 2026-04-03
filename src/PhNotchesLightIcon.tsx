import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotchesLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjQsMTMyLjI0bC04MCw4MGE2LDYsMCwxLDEtOC40OC04LjQ4bDgwLTgwYTYsNiwwLDEsMSw4LjQ4LDguNDhabS0xNi05Ni40OGE2LDYsMCwwLDAtOC40OCwwbC0xNTIsMTUyYTYsNiwwLDEsMCw4LjQ4LDguNDhsMTUyLTE1MkE2LDYsMCwwLDAsMTk2LjI0LDM1Ljc2WiIvPjwvc3ZnPg==)
 */
export function PhNotchesLightIcon(props: PhNotchesLightIconProps) {
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
      <path d="M212.24,132.24l-80,80a6,6,0,1,1-8.48-8.48l80-80a6,6,0,1,1,8.48,8.48Zm-16-96.48a6,6,0,0,0-8.48,0l-152,152a6,6,0,1,0,8.48,8.48l152-152A6,6,0,0,0,196.24,35.76Z"/>
    </svg>
  );
}
