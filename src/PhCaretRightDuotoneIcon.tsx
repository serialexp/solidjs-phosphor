import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretRightDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTI4LDk2LDIwOFY0OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xODEuNjYsMTIyLjM0bC04MC04MEE4LDgsMCwwLDAsODgsNDhWMjA4YTgsOCwwLDAsMCwxMy42Niw1LjY2bDgwLTgwQTgsOCwwLDAsMCwxODEuNjYsMTIyLjM0Wk0xMDQsMTg4LjY5VjY3LjMxTDE2NC42OSwxMjhaIi8+PC9zdmc+)
 */
export function PhCaretRightDuotoneIcon(props: PhCaretRightDuotoneIconProps) {
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
      <path d="M176,128,96,208V48Z" opacity="0.2"/><path d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"/>
    </svg>
  );
}
