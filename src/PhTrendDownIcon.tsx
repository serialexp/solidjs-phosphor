import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrendDownIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTI4djY0YTgsOCwwLDAsMS04LDhIMTY4YTgsOCwwLDAsMSwwLTE2aDQ0LjY5TDEzNiwxMDcuMzFsLTM0LjM0LDM0LjM1YTgsOCwwLDAsMS0xMS4zMiwwbC03Mi03MkE4LDgsMCwwLDEsMjkuNjYsNTguMzRMOTYsMTI0LjY5bDM0LjM0LTM0LjM1YTgsOCwwLDAsMSwxMS4zMiwwTDIyNCwxNzIuNjlWMTI4YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 */
export function PhTrendDownIcon(props: PhTrendDownIconProps) {
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
      <path d="M240,128v64a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h44.69L136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,29.66,58.34L96,124.69l34.34-34.35a8,8,0,0,1,11.32,0L224,172.69V128a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
