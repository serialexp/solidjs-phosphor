import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrashSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTBINDBhNiw2LDAsMCwwLDAsMTJINTBWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDE5MmExNCwxNCwwLDAsMCwxNC0xNFY2MmgxMGE2LDYsMCwwLDAsMC0xMlpNMTk0LDIwOGEyLDIsMCwwLDEtMiwySDY0YTIsMiwwLDAsMS0yLTJWNjJIMTk0Wk04MiwyNGE2LDYsMCwwLDEsNi02aDgwYTYsNiwwLDAsMSwwLDEySDg4QTYsNiwwLDAsMSw4MiwyNFoiLz48L3N2Zz4=)
 */
export function PhTrashSimpleLightIcon(props: PhTrashSimpleLightIconProps) {
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
      <path d="M216,50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM82,24a6,6,0,0,1,6-6h80a6,6,0,0,1,0,12H88A6,6,0,0,1,82,24Z"/>
    </svg>
  );
}
