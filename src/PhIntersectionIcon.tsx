import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhIntersectionIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTIwdjgwYTgsOCwwLDAsMS0xNiwwVjEyMGE2NCw2NCwwLDAsMC0xMjgsMHY4MGE4LDgsMCwwLDEtMTYsMFYxMjBhODAsODAsMCwwLDEsMTYwLDBaIi8+PC9zdmc+)
 */
export function PhIntersectionIcon(props: PhIntersectionIconProps) {
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
      <path d="M208,120v80a8,8,0,0,1-16,0V120a64,64,0,0,0-128,0v80a8,8,0,0,1-16,0V120a80,80,0,0,1,160,0Z"/>
    </svg>
  );
}
