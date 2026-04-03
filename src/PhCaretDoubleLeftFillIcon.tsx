import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretDoubleLeftFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDhWMjA4YTgsOCwwLDAsMS0xMy42Niw1LjY2TDEyOCwxNDcuMzFWMjA4YTgsOCwwLDAsMS0xMy42Niw1LjY2bC04MC04MGE4LDgsMCwwLDEsMC0xMS4zMmw4MC04MEE4LDgsMCwwLDEsMTI4LDQ4djYwLjY5bDY2LjM0LTY2LjM1QTgsOCwwLDAsMSwyMDgsNDhaIi8+PC9zdmc+)
 */
export function PhCaretDoubleLeftFillIcon(props: PhCaretDoubleLeftFillIconProps) {
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
      <path d="M208,48V208a8,8,0,0,1-13.66,5.66L128,147.31V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,128,48v60.69l66.34-66.35A8,8,0,0,1,208,48Z"/>
    </svg>
  );
}
