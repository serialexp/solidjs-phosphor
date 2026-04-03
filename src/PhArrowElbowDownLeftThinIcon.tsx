import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowDownLeftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsMzJWMTc2YTQsNCwwLDAsMS00LDRINTcuNjZsNDEuMTcsNDEuMTdhNCw0LDAsMCwxLTUuNjYsNS42NmwtNDgtNDhhNCw0LDAsMCwxLDAtNS42Nmw0OC00OGE0LDQsMCwxLDEsNS42Niw1LjY2TDU3LjY2LDE3MkgxODhWMzJhNCw0LDAsMCwxLDgsMFoiLz48L3N2Zz4=)
 */
export function PhArrowElbowDownLeftThinIcon(props: PhArrowElbowDownLeftThinIconProps) {
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
      <path d="M196,32V176a4,4,0,0,1-4,4H57.66l41.17,41.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,1,1,5.66,5.66L57.66,172H188V32a4,4,0,0,1,8,0Z"/>
    </svg>
  );
}
