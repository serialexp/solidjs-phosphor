import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextAlignJustifyLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNCw2NGE2LDYsMCwwLDEsNi02SDIxNmE2LDYsMCwwLDEsMCwxMkg0MEE2LDYsMCwwLDEsMzQsNjRaTTIxNiw5OEg0MGE2LDYsMCwwLDAsMCwxMkgyMTZhNiw2LDAsMCwwLDAtMTJabTAsNDBINDBhNiw2LDAsMCwwLDAsMTJIMjE2YTYsNiwwLDAsMCwwLTEyWm0wLDQwSDQwYTYsNiwwLDAsMCwwLDEySDIxNmE2LDYsMCwwLDAsMC0xMloiLz48L3N2Zz4=)
 */
export function PhTextAlignJustifyLightIcon(props: PhTextAlignJustifyLightIconProps) {
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
      <path d="M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM216,98H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
