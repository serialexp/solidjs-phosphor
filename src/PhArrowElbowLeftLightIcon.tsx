import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuMjQsMTAwLjI0bC05Niw5NmE2LDYsMCwwLDEtOC40OCwwTDMwLDk0LjQ4VjE1MmE2LDYsMCwwLDEtMTIsMFY4MGE2LDYsMCwwLDEsNi02SDk2YTYsNiwwLDAsMSwwLDEySDM4LjQ4TDEzNiwxODMuNTFsOTEuNzYtOTEuNzVhNiw2LDAsMCwxLDguNDgsOC40OFoiLz48L3N2Zz4=)
 */
export function PhArrowElbowLeftLightIcon(props: PhArrowElbowLeftLightIconProps) {
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
      <path d="M236.24,100.24l-96,96a6,6,0,0,1-8.48,0L30,94.48V152a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H96a6,6,0,0,1,0,12H38.48L136,183.51l91.76-91.75a6,6,0,0,1,8.48,8.48Z"/>
    </svg>
  );
}
