import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRainbowIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTY4djE2YTgsOCwwLDAsMS0xNiwwVjE2OGE0MCw0MCwwLDAsMC04MCwwdjE2YTgsOCwwLDAsMS0xNiwwVjE2OGE1Niw1NiwwLDAsMSwxMTIsMFpNMTI4LDgwYTg4LjEsODguMSwwLDAsMC04OCw4OHYxNmE4LDgsMCwwLDAsMTYsMFYxNjhhNzIsNzIsMCwwLDEsMTQ0LDB2MTZhOCw4LDAsMCwwLDE2LDBWMTY4QTg4LjEsODguMSwwLDAsMCwxMjgsODBabTAtMzJBMTIwLjEzLDEyMC4xMywwLDAsMCw4LDE2OHYxNmE4LDgsMCwwLDAsMTYsMFYxNjhhMTA0LDEwNCwwLDAsMSwyMDgsMHYxNmE4LDgsMCwwLDAsMTYsMFYxNjhBMTIwLjEzLDEyMC4xMywwLDAsMCwxMjgsNDhaIi8+PC9zdmc+)
 */
export function PhRainbowIcon(props: PhRainbowIconProps) {
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
      <path d="M184,168v16a8,8,0,0,1-16,0V168a40,40,0,0,0-80,0v16a8,8,0,0,1-16,0V168a56,56,0,0,1,112,0ZM128,80a88.1,88.1,0,0,0-88,88v16a8,8,0,0,0,16,0V168a72,72,0,0,1,144,0v16a8,8,0,0,0,16,0V168A88.1,88.1,0,0,0,128,80Zm0-32A120.13,120.13,0,0,0,8,168v16a8,8,0,0,0,16,0V168a104,104,0,0,1,208,0v16a8,8,0,0,0,16,0V168A120.13,120.13,0,0,0,128,48Z"/>
    </svg>
  );
}
