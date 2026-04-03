import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGradientThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yOCwxMDRhNCw0LDAsMCwxLDQtNGg4MGE0LDQsMCwwLDEsMCw4SDMyQTQsNCwwLDAsMSwyOCwxMDRabTE5Ni00SDE0NGE0LDQsMCwwLDAsMCw4aDgwYTQsNCwwLDAsMCwwLThaTTcyLDE0MEgzMmE0LDQsMCwwLDAsMCw4SDcyYTQsNCwwLDAsMCwwLThabTE1MiwwSDE4NGE0LDQsMCwwLDAsMCw4aDQwYTQsNCwwLDAsMCwwLThabS0xMjQsNGE0LDQsMCwwLDAsNCw0aDQ4YTQsNCwwLDAsMCwwLThIMTA0QTQsNCwwLDAsMCwxMDAsMTQ0Wk01NiwxODBIMzJhNCw0LDAsMCwwLDAsOEg1NmE0LDQsMCwwLDAsMC04Wm01NiwwSDg4YTQsNCwwLDAsMCwwLDhoMjRhNCw0LDAsMCwwLDAtOFptNTYsMEgxNDRhNCw0LDAsMCwwLDAsOGgyNGE0LDQsMCwwLDAsMC04Wm01NiwwSDIwMGE0LDQsMCwwLDAsMCw4aDI0YTQsNCwwLDAsMCwwLThaTTMyLDY4SDIyNGE0LDQsMCwwLDAsMC04SDMyYTQsNCwwLDAsMCwwLDhaIi8+PC9zdmc+)
 */
export function PhGradientThinIcon(props: PhGradientThinIconProps) {
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
      <path d="M28,104a4,4,0,0,1,4-4h80a4,4,0,0,1,0,8H32A4,4,0,0,1,28,104Zm196-4H144a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8ZM72,140H32a4,4,0,0,0,0,8H72a4,4,0,0,0,0-8Zm152,0H184a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8Zm-124,4a4,4,0,0,0,4,4h48a4,4,0,0,0,0-8H104A4,4,0,0,0,100,144ZM56,180H32a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Zm56,0H88a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Zm56,0H144a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Zm56,0H200a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8ZM32,68H224a4,4,0,0,0,0-8H32a4,4,0,0,0,0,8Z"/>
    </svg>
  );
}
