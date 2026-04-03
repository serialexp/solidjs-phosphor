import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhOptionDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsODBWMTkySDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjgwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzMiwxOTJhOCw4LDAsMCwxLTgsOEgxNjAuOTRhMTUuOTIsMTUuOTIsMCwwLDEtMTQuMzEtOC44NEw5NS4wNiw4OEgzMmE4LDgsMCwwLDEsMC0xNkg5NS4wNmExNS45MiwxNS45MiwwLDAsMSwxNC4zMSw4Ljg0TDE2MC45NCwxODRIMjI0QTgsOCwwLDAsMSwyMzIsMTkyWk0xNTIsODhoNzJhOCw4LDAsMCwwLDAtMTZIMTUyYTgsOCwwLDAsMCwwLDE2WiIvPjwvc3ZnPg==)
 */
export function PhOptionDuotoneIcon(props: PhOptionDuotoneIconProps) {
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
      <path d="M224,80V192H48a16,16,0,0,1-16-16V80Z" opacity="0.2"/><path d="M232,192a8,8,0,0,1-8,8H160.94a15.92,15.92,0,0,1-14.31-8.84L95.06,88H32a8,8,0,0,1,0-16H95.06a15.92,15.92,0,0,1,14.31,8.84L160.94,184H224A8,8,0,0,1,232,192ZM152,88h72a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16Z"/>
    </svg>
  );
}
