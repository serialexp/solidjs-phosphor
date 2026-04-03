import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowCounterClockwiseDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTI4YTg4LDg4LDAsMSwxLTg4LTg4QTg4LDg4LDAsMCwxLDIxNiwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI0LDEyOGE5Niw5NiwwLDAsMS05NC43MSw5NkgxMjhBOTUuMzgsOTUuMzgsMCwwLDEsNjIuMSwxOTcuOGE4LDgsMCwwLDEsMTEtMTEuNjNBODAsODAsMCwxLDAsNzEuNDMsNzEuMzlhMy4wNywzLjA3LDAsMCwxLS4yNi4yNUw0NC41OSw5Nkg3MmE4LDgsMCwwLDEsMCwxNkgyNGE4LDgsMCwwLDEtOC04VjU2YTgsOCwwLDAsMSwxNiwwVjg1LjhMNjAuMjUsNjBBOTYsOTYsMCwwLDEsMjI0LDEyOFoiLz48L3N2Zz4=)
 */
export function PhArrowCounterClockwiseDuotoneIcon(props: PhArrowCounterClockwiseDuotoneIconProps) {
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
      <path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" opacity="0.2"/><path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"/>
    </svg>
  );
}
