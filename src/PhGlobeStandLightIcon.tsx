import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGlobeStandLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTgyYTc4LDc4LDAsMSwwLTc4LTc4QTc4LjA5LDc4LjA5LDAsMCwwLDEzNiwxODJabTAtMTQ0YTY2LDY2LDAsMSwxLTY2LDY2QTY2LjA4LDY2LjA4LDAsMCwxLDEzNiwzOFptNzYuMzMsMTM2Ljg5YTYsNiwwLDAsMS0uMTcsOC40OEExMDkuMjEsMTA5LjIxLDAsMCwxLDE0MiwyMTMuODNWMjM0aDI2YTYsNiwwLDAsMSwwLDEySDEwNGE2LDYsMCwwLDEsMC0xMmgyNlYyMTMuODNhMTEwLDExMCwwLDAsMS03My4zOC0xODYsNiw2LDAsMCwxLDguNjYsOC4zMkE5OCw5OCwwLDAsMCwyMDMuODQsMTc0LjcyLDYsNiwwLDAsMSwyMTIuMzMsMTc0Ljg5WiIvPjwvc3ZnPg==)
 */
export function PhGlobeStandLightIcon(props: PhGlobeStandLightIconProps) {
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
      <path d="M136,182a78,78,0,1,0-78-78A78.09,78.09,0,0,0,136,182Zm0-144a66,66,0,1,1-66,66A66.08,66.08,0,0,1,136,38Zm76.33,136.89a6,6,0,0,1-.17,8.48A109.21,109.21,0,0,1,142,213.83V234h26a6,6,0,0,1,0,12H104a6,6,0,0,1,0-12h26V213.83a110,110,0,0,1-73.38-186,6,6,0,0,1,8.66,8.32A98,98,0,0,0,203.84,174.72,6,6,0,0,1,212.33,174.89Z"/>
    </svg>
  );
}
