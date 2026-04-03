import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBankFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMjA4YTgsOCwwLDAsMS04LDhIMTZhOCw4LDAsMCwxLDAtMTZIMjQwQTgsOCwwLDAsMSwyNDgsMjA4Wk0xNi4zLDk4LjE4YTgsOCwwLDAsMSwzLjUxLTlsMTA0LTY0YTgsOCwwLDAsMSw4LjM4LDBsMTA0LDY0QTgsOCwwLDAsMSwyMzIsMTA0SDIwOHY2NGgxNmE4LDgsMCwwLDEsMCwxNkgzMmE4LDgsMCwwLDEsMC0xNkg0OFYxMDRIMjRBOCw4LDAsMCwxLDE2LjMsOTguMThaTTE0NCwxNjBhOCw4LDAsMCwwLDE2LDBWMTEyYTgsOCwwLDAsMC0xNiwwWm0tNDgsMGE4LDgsMCwwLDAsMTYsMFYxMTJhOCw4LDAsMCwwLTE2LDBaIi8+PC9zdmc+)
 */
export function PhBankFillIcon(props: PhBankFillIconProps) {
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
      <path d="M248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H240A8,8,0,0,1,248,208ZM16.3,98.18a8,8,0,0,1,3.51-9l104-64a8,8,0,0,1,8.38,0l104,64A8,8,0,0,1,232,104H208v64h16a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H48V104H24A8,8,0,0,1,16.3,98.18ZM144,160a8,8,0,0,0,16,0V112a8,8,0,0,0-16,0Zm-48,0a8,8,0,0,0,16,0V112a8,8,0,0,0-16,0Z"/>
    </svg>
  );
}
