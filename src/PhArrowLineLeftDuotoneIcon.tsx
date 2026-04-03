import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineLeftDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsNTZWMjAwTDcyLDEyOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMjQsMTIwSDE1MlY1NmE4LDgsMCwwLDAtMTMuNjYtNS42NmwtNzIsNzJhOCw4LDAsMCwwLDAsMTEuMzJsNzIsNzJBOCw4LDAsMCwwLDE1MiwyMDBWMTM2aDcyYTgsOCwwLDAsMCwwLTE2Wm0tODgsNjAuNjlMODMuMzEsMTI4LDEzNiw3NS4zMVpNNDgsNDBWMjE2YTgsOCwwLDAsMS0xNiwwVjQwYTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowLineLeftDuotoneIcon(props: PhArrowLineLeftDuotoneIconProps) {
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
      <path d="M144,56V200L72,128Z" opacity="0.2"/><path d="M224,120H152V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,152,200V136h72a8,8,0,0,0,0-16Zm-88,60.69L83.31,128,136,75.31ZM48,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
