import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowDownLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQuMjQsMTQ4LjI0bC03Miw3MmE2LDYsMCwwLDEtOC40OCwwbC03Mi03MmE2LDYsMCwwLDEsOC40OC04LjQ4TDEyMiwyMDEuNTFWNDBhNiw2LDAsMCwxLDEyLDBWMjAxLjUxbDYxLjc2LTYxLjc1YTYsNiwwLDAsMSw4LjQ4LDguNDhaIi8+PC9zdmc+)
 */
export function PhArrowDownLightIcon(props: PhArrowDownLightIconProps) {
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
      <path d="M204.24,148.24l-72,72a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L122,201.51V40a6,6,0,0,1,12,0V201.51l61.76-61.75a6,6,0,0,1,8.48,8.48Z"/>
    </svg>
  );
}
