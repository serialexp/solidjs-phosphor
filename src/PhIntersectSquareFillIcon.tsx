import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhIntersectSquareFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODhIMTY4VjQwYTgsOCwwLDAsMC04LThINDBhOCw4LDAsMCwwLTgsOFYxNjBhOCw4LDAsMCwwLDgsOEg4OHY0OGE4LDgsMCwwLDAsOCw4SDIxNmE4LDgsMCwwLDAsOC04Vjk2QTgsOCwwLDAsMCwyMTYsODhaTTQ4LDE1MlY0OEgxNTJWODhIOTZhOCw4LDAsMCwwLTgsOHY1NlptMTYwLDU2SDEwNFYxNjhoNTZhOCw4LDAsMCwwLDgtOFYxMDRoNDBaIi8+PC9zdmc+)
 */
export function PhIntersectSquareFillIcon(props: PhIntersectSquareFillIconProps) {
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
      <path d="M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM48,152V48H152V88H96a8,8,0,0,0-8,8v56Zm160,56H104V168h56a8,8,0,0,0,8-8V104h40Z"/>
    </svg>
  );
}
