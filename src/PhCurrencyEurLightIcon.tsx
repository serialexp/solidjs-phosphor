import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyEurLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODguNDcsMTkzLjY2YTYsNiwwLDAsMS0uNDcsOC40OEE3OCw3OCwwLDAsMSw1OC4yNSwxNTBINDBhNiw2LDAsMCwxLDAtMTJINThWMTE4SDQwYTYsNiwwLDAsMSwwLTEySDU4LjI1QTc4LDc4LDAsMCwxLDE4OCw1My44NmE2LDYsMCwwLDEtOCw5QTY2LDY2LDAsMCwwLDcwLjI5LDEwNkgxMzZhNiw2LDAsMCwxLDAsMTJINzB2MjBoNTBhNiw2LDAsMCwxLDAsMTJINzAuMjlBNjYsNjYsMCwwLDAsMTgwLDE5My4yLDYsNiwwLDAsMSwxODguNDcsMTkzLjY2WiIvPjwvc3ZnPg==)
 */
export function PhCurrencyEurLightIcon(props: PhCurrencyEurLightIconProps) {
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
      <path d="M188.47,193.66a6,6,0,0,1-.47,8.48A78,78,0,0,1,58.25,150H40a6,6,0,0,1,0-12H58V118H40a6,6,0,0,1,0-12H58.25A78,78,0,0,1,188,53.86a6,6,0,0,1-8,9A66,66,0,0,0,70.29,106H136a6,6,0,0,1,0,12H70v20h50a6,6,0,0,1,0,12H70.29A66,66,0,0,0,180,193.2,6,6,0,0,1,188.47,193.66Z"/>
    </svg>
  );
}
