import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowCircleDownLeftDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptMCwxOTJhODgsODgsMCwxLDEsODgtODhBODguMSw4OC4xLDAsMCwxLDEyOCwyMTZaTTE2NS42Niw5MC4zNGE4LDgsMCwwLDEsMCwxMS4zMkwxMTUuMzEsMTUySDE0NGE4LDgsMCwwLDEsMCwxNkg5NmE4LDgsMCwwLDEtOC04VjExMmE4LDgsMCwwLDEsMTYsMHYyOC42OWw1MC4zNC01MC4zNUE4LDgsMCwwLDEsMTY1LjY2LDkwLjM0WiIvPjwvc3ZnPg==)
 */
export function PhArrowCircleDownLeftDuotoneIcon(props: PhArrowCircleDownLeftDuotoneIconProps) {
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
      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM165.66,90.34a8,8,0,0,1,0,11.32L115.31,152H144a8,8,0,0,1,0,16H96a8,8,0,0,1-8-8V112a8,8,0,0,1,16,0v28.69l50.34-50.35A8,8,0,0,1,165.66,90.34Z"/>
    </svg>
  );
}
