import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAmazonLogoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTM2YTI0LDI0LDAsMSwxLTI0LTI0QTI0LDI0LDAsMCwxLDE1MiwxMzZabTgwLThBMTA0LDEwNCwwLDEsMSwxMjgsMjQsMTA0LjExLDEwNC4xMSwwLDAsMSwyMzIsMTI4Wm0tODAtMjR2MGE0MCw0MCwwLDEsMCwwLDY0djBhOCw4LDAsMCwwLDE2LDBWMTA0QTQwLDQwLDAsMCwwLDk0LjEzLDgyLjcxYTgsOCwwLDAsMCwxMy41NCw4LjUyQTI0LDI0LDAsMCwxLDE1MiwxMDRabTQ0LjgxLDY1LjYxYTgsOCwwLDAsMC0xMS4yLDEuNTgsNzIsNzIsMCwwLDEtMTE1LjIyLDAsOCw4LDAsMSwwLTEyLjc4LDkuNjIsODgsODgsMCwwLDAsMTQwLjc4LDBBOCw4LDAsMCwwLDE5Ni44MSwxNjkuNjFaIi8+PC9zdmc+)
 */
export function PhAmazonLogoFillIcon(props: PhAmazonLogoFillIconProps) {
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
      <path d="M152,136a24,24,0,1,1-24-24A24,24,0,0,1,152,136Zm80-8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-80-24v0a40,40,0,1,0,0,64v0a8,8,0,0,0,16,0V104A40,40,0,0,0,94.13,82.71a8,8,0,0,0,13.54,8.52A24,24,0,0,1,152,104Zm44.81,65.61a8,8,0,0,0-11.2,1.58,72,72,0,0,1-115.22,0,8,8,0,1,0-12.78,9.62,88,88,0,0,0,140.78,0A8,8,0,0,0,196.81,169.61Z"/>
    </svg>
  );
}
