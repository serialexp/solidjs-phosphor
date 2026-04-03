import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDivideIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsMTI4Wk0xMjgsODBhMTYsMTYsMCwxLDAtMTYtMTZBMTYsMTYsMCwwLDAsMTI4LDgwWm0wLDk2YTE2LDE2LDAsMSwwLDE2LDE2QTE2LDE2LDAsMCwwLDEyOCwxNzZaIi8+PC9zdmc+)
 */
export function PhDivideIcon(props: PhDivideIconProps) {
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
      <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM128,80a16,16,0,1,0-16-16A16,16,0,0,0,128,80Zm0,96a16,16,0,1,0,16,16A16,16,0,0,0,128,176Z"/>
    </svg>
  );
}
