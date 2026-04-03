import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChartPieDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMzJ2OTZMNDQuODYsMTc2aDBBOTYsOTYsMCwwLDEsMTI4LDMyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEyOCwyNEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjExLDEwNC4xMSwwLDAsMCwxMjgsMjRabTcxLjg3LDUzLjI3TDEzNiwxMTQuMTRWNDAuMzdBODgsODgsMCwwLDEsMTk5Ljg3LDc3LjI3Wk0xMjAsNDAuMzd2ODNsLTcxLjg5LDQxLjVBODgsODgsMCwwLDEsMTIwLDQwLjM3Wk0xMjgsMjE2YTg4LDg4LDAsMCwxLTcxLjg3LTM3LjI3TDIwNy44OSw5MS4xMkE4OCw4OCwwLDAsMSwxMjgsMjE2WiIvPjwvc3ZnPg==)
 */
export function PhChartPieDuotoneIcon(props: PhChartPieDuotoneIconProps) {
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
      <path d="M128,32v96L44.86,176h0A96,96,0,0,1,128,32Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm71.87,53.27L136,114.14V40.37A88,88,0,0,1,199.87,77.27ZM120,40.37v83l-71.89,41.5A88,88,0,0,1,120,40.37ZM128,216a88,88,0,0,1-71.87-37.27L207.89,91.12A88,88,0,0,1,128,216Z"/>
    </svg>
  );
}
