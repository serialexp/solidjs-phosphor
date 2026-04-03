import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChartLineUpIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjA4YTgsOCwwLDAsMS04LDhIMzJhOCw4LDAsMCwxLTgtOFY0OGE4LDgsMCwwLDEsMTYsMFYxNTYuNjlsNTAuMzQtNTAuMzVhOCw4LDAsMCwxLDExLjMyLDBMMTI4LDEzMi42OSwxODAuNjksODBIMTYwYTgsOCwwLDAsMSwwLTE2aDQwYTgsOCwwLDAsMSw4LDh2NDBhOCw4LDAsMCwxLTE2LDBWOTEuMzFsLTU4LjM0LDU4LjM1YTgsOCwwLDAsMS0xMS4zMiwwTDk2LDEyMy4zMWwtNTYsNTZWMjAwSDIyNEE4LDgsMCwwLDEsMjMyLDIwOFoiLz48L3N2Zz4=)
 */
export function PhChartLineUpIcon(props: PhChartLineUpIconProps) {
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
      <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"/>
    </svg>
  );
}
