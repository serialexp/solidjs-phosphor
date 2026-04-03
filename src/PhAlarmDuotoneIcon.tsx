import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlarmDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTM2YTg4LDg4LDAsMSwxLTg4LTg4QTg4LDg4LDAsMCwxLDIxNiwxMzZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDQwYTk2LDk2LDAsMSwwLDk2LDk2QTk2LjExLDk2LjExLDAsMCwwLDEyOCw0MFptMCwxNzZhODAsODAsMCwxLDEsODAtODBBODAuMDksODAuMDksMCwwLDEsMTI4LDIxNlpNNjEuNjYsMzcuNjZsLTMyLDMyQTgsOCwwLDAsMSwxOC4zNCw1OC4zNGwzMi0zMkE4LDgsMCwwLDEsNjEuNjYsMzcuNjZabTE3NiwzMmE4LDgsMCwwLDEtMTEuMzIsMGwtMzItMzJhOCw4LDAsMCwxLDExLjMyLTExLjMybDMyLDMyQTgsOCwwLDAsMSwyMzcuNjYsNjkuNjZaTTE4NCwxMjhhOCw4LDAsMCwxLDAsMTZIMTI4YTgsOCwwLDAsMS04LThWODBhOCw4LDAsMCwxLDE2LDB2NDhaIi8+PC9zdmc+)
 */
export function PhAlarmDuotoneIcon(props: PhAlarmDuotoneIconProps) {
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
      <path d="M216,136a88,88,0,1,1-88-88A88,88,0,0,1,216,136Z" opacity="0.2"/><path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM61.66,37.66l-32,32A8,8,0,0,1,18.34,58.34l32-32A8,8,0,0,1,61.66,37.66Zm176,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,69.66ZM184,128a8,8,0,0,1,0,16H128a8,8,0,0,1-8-8V80a8,8,0,0,1,16,0v48Z"/>
    </svg>
  );
}
