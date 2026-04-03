import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextAlignCenterLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNCw2NGE2LDYsMCwwLDEsNi02SDIxNmE2LDYsMCwwLDEsMCwxMkg0MEE2LDYsMCwwLDEsMzQsNjRaTTY0LDk4YTYsNiwwLDAsMCwwLDEySDE5MmE2LDYsMCwwLDAsMC0xMlptMTUyLDQwSDQwYTYsNiwwLDAsMCwwLDEySDIxNmE2LDYsMCwwLDAsMC0xMlptLTI0LDQwSDY0YTYsNiwwLDAsMCwwLDEySDE5MmE2LDYsMCwwLDAsMC0xMloiLz48L3N2Zz4=)
 */
export function PhTextAlignCenterLightIcon(props: PhTextAlignCenterLightIconProps) {
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
      <path d="M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM64,98a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12Zm152,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm-24,40H64a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
