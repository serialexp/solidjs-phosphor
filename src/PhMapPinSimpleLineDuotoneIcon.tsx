import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMapPinSimpleLineDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsODBhNDgsNDgsMCwxLDEtNDgtNDhBNDgsNDgsMCwwLDEsMTc2LDgwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNiwyMDhIMTM2VjEzNS40MmE1Niw1NiwwLDEsMC0xNiwwVjIwOEg0MGE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZaTTg4LDgwYTQwLDQwLDAsMSwxLDQwLDQwQTQwLDQwLDAsMCwxLDg4LDgwWiIvPjwvc3ZnPg==)
 */
export function PhMapPinSimpleLineDuotoneIcon(props: PhMapPinSimpleLineDuotoneIconProps) {
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
      <path d="M176,80a48,48,0,1,1-48-48A48,48,0,0,1,176,80Z" opacity="0.2"/><path d="M216,208H136V135.42a56,56,0,1,0-16,0V208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM88,80a40,40,0,1,1,40,40A40,40,0,0,1,88,80Z"/>
    </svg>
  );
}
