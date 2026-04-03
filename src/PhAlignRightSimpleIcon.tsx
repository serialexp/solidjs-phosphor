import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignRightSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNTZWMjAwYTgsOCwwLDAsMS0xNiwwVjU2YTgsOCwwLDAsMSwxNiwwWk0yMDAsOTZ2NjRhMTYsMTYsMCwwLDEtMTYsMTZIMzJhMTYsMTYsMCwwLDEtMTYtMTZWOTZBMTYsMTYsMCwwLDEsMzIsODBIMTg0QTE2LDE2LDAsMCwxLDIwMCw5NlptLTE2LDBIMzJ2NjRIMTg0WiIvPjwvc3ZnPg==)
 */
export function PhAlignRightSimpleIcon(props: PhAlignRightSimpleIconProps) {
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
      <path d="M232,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM200,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H184A16,16,0,0,1,200,96Zm-16,0H32v64H184Z"/>
    </svg>
  );
}
