import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretDoubleDownLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjQsMTMxLjc2YTYsNiwwLDAsMSwwLDguNDhsLTgwLDgwYTYsNiwwLDAsMS04LjQ4LDBsLTgwLTgwYTYsNiwwLDAsMSw4LjQ4LTguNDhMMTI4LDIwNy41MWw3NS43Ni03NS43NUE2LDYsMCwwLDEsMjEyLjI0LDEzMS43NlptLTg4LjQ4LDguNDhhNiw2LDAsMCwwLDguNDgsMGw4MC04MGE2LDYsMCwwLDAtOC40OC04LjQ4TDEyOCwxMjcuNTEsNTIuMjQsNTEuNzZhNiw2LDAsMCwwLTguNDgsOC40OFoiLz48L3N2Zz4=)
 */
export function PhCaretDoubleDownLightIcon(props: PhCaretDoubleDownLightIconProps) {
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
      <path d="M212.24,131.76a6,6,0,0,1,0,8.48l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,207.51l75.76-75.75A6,6,0,0,1,212.24,131.76Zm-88.48,8.48a6,6,0,0,0,8.48,0l80-80a6,6,0,0,0-8.48-8.48L128,127.51,52.24,51.76a6,6,0,0,0-8.48,8.48Z"/>
    </svg>
  );
}
