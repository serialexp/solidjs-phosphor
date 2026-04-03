import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMartiniDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNzJsLTcyLDcyTDU2LDcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzNy42Niw0NS42NkE4LDgsMCwwLDAsMjMyLDMySDI0YTgsOCwwLDAsMC01LjY2LDEzLjY2TDEyMCwxNDcuMzFWMjA4SDg4YTgsOCwwLDAsMCwwLDE2aDgwYTgsOCwwLDAsMCwwLTE2SDEzNlYxNDcuMzFaTTc1LjMxLDgwSDE4MC42OUwxMjgsMTMyLjY5Wk0yMTIuNjksNDhsLTE2LDE2SDU5LjMxbC0xNi0xNloiLz48L3N2Zz4=)
 */
export function PhMartiniDuotoneIcon(props: PhMartiniDuotoneIconProps) {
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
      <path d="M200,72l-72,72L56,72Z" opacity="0.2"/><path d="M237.66,45.66A8,8,0,0,0,232,32H24a8,8,0,0,0-5.66,13.66L120,147.31V208H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V147.31ZM75.31,80H180.69L128,132.69ZM212.69,48l-16,16H59.31l-16-16Z"/>
    </svg>
  );
}
