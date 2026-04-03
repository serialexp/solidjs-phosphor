import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFadersHorizontalDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODB2OTZINDBWODBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTc2LDgwYTgsOCwwLDAsMSw4LThoMzJhOCw4LDAsMCwxLDAsMTZIMTg0QTgsOCwwLDAsMSwxNzYsODBaTTQwLDg4SDE0NHYxNmE4LDgsMCwwLDAsMTYsMFY1NmE4LDgsMCwwLDAtMTYsMFY3Mkg0MGE4LDgsMCwwLDAsMCwxNlptMTc2LDgwSDEyMGE4LDgsMCwwLDAsMCwxNmg5NmE4LDgsMCwwLDAsMC0xNlpNODgsMTQ0YTgsOCwwLDAsMC04LDh2MTZINDBhOCw4LDAsMCwwLDAsMTZIODB2MTZhOCw4LDAsMCwwLDE2LDBWMTUyQTgsOCwwLDAsMCw4OCwxNDRaIi8+PC9zdmc+)
 */
export function PhFadersHorizontalDuotoneIcon(props: PhFadersHorizontalDuotoneIconProps) {
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
      <path d="M216,80v96H40V80Z" opacity="0.2"/><path d="M176,80a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H184A8,8,0,0,1,176,80ZM40,88H144v16a8,8,0,0,0,16,0V56a8,8,0,0,0-16,0V72H40a8,8,0,0,0,0,16Zm176,80H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16ZM88,144a8,8,0,0,0-8,8v16H40a8,8,0,0,0,0,16H80v16a8,8,0,0,0,16,0V152A8,8,0,0,0,88,144Z"/>
    </svg>
  );
}
