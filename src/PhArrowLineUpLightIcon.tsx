import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineUpLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQuMjQsMTM5Ljc2YTYsNiwwLDEsMS04LjQ4LDguNDhMMTM0LDg2LjQ5VjIyNGE2LDYsMCwwLDEtMTIsMFY4Ni40OUw2MC4yNCwxNDguMjRhNiw2LDAsMCwxLTguNDgtOC40OGw3Mi03MmE2LDYsMCwwLDEsOC40OCwwWk0yMTYsMzRINDBhNiw2LDAsMCwwLDAsMTJIMjE2YTYsNiwwLDAsMCwwLTEyWiIvPjwvc3ZnPg==)
 */
export function PhArrowLineUpLightIcon(props: PhArrowLineUpLightIconProps) {
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
      <path d="M204.24,139.76a6,6,0,1,1-8.48,8.48L134,86.49V224a6,6,0,0,1-12,0V86.49L60.24,148.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0ZM216,34H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
