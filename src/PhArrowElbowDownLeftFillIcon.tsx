import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowDownLeftFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzJWMTc2YTgsOCwwLDAsMS04LDhIMTA0djQwYTgsOCwwLDAsMS0xMy42Niw1LjY2bC00OC00OGE4LDgsMCwwLDEsMC0xMS4zMmw0OC00OEE4LDgsMCwwLDEsMTA0LDEyOHY0MGg4MFYzMmE4LDgsMCwwLDEsMTYsMFoiLz48L3N2Zz4=)
 */
export function PhArrowElbowDownLeftFillIcon(props: PhArrowElbowDownLeftFillIconProps) {
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
      <path d="M200,32V176a8,8,0,0,1-8,8H104v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,104,128v40h80V32a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
