import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhColumnsDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsNDhWMjA4YTgsOCwwLDAsMS04LDhINjRhOCw4LDAsMCwxLTgtOFY0OGE4LDgsMCwwLDEsOC04aDQwQTgsOCwwLDAsMSwxMTIsNDhabTgwLThIMTUyYTgsOCwwLDAsMC04LDhWMjA4YTgsOCwwLDAsMCw4LDhoNDBhOCw4LDAsMCwwLDgtOFY0OEE4LDgsMCwwLDAsMTkyLDQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEwNCwzMkg2NEExNiwxNiwwLDAsMCw0OCw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZoNDBhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMTA0LDMyWm0wLDE3Nkg2NFY0OGg0MFpNMTkyLDMySDE1MmExNiwxNiwwLDAsMC0xNiwxNlYyMDhhMTYsMTYsMCwwLDAsMTYsMTZoNDBhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMTkyLDMyWm0wLDE3NkgxNTJWNDhoNDBaIi8+PC9zdmc+)
 */
export function PhColumnsDuotoneIcon(props: PhColumnsDuotoneIconProps) {
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
      <path d="M112,48V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,112,48Zm80-8H152a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h40a8,8,0,0,0,8-8V48A8,8,0,0,0,192,40Z" opacity="0.2"/><path d="M104,32H64A16,16,0,0,0,48,48V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32Zm0,176H64V48h40ZM192,32H152a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Zm0,176H152V48h40Z"/>
    </svg>
  );
}
