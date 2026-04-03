import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsVerticalLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQuMjQsMTk1Ljc2YTYsNiwwLDAsMSwwLDguNDhsLTMyLDMyYTYsNiwwLDAsMS04LjQ4LDBsLTMyLTMyYTYsNiwwLDAsMSw4LjQ4LTguNDhMMTIyLDIxNy41MXYtMTc5TDEwMC4yNCw2MC4yNGE2LDYsMCwwLDEtOC40OC04LjQ4bDMyLTMyYTYsNiwwLDAsMSw4LjQ4LDBsMzIsMzJhNiw2LDAsMSwxLTguNDgsOC40OEwxMzQsMzguNDl2MTc5bDIxLjc2LTIxLjc1QTYsNiwwLDAsMSwxNjQuMjQsMTk1Ljc2WiIvPjwvc3ZnPg==)
 */
export function PhArrowsVerticalLightIcon(props: PhArrowsVerticalLightIconProps) {
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
      <path d="M164.24,195.76a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L122,217.51v-179L100.24,60.24a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48L134,38.49v179l21.76-21.75A6,6,0,0,1,164.24,195.76Z"/>
    </svg>
  );
}
