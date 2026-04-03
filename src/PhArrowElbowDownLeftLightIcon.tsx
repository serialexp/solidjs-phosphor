import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowDownLeftLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTgsMzJWMTc2YTYsNiwwLDAsMS02LDZINjIuNDlsMzcuNzUsMzcuNzZhNiw2LDAsMSwxLTguNDgsOC40OGwtNDgtNDhhNiw2LDAsMCwxLDAtOC40OGw0OC00OGE2LDYsMCwxLDEsOC40OCw4LjQ4TDYyLjQ5LDE3MEgxODZWMzJhNiw2LDAsMCwxLDEyLDBaIi8+PC9zdmc+)
 */
export function PhArrowElbowDownLeftLightIcon(props: PhArrowElbowDownLeftLightIconProps) {
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
      <path d="M198,32V176a6,6,0,0,1-6,6H62.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,1,1,8.48,8.48L62.49,170H186V32a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
