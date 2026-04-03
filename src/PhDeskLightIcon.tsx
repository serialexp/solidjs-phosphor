import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeskLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsNjZIOEE2LDYsMCwwLDAsOCw3OEgxOFYxOTJhNiw2LDAsMCwwLDEyLDBWMTQySDIyNnY1MGE2LDYsMCwwLDAsMTIsMFY3OGgxMGE2LDYsMCwwLDAsMC0xMlpNMzAsNzhoOTJ2NTJIMzBabTE5Niw1MkgxMzRWNzhoOTJaTTk0LDEwNGE2LDYsMCwwLDEtNiw2SDY0YTYsNiwwLDAsMSwwLTEySDg4QTYsNiwwLDAsMSw5NCwxMDRabTY4LDBhNiw2LDAsMCwxLDYtNmgyNGE2LDYsMCwwLDEsMCwxMkgxNjhBNiw2LDAsMCwxLDE2MiwxMDRaIi8+PC9zdmc+)
 */
export function PhDeskLightIcon(props: PhDeskLightIconProps) {
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
      <path d="M248,66H8A6,6,0,0,0,8,78H18V192a6,6,0,0,0,12,0V142H226v50a6,6,0,0,0,12,0V78h10a6,6,0,0,0,0-12ZM30,78h92v52H30Zm196,52H134V78h92ZM94,104a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H88A6,6,0,0,1,94,104Zm68,0a6,6,0,0,1,6-6h24a6,6,0,0,1,0,12H168A6,6,0,0,1,162,104Z"/>
    </svg>
  );
}
