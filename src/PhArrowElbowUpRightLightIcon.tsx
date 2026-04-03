import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowUpRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAuMjQsODQuMjRsLTQ4LDQ4YTYsNiwwLDAsMS04LjQ4LTguNDhMMjAxLjUxLDg2SDc4VjIyNGE2LDYsMCwwLDEtMTIsMFY4MGE2LDYsMCwwLDEsNi02SDIwMS41MUwxNjMuNzYsMzYuMjRhNiw2LDAsMCwxLDguNDgtOC40OGw0OCw0OEE2LDYsMCwwLDEsMjIwLjI0LDg0LjI0WiIvPjwvc3ZnPg==)
 */
export function PhArrowElbowUpRightLightIcon(props: PhArrowElbowUpRightLightIconProps) {
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
      <path d="M220.24,84.24l-48,48a6,6,0,0,1-8.48-8.48L201.51,86H78V224a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H201.51L163.76,36.24a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,220.24,84.24Z"/>
    </svg>
  );
}
