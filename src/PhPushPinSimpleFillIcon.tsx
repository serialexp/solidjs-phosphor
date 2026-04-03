import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPushPinSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTc2YTgsOCwwLDAsMS04LDhIMTM2djU2YTgsOCwwLDAsMS0xNiwwVjE4NEg0MGE4LDgsMCwwLDEsMC0xNmg5LjI5TDcwLjQ2LDQ4SDY0YTgsOCwwLDAsMSwwLTE2SDE5MmE4LDgsMCwwLDEsMCwxNmgtNi40NmwyMS4xNywxMjBIMjE2QTgsOCwwLDAsMSwyMjQsMTc2WiIvPjwvc3ZnPg==)
 */
export function PhPushPinSimpleFillIcon(props: PhPushPinSimpleFillIconProps) {
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
      <path d="M224,176a8,8,0,0,1-8,8H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.29L70.46,48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16h-6.46l21.17,120H216A8,8,0,0,1,224,176Z"/>
    </svg>
  );
}
