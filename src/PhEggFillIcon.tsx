import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEggFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTUyYTg4LDg4LDAsMCwxLTE3NiwwYzAtMzAuNzcsMTAuNy02NC40NiwyOS4zNC05Mi40NEM4Ny41MywzMi4yOSwxMDkuNDYsMTYsMTI4LDE2czQwLjQ3LDE2LjI5LDU4LjY2LDQzLjU2QzIwNS4zLDg3LjU0LDIxNiwxMjEuMjMsMjE2LDE1MloiLz48L3N2Zz4=)
 */
export function PhEggFillIcon(props: PhEggFillIconProps) {
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
      <path d="M216,152a88,88,0,0,1-176,0c0-30.77,10.7-64.46,29.34-92.44C87.53,32.29,109.46,16,128,16s40.47,16.29,58.66,43.56C205.3,87.54,216,121.23,216,152Z"/>
    </svg>
  );
}
