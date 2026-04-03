import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretDoubleUpLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuMjQsMTk1Ljc2YTYsNiwwLDEsMS04LjQ4LDguNDhMMTI4LDEyOC40OSw1Mi4yNCwyMDQuMjRhNiw2LDAsMCwxLTguNDgtOC40OGw4MC04MGE2LDYsMCwwLDEsOC40OCwwWm0tMTYwLTcxLjUyTDEyOCw0OC40OWw3NS43Niw3NS43NWE2LDYsMCwwLDAsOC40OC04LjQ4bC04MC04MGE2LDYsMCwwLDAtOC40OCwwbC04MCw4MGE2LDYsMCwwLDAsOC40OCw4LjQ4WiIvPjwvc3ZnPg==)
 */
export function PhCaretDoubleUpLightIcon(props: PhCaretDoubleUpLightIconProps) {
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
      <path d="M212.24,195.76a6,6,0,1,1-8.48,8.48L128,128.49,52.24,204.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0Zm-160-71.52L128,48.49l75.76,75.75a6,6,0,0,0,8.48-8.48l-80-80a6,6,0,0,0-8.48,0l-80,80a6,6,0,0,0,8.48,8.48Z"/>
    </svg>
  );
}
