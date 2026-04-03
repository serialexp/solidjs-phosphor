import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowArcLeftLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMTg0YTYsNiwwLDAsMS0xMiwwQTkwLDkwLDAsMCwwLDY0LjM2LDEyMC4zNkwzOC41NSwxNDZIODhhNiw2LDAsMCwxLDAsMTJIMjRhNiw2LDAsMCwxLTYtNlY4OGE2LDYsMCwwLDEsMTIsMHY0OS41OGwyNS44OS0yNS43MkExMDIsMTAyLDAsMCwxLDIzMCwxODRaIi8+PC9zdmc+)
 */
export function PhArrowArcLeftLightIcon(props: PhArrowArcLeftLightIconProps) {
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
      <path d="M230,184a6,6,0,0,1-12,0A90,90,0,0,0,64.36,120.36L38.55,146H88a6,6,0,0,1,0,12H24a6,6,0,0,1-6-6V88a6,6,0,0,1,12,0v49.58l25.89-25.72A102,102,0,0,1,230,184Z"/>
    </svg>
  );
}
