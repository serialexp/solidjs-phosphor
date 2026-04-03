import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsDownUpLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTYuMjQsMTcxLjc2YTYsNiwwLDAsMSwwLDguNDhsLTMyLDMyYTYsNiwwLDAsMS04LjQ4LDBsLTMyLTMyYTYsNiwwLDAsMSw4LjQ4LTguNDhMNzQsMTkzLjUxVjQ4YTYsNiwwLDAsMSwxMiwwVjE5My41MWwyMS43Ni0yMS43NUE2LDYsMCwwLDEsMTE2LjI0LDE3MS43NlptOTYtOTYtMzItMzJhNiw2LDAsMCwwLTguNDgsMGwtMzIsMzJhNiw2LDAsMCwwLDguNDgsOC40OEwxNzAsNjIuNDlWMjA4YTYsNiwwLDAsMCwxMiwwVjYyLjQ5bDIxLjc2LDIxLjc1YTYsNiwwLDAsMCw4LjQ4LTguNDhaIi8+PC9zdmc+)
 */
export function PhArrowsDownUpLightIcon(props: PhArrowsDownUpLightIconProps) {
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
      <path d="M116.24,171.76a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L74,193.51V48a6,6,0,0,1,12,0V193.51l21.76-21.75A6,6,0,0,1,116.24,171.76Zm96-96-32-32a6,6,0,0,0-8.48,0l-32,32a6,6,0,0,0,8.48,8.48L170,62.49V208a6,6,0,0,0,12,0V62.49l21.76,21.75a6,6,0,0,0,8.48-8.48Z"/>
    </svg>
  );
}
