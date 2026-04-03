import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsOutLineHorizontalFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsMTI4YTgsOCwwLDAsMS04LDhINTZ2MjRhOCw4LDAsMCwxLTEzLjY2LDUuNjZsLTMyLTMyYTgsOCwwLDAsMSwwLTExLjMybDMyLTMyQTgsOCwwLDAsMSw1Niw5NnYyNEg5NkE4LDgsMCwwLDEsMTA0LDEyOFptMTQxLjY2LTUuNjYtMzItMzJBOCw4LDAsMCwwLDIwMCw5NnYyNEgxNjBhOCw4LDAsMCwwLDAsMTZoNDB2MjRhOCw4LDAsMCwwLDEzLjY2LDUuNjZsMzItMzJBOCw4LDAsMCwwLDI0NS42NiwxMjIuMzRaTTEyOCwzMmE4LDgsMCwwLDAtOCw4VjIxNmE4LDgsMCwwLDAsMTYsMFY0MEE4LDgsMCwwLDAsMTI4LDMyWiIvPjwvc3ZnPg==)
 */
export function PhArrowsOutLineHorizontalFillIcon(props: PhArrowsOutLineHorizontalFillIconProps) {
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
      <path d="M104,128a8,8,0,0,1-8,8H56v24a8,8,0,0,1-13.66,5.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,56,96v24H96A8,8,0,0,1,104,128Zm141.66-5.66-32-32A8,8,0,0,0,200,96v24H160a8,8,0,0,0,0,16h40v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,245.66,122.34ZM128,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,128,32Z"/>
    </svg>
  );
}
