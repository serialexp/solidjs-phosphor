import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFunnelSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTgsMTM2YTYsNiwwLDAsMS02LDZINjRhNiw2LDAsMCwxLDAtMTJIMTkyQTYsNiwwLDAsMSwxOTgsMTM2Wm0zNC01NEgyNGE2LDYsMCwwLDAsMCwxMkgyMzJhNiw2LDAsMCwwLDAtMTJabS04MCw5NkgxMDRhNiw2LDAsMCwwLDAsMTJoNDhhNiw2LDAsMCwwLDAtMTJaIi8+PC9zdmc+)
 */
export function PhFunnelSimpleLightIcon(props: PhFunnelSimpleLightIconProps) {
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
      <path d="M198,136a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H192A6,6,0,0,1,198,136Zm34-54H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm-80,96H104a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
