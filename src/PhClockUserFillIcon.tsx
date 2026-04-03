import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhClockUserFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsNzJ2NDMuMDZsMzYuNDItMTguMjJhOCw4LDAsMSwxLDcuMTYsMTQuMzJsLTQ4LDI0QTgsOCwwLDAsMSwxMjAsMTI4VjcyYTgsOCwwLDAsMSwxNiwwWm0tOCwxNDRhODgsODgsMCwxLDEsODgtODgsOCw4LDAsMCwwLDE2LDBBMTA0LDEwNCwwLDEsMCwxMjgsMjMyYTgsOCwwLDAsMCwwLTE2Wm04Ni42Mi0xNy4zOGEzMiwzMiwwLDEsMC00NS4yNCwwQTQwLDQwLDAsMCwwLDE1Mi4yNywyMjIsOCw4LDAsMCwwLDE2MCwyMzJoNjRhOCw4LDAsMCwwLDcuNzMtMTAuMDZBNDAsNDAsMCwwLDAsMjE0LjYyLDE5OC42MloiLz48L3N2Zz4=)
 */
export function PhClockUserFillIcon(props: PhClockUserFillIconProps) {
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
      <path d="M136,72v43.06l36.42-18.22a8,8,0,1,1,7.16,14.32l-48,24A8,8,0,0,1,120,128V72a8,8,0,0,1,16,0Zm-8,144a88,88,0,1,1,88-88,8,8,0,0,0,16,0A104,104,0,1,0,128,232a8,8,0,0,0,0-16Zm86.62-17.38a32,32,0,1,0-45.24,0A40,40,0,0,0,152.27,222,8,8,0,0,0,160,232h64a8,8,0,0,0,7.73-10.06A40,40,0,0,0,214.62,198.62Z"/>
    </svg>
  );
}
