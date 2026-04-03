import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrendDownFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTI4djY0YTgsOCwwLDAsMS04LDhIMTY4YTgsOCwwLDAsMS01LjY2LTEzLjY2TDE4OC42OSwxNjAsMTM2LDEwNy4zMWwtMzQuMzQsMzQuMzVhOCw4LDAsMCwxLTExLjMyLDBsLTcyLTcyQTgsOCwwLDAsMSwyOS42Niw1OC4zNEw5NiwxMjQuNjlsMzQuMzQtMzQuMzVhOCw4LDAsMCwxLDExLjMyLDBMMjAwLDE0OC42OWwyNi4zNC0yNi4zNUE4LDgsMCwwLDEsMjQwLDEyOFoiLz48L3N2Zz4=)
 */
export function PhTrendDownFillIcon(props: PhTrendDownFillIconProps) {
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
      <path d="M240,128v64a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L188.69,160,136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,29.66,58.34L96,124.69l34.34-34.35a8,8,0,0,1,11.32,0L200,148.69l26.34-26.35A8,8,0,0,1,240,128Z"/>
    </svg>
  );
}
