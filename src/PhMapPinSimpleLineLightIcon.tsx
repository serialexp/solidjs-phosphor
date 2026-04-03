import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMapPinSimpleLineLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjEwSDEzNFYxMzMuNjZhNTQsNTQsMCwxLDAtMTIsMFYyMTBINDBhNiw2LDAsMCwwLDAsMTJIMjE2YTYsNiwwLDAsMCwwLTEyWk04Niw4MGE0Miw0MiwwLDEsMSw0Miw0MkE0Miw0MiwwLDAsMSw4Niw4MFoiLz48L3N2Zz4=)
 */
export function PhMapPinSimpleLineLightIcon(props: PhMapPinSimpleLineLightIconProps) {
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
      <path d="M216,210H134V133.66a54,54,0,1,0-12,0V210H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM86,80a42,42,0,1,1,42,42A42,42,0,0,1,86,80Z"/>
    </svg>
  );
}
