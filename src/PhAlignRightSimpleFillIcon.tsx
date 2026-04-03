import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignRightSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNTZWMjAwYTgsOCwwLDAsMS0xNiwwVjU2YTgsOCwwLDAsMSwxNiwwWk0xODQsODBIMzJBMTYsMTYsMCwwLDAsMTYsOTZ2NjRhMTYsMTYsMCwwLDAsMTYsMTZIMTg0YTE2LDE2LDAsMCwwLDE2LTE2Vjk2QTE2LDE2LDAsMCwwLDE4NCw4MFoiLz48L3N2Zz4=)
 */
export function PhAlignRightSimpleFillIcon(props: PhAlignRightSimpleFillIconProps) {
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
      <path d="M232,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM184,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V96A16,16,0,0,0,184,80Z"/>
    </svg>
  );
}
