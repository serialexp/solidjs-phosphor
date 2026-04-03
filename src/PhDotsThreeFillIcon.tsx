import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsThreeFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsODBIMzJBMTYsMTYsMCwwLDAsMTYsOTZ2NjRhMTYsMTYsMCwwLDAsMTYsMTZIMjI0YTE2LDE2LDAsMCwwLDE2LTE2Vjk2QTE2LDE2LDAsMCwwLDIyNCw4MFpNNjAsMTQwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDYwLDE0MFptNjgsMGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxMjgsMTQwWm02OCwwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE5NiwxNDBaIi8+PC9zdmc+)
 */
export function PhDotsThreeFillIcon(props: PhDotsThreeFillIconProps) {
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
      <path d="M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"/>
    </svg>
  );
}
