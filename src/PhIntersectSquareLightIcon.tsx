import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhIntersectSquareLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsOTBIMTY2VjQwYTYsNiwwLDAsMC02LTZINDBhNiw2LDAsMCwwLTYsNlYxNjBhNiw2LDAsMCwwLDYsNkg5MHY1MGE2LDYsMCwwLDAsNiw2SDIxNmE2LDYsMCwwLDAsNi02Vjk2QTYsNiwwLDAsMCwyMTYsOTBaTTQ2LDE1NFY0NkgxNTRWOTBIOTZhNiw2LDAsMCwwLTYsNnY1OFptNTYtNDMuNTJMMTQ1LjUyLDE1NEgxMDJabTUyLDM1TDExMC40OCwxMDJIMTU0Wk0yMTAsMjEwSDEwMlYxNjZoNThhNiw2LDAsMCwwLDYtNlYxMDJoNDRaIi8+PC9zdmc+)
 */
export function PhIntersectSquareLightIcon(props: PhIntersectSquareLightIconProps) {
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
      <path d="M216,90H166V40a6,6,0,0,0-6-6H40a6,6,0,0,0-6,6V160a6,6,0,0,0,6,6H90v50a6,6,0,0,0,6,6H216a6,6,0,0,0,6-6V96A6,6,0,0,0,216,90ZM46,154V46H154V90H96a6,6,0,0,0-6,6v58Zm56-43.52L145.52,154H102Zm52,35L110.48,102H154ZM210,210H102V166h58a6,6,0,0,0,6-6V102h44Z"/>
    </svg>
  );
}
