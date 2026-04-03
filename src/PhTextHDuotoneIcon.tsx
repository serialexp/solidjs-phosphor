import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextHDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNTZWMjAwSDU2VjU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCw1NlYyMDBhOCw4LDAsMCwxLTE2LDBWMTM2SDY0djY0YTgsOCwwLDAsMS0xNiwwVjU2YTgsOCwwLDAsMSwxNiwwdjY0SDE5MlY1NmE4LDgsMCwwLDEsMTYsMFoiLz48L3N2Zz4=)
 */
export function PhTextHDuotoneIcon(props: PhTextHDuotoneIconProps) {
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
      <path d="M200,56V200H56V56Z" opacity="0.2"/><path d="M208,56V200a8,8,0,0,1-16,0V136H64v64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v64H192V56a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
