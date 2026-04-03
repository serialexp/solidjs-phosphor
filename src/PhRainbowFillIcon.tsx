import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRainbowFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNDhBMTIwLjEzLDEyMC4xMywwLDAsMCw4LDE2OHYxNmE4LDgsMCwwLDAsOCw4SDI0MGE4LDgsMCwwLDAsOC04VjE2OEExMjAuMTMsMTIwLjEzLDAsMCwwLDEyOCw0OFptMzIsMTI4YTgsOCwwLDAsMS04LTgsMjQsMjQsMCwwLDAtNDgsMCw4LDgsMCwwLDEtMTYsMCw0MCw0MCwwLDAsMSw4MCwwQTgsOCwwLDAsMSwxNjAsMTc2Wm0zMiwwYTgsOCwwLDAsMS04LTgsNTYsNTYsMCwwLDAtMTEyLDAsOCw4LDAsMCwxLTE2LDAsNzIsNzIsMCwwLDEsMTQ0LDBBOCw4LDAsMCwxLDE5MiwxNzZabTMyLDBhOCw4LDAsMCwxLTgtOCw4OCw4OCwwLDAsMC0xNzYsMCw4LDgsMCwwLDEtMTYsMCwxMDQsMTA0LDAsMCwxLDIwOCwwQTgsOCwwLDAsMSwyMjQsMTc2WiIvPjwvc3ZnPg==)
 */
export function PhRainbowFillIcon(props: PhRainbowFillIconProps) {
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
      <path d="M128,48A120.13,120.13,0,0,0,8,168v16a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V168A120.13,120.13,0,0,0,128,48Zm32,128a8,8,0,0,1-8-8,24,24,0,0,0-48,0,8,8,0,0,1-16,0,40,40,0,0,1,80,0A8,8,0,0,1,160,176Zm32,0a8,8,0,0,1-8-8,56,56,0,0,0-112,0,8,8,0,0,1-16,0,72,72,0,0,1,144,0A8,8,0,0,1,192,176Zm32,0a8,8,0,0,1-8-8,88,88,0,0,0-176,0,8,8,0,0,1-16,0,104,104,0,0,1,208,0A8,8,0,0,1,224,176Z"/>
    </svg>
  );
}
