import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGpsFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTI4YTgsOCwwLDAsMS04LDhIMjE1LjYzQTg4LjEzLDg4LjEzLDAsMCwxLDEzNiwyMTUuNjNWMjQwYTgsOCwwLDAsMS0xNiwwVjIxNS42M0E4OC4xMyw4OC4xMywwLDAsMSw0MC4zNywxMzZIMTZhOCw4LDAsMCwxLDAtMTZINDAuMzdBODguMTMsODguMTMsMCwwLDEsMTIwLDQwLjM3VjE2YTgsOCwwLDAsMSwxNiwwVjQwLjM3QTg4LjEzLDg4LjEzLDAsMCwxLDIxNS42MywxMjBIMjQwQTgsOCwwLDAsMSwyNDgsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhGpsFillIcon(props: PhGpsFillIconProps) {
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
      <path d="M248,128a8,8,0,0,1-8,8H215.63A88.13,88.13,0,0,1,136,215.63V240a8,8,0,0,1-16,0V215.63A88.13,88.13,0,0,1,40.37,136H16a8,8,0,0,1,0-16H40.37A88.13,88.13,0,0,1,120,40.37V16a8,8,0,0,1,16,0V40.37A88.13,88.13,0,0,1,215.63,120H240A8,8,0,0,1,248,128Z"/>
    </svg>
  );
}
