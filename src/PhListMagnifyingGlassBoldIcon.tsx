import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhListMagnifyingGlassBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yOCw2NEExMiwxMiwwLDAsMSw0MCw1MkgyMTZhMTIsMTIsMCwwLDEsMCwyNEg0MEExMiwxMiwwLDAsMSwyOCw2NFptMTIsNzZoNjRhMTIsMTIsMCwwLDAsMC0yNEg0MGExMiwxMiwwLDAsMCwwLDI0Wm04MCw0MEg0MGExMiwxMiwwLDAsMCwwLDI0aDgwYTEyLDEyLDAsMCwwLDAtMjRabTEyMC40OSwyMC40OWExMiwxMiwwLDAsMS0xNywwbC0xOC4wOC0xOC4wOGE0NCw0NCwwLDEsMSwxNy0xN2wxOC4wOCwxOC4wN0ExMiwxMiwwLDAsMSwyNDAuNDksMjAwLjQ5Wk0xODQsMTY0YTIwLDIwLDAsMSwwLTIwLTIwQTIwLDIwLDAsMCwwLDE4NCwxNjRaIi8+PC9zdmc+)
 */
export function PhListMagnifyingGlassBoldIcon(props: PhListMagnifyingGlassBoldIconProps) {
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
      <path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,76h64a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm80,40H40a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24Zm120.49,20.49a12,12,0,0,1-17,0l-18.08-18.08a44,44,0,1,1,17-17l18.08,18.07A12,12,0,0,1,240.49,200.49ZM184,164a20,20,0,1,0-20-20A20,20,0,0,0,184,164Z"/>
    </svg>
  );
}
