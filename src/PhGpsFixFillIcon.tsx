import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGpsFixFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTIwSDIxNS42M0E4OC4xMyw4OC4xMywwLDAsMCwxMzYsNDAuMzdWMTZhOCw4LDAsMCwwLTE2LDBWNDAuMzdBODguMTMsODguMTMsMCwwLDAsNDAuMzcsMTIwSDE2YTgsOCwwLDAsMCwwLDE2SDQwLjM3QTg4LjEzLDg4LjEzLDAsMCwwLDEyMCwyMTUuNjNWMjQwYTgsOCwwLDAsMCwxNiwwVjIxNS42M0E4OC4xMyw4OC4xMywwLDAsMCwyMTUuNjMsMTM2SDI0MGE4LDgsMCwwLDAsMC0xNlpNMTI4LDIwMGE3Miw3MiwwLDEsMSw3Mi03MkE3Mi4wOCw3Mi4wOCwwLDAsMSwxMjgsMjAwWm00MC03MmE0MCw0MCwwLDEsMS00MC00MEE0MCw0MCwwLDAsMSwxNjgsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhGpsFixFillIcon(props: PhGpsFixFillIconProps) {
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
      <path d="M240,120H215.63A88.13,88.13,0,0,0,136,40.37V16a8,8,0,0,0-16,0V40.37A88.13,88.13,0,0,0,40.37,120H16a8,8,0,0,0,0,16H40.37A88.13,88.13,0,0,0,120,215.63V240a8,8,0,0,0,16,0V215.63A88.13,88.13,0,0,0,215.63,136H240a8,8,0,0,0,0-16ZM128,200a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,200Zm40-72a40,40,0,1,1-40-40A40,40,0,0,1,168,128Z"/>
    </svg>
  );
}
