import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftUpLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzgsMTkyYTYsNiwwLDAsMS02LDZIODhhNiw2LDAsMCwxLTYtNlY2Mi40OUw0NC4yNCwxMDAuMjRhNiw2LDAsMCwxLTguNDgtOC40OGw0OC00OGE2LDYsMCwwLDEsOC40OCwwbDQ4LDQ4YTYsNiwwLDEsMS04LjQ4LDguNDhMOTQsNjIuNDlWMTg2SDIzMkE2LDYsMCwwLDEsMjM4LDE5MloiLz48L3N2Zz4=)
 */
export function PhArrowElbowLeftUpLightIcon(props: PhArrowElbowLeftUpLightIconProps) {
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
      <path d="M238,192a6,6,0,0,1-6,6H88a6,6,0,0,1-6-6V62.49L44.24,100.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48a6,6,0,1,1-8.48,8.48L94,62.49V186H232A6,6,0,0,1,238,192Z"/>
    </svg>
  );
}
