import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDiamondsFourFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04Mi4zNCw2OS42NmE4LDgsMCwwLDEsMC0xMS4zMmw0MC00MGE4LDgsMCwwLDEsMTEuMzIsMGw0MCw0MGE4LDgsMCwwLDEsMCwxMS4zMmwtNDAsNDBhOCw4LDAsMCwxLTExLjMyLDBabTUxLjMyLDc2LjY4YTgsOCwwLDAsMC0xMS4zMiwwbC00MCw0MGE4LDgsMCwwLDAsMCwxMS4zMmw0MCw0MGE4LDgsMCwwLDAsMTEuMzIsMGw0MC00MGE4LDgsMCwwLDAsMC0xMS4zMlptMTA0LTI0LTQwLTQwYTgsOCwwLDAsMC0xMS4zMiwwbC00MCw0MGE4LDgsMCwwLDAsMCwxMS4zMmw0MCw0MGE4LDgsMCwwLDAsMTEuMzIsMGw0MC00MEE4LDgsMCwwLDAsMjM3LjY2LDEyMi4zNFptLTEyOCwwLTQwLTQwYTgsOCwwLDAsMC0xMS4zMiwwbC00MCw0MGE4LDgsMCwwLDAsMCwxMS4zMmw0MCw0MGE4LDgsMCwwLDAsMTEuMzIsMGw0MC00MEE4LDgsMCwwLDAsMTA5LjY2LDEyMi4zNFoiLz48L3N2Zz4=)
 */
export function PhDiamondsFourFillIcon(props: PhDiamondsFourFillIconProps) {
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
      <path d="M82.34,69.66a8,8,0,0,1,0-11.32l40-40a8,8,0,0,1,11.32,0l40,40a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0Zm51.32,76.68a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32Zm104-24-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,237.66,122.34Zm-128,0-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,109.66,122.34Z"/>
    </svg>
  );
}
