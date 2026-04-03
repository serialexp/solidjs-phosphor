import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05Niw4MCwyNCwxNTJWODBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjM3LjY2LDkwLjM0YTgsOCwwLDAsMC0xMS4zMiwwTDEzNiwxODAuNjksNzEuMzEsMTE2bDMwLjM1LTMwLjM0QTgsOCwwLDAsMCw5Niw3MkgyNGE4LDgsMCwwLDAtOCw4djcyYTgsOCwwLDAsMCwxMy42Niw1LjY2TDYwLDEyNy4zMWw3MC4zNCw3MC4zNWE4LDgsMCwwLDAsMTEuMzIsMGw5Ni05NkE4LDgsMCwwLDAsMjM3LjY2LDkwLjM0Wk0zMiwxMzIuNjlWODhINzYuNjlaIi8+PC9zdmc+)
 */
export function PhArrowElbowLeftDuotoneIcon(props: PhArrowElbowLeftDuotoneIconProps) {
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
      <path d="M96,80,24,152V80Z" opacity="0.2"/><path d="M237.66,90.34a8,8,0,0,0-11.32,0L136,180.69,71.31,116l30.35-30.34A8,8,0,0,0,96,72H24a8,8,0,0,0-8,8v72a8,8,0,0,0,13.66,5.66L60,127.31l70.34,70.35a8,8,0,0,0,11.32,0l96-96A8,8,0,0,0,237.66,90.34ZM32,132.69V88H76.69Z"/>
    </svg>
  );
}
