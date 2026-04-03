import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRankingFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMjAwaC04VjE0NGExNiwxNiwwLDAsMC0xNi0xNkgxNzZWNTZhMTYsMTYsMCwwLDAtMTYtMTZIOTZBMTYsMTYsMCwwLDAsODAsNTZWODhINDBhMTYsMTYsMCwwLDAtMTYsMTZ2OTZIMTZhOCw4LDAsMCwwLDAsMTZIMjQwYTgsOCwwLDAsMCwwLTE2Wk04MCwyMDBINDBWMTA0SDgwWm02MC02NGE4LDgsMCwwLDEtMTYsMFYxMDcuMWwtMS40Ny40OWE4LDgsMCwwLDEtNS4wNi0xNS4xOGwxMi00QTgsOCwwLDAsMSwxNDAsOTZabTc2LDY0SDE3NlYxNDRoNDBaIi8+PC9zdmc+)
 */
export function PhRankingFillIcon(props: PhRankingFillIconProps) {
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
      <path d="M240,200h-8V144a16,16,0,0,0-16-16H176V56a16,16,0,0,0-16-16H96A16,16,0,0,0,80,56V88H40a16,16,0,0,0-16,16v96H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM80,200H40V104H80Zm60-64a8,8,0,0,1-16,0V107.1l-1.47.49a8,8,0,0,1-5.06-15.18l12-4A8,8,0,0,1,140,96Zm76,64H176V144h40Z"/>
    </svg>
  );
}
