import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSubsetProperOfLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsMjA4YTYsNiwwLDAsMS02LDZIMTI4YTg2LDg2LDAsMCwxLDAtMTcyaDcyYTYsNiwwLDAsMSwwLDEySDEyOGE3NCw3NCwwLDAsMCwwLDE0OGg3MkE2LDYsMCwwLDEsMjA2LDIwOFoiLz48L3N2Zz4=)
 */
export function PhSubsetProperOfLightIcon(props: PhSubsetProperOfLightIconProps) {
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
      <path d="M206,208a6,6,0,0,1-6,6H128a86,86,0,0,1,0-172h72a6,6,0,0,1,0,12H128a74,74,0,0,0,0,148h72A6,6,0,0,1,206,208Z"/>
    </svg>
  );
}
