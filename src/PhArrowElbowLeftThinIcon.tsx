import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuODMsOTguODNsLTk2LDk2YTQsNCwwLDAsMS01LjY2LDBMMjgsODkuNjZWMTUyYTQsNCwwLDAsMS04LDBWODBhNCw0LDAsMCwxLDQtNEg5NmE0LDQsMCwwLDEsMCw4SDMzLjY2TDEzNiwxODYuMzRsOTMuMTctOTMuMTdhNCw0LDAsMSwxLDUuNjYsNS42NloiLz48L3N2Zz4=)
 */
export function PhArrowElbowLeftThinIcon(props: PhArrowElbowLeftThinIconProps) {
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
      <path d="M234.83,98.83l-96,96a4,4,0,0,1-5.66,0L28,89.66V152a4,4,0,0,1-8,0V80a4,4,0,0,1,4-4H96a4,4,0,0,1,0,8H33.66L136,186.34l93.17-93.17a4,4,0,1,1,5.66,5.66Z"/>
    </svg>
  );
}
