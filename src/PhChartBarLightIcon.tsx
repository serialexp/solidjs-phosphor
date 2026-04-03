import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChartBarLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMjAySDIxNFY0MGE2LDYsMCwwLDAtNi02SDE1MmE2LDYsMCwwLDAtNiw2VjgySDk2YTYsNiwwLDAsMC02LDZ2NDJINDhhNiw2LDAsMCwwLTYsNnY2NkgzMmE2LDYsMCwwLDAsMCwxMkgyMjRhNiw2LDAsMCwwLDAtMTJaTTE1OCw0Nmg0NFYyMDJIMTU4Wk0xMDIsOTRoNDRWMjAySDEwMlpNNTQsMTQySDkwdjYwSDU0WiIvPjwvc3ZnPg==)
 */
export function PhChartBarLightIcon(props: PhChartBarLightIconProps) {
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
      <path d="M224,202H214V40a6,6,0,0,0-6-6H152a6,6,0,0,0-6,6V82H96a6,6,0,0,0-6,6v42H48a6,6,0,0,0-6,6v66H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12ZM158,46h44V202H158ZM102,94h44V202H102ZM54,142H90v60H54Z"/>
    </svg>
  );
}
