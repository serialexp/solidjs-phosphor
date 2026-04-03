import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUDownLeftFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTEyYTY0LjA3LDY0LjA3LDAsMCwxLTY0LDY0SDg4djQwYTgsOCwwLDAsMS0xMy42Niw1LjY2bC00OC00OGE4LDgsMCwwLDEsMC0xMS4zMmw0OC00OEE4LDgsMCwwLDEsODgsMTIwdjQwaDgwYTQ4LDQ4LDAsMCwwLDAtOTZIODBhOCw4LDAsMCwxLDAtMTZoODhBNjQuMDcsNjQuMDcsMCwwLDEsMjMyLDExMloiLz48L3N2Zz4=)
 */
export function PhArrowUDownLeftFillIcon(props: PhArrowUDownLeftFillIconProps) {
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
      <path d="M232,112a64.07,64.07,0,0,1-64,64H88v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,88,120v40h80a48,48,0,0,0,0-96H80a8,8,0,0,1,0-16h88A64.07,64.07,0,0,1,232,112Z"/>
    </svg>
  );
}
