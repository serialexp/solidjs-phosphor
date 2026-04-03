import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSkipBackCircleDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMzJhOTYsOTYsMCwxLDAsOTYsOTZBOTYsOTYsMCwwLDAsMTI4LDMyWm0zMiwxMzZMOTYsMTI4bDY0LTQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEyOCwyNEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjExLDEwNC4xMSwwLDAsMCwxMjgsMjRabTAsMTkyYTg4LDg4LDAsMSwxLDg4LTg4QTg4LjEsODguMSwwLDAsMSwxMjgsMjE2Wk0xNjMuODgsODFhOCw4LDAsMCwwLTguMTIuMjJMMTA0LDExMy41N1Y4OGE4LDgsMCwwLDAtMTYsMHY4MGE4LDgsMCwwLDAsMTYsMFYxNDIuNDNsNTEuNzYsMzIuMzVBOCw4LDAsMCwwLDE2OCwxNjhWODhBOCw4LDAsMCwwLDE2My44OCw4MVpNMTUyLDE1My41NywxMTEuMDksMTI4LDE1MiwxMDIuNDNaIi8+PC9zdmc+)
 */
export function PhSkipBackCircleDuotoneIcon(props: PhSkipBackCircleDuotoneIconProps) {
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
      <path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm32,136L96,128l64-40Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM163.88,81a8,8,0,0,0-8.12.22L104,113.57V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V142.43l51.76,32.35A8,8,0,0,0,168,168V88A8,8,0,0,0,163.88,81ZM152,153.57,111.09,128,152,102.43Z"/>
    </svg>
  );
}
