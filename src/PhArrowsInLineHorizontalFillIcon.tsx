import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsInLineHorizontalFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDEuNjYsMTIyLjM0YTgsOCwwLDAsMSwwLDExLjMybC0zMiwzMkE4LDgsMCwwLDEsNTYsMTYwVjEzNkgxNmE4LDgsMCwwLDEsMC0xNkg1NlY5NmE4LDgsMCwwLDEsMTMuNjYtNS42NlpNMjQwLDEyMEgyMDBWOTZhOCw4LDAsMCwwLTEzLjY2LTUuNjZsLTMyLDMyYTgsOCwwLDAsMCwwLDExLjMybDMyLDMyQTgsOCwwLDAsMCwyMDAsMTYwVjEzNmg0MGE4LDgsMCwwLDAsMC0xNlpNMTI4LDMyYTgsOCwwLDAsMC04LDhWMjE2YTgsOCwwLDAsMCwxNiwwVjQwQTgsOCwwLDAsMCwxMjgsMzJaIi8+PC9zdmc+)
 */
export function PhArrowsInLineHorizontalFillIcon(props: PhArrowsInLineHorizontalFillIconProps) {
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
      <path d="M101.66,122.34a8,8,0,0,1,0,11.32l-32,32A8,8,0,0,1,56,160V136H16a8,8,0,0,1,0-16H56V96a8,8,0,0,1,13.66-5.66ZM240,120H200V96a8,8,0,0,0-13.66-5.66l-32,32a8,8,0,0,0,0,11.32l32,32A8,8,0,0,0,200,160V136h40a8,8,0,0,0,0-16ZM128,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,128,32Z"/>
    </svg>
  );
}
