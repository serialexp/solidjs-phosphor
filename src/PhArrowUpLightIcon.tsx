import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUpLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQuMjQsMTE2LjI0YTYsNiwwLDAsMS04LjQ4LDBMMTM0LDU0LjQ5VjIxNmE2LDYsMCwwLDEtMTIsMFY1NC40OUw2MC4yNCwxMTYuMjRhNiw2LDAsMCwxLTguNDgtOC40OGw3Mi03MmE2LDYsMCwwLDEsOC40OCwwbDcyLDcyQTYsNiwwLDAsMSwyMDQuMjQsMTE2LjI0WiIvPjwvc3ZnPg==)
 */
export function PhArrowUpLightIcon(props: PhArrowUpLightIconProps) {
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
      <path d="M204.24,116.24a6,6,0,0,1-8.48,0L134,54.49V216a6,6,0,0,1-12,0V54.49L60.24,116.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0l72,72A6,6,0,0,1,204.24,116.24Z"/>
    </svg>
  );
}
