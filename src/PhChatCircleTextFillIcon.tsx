import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatCircleTextFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDAsMCwzNi4xOCwxNzYuODhMMjQuODMsMjEwLjkzYTE2LDE2LDAsMCwwLDIwLjI0LDIwLjI0bDM0LjA1LTExLjM1QTEwNCwxMDQsMCwxLDAsMTI4LDI0Wm0zMiwxMjhIOTZhOCw4LDAsMCwxLDAtMTZoNjRhOCw4LDAsMCwxLDAsMTZabTAtMzJIOTZhOCw4LDAsMCwxLDAtMTZoNjRhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 */
export function PhChatCircleTextFillIcon(props: PhChatCircleTextFillIconProps) {
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
      <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm32,128H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
