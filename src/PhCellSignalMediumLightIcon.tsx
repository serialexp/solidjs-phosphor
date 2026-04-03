import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCellSignalMediumLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjYsMTEydjg4YTYsNiwwLDAsMS0xMiwwVjExMmE2LDYsMCwwLDEsMTIsMFpNODAsMTQ2YTYsNiwwLDAsMC02LDZ2NDhhNiw2LDAsMCwwLDEyLDBWMTUyQTYsNiwwLDAsMCw4MCwxNDZaTTQwLDE4NmE2LDYsMCwwLDAtNiw2djhhNiw2LDAsMCwwLDEyLDB2LThBNiw2LDAsMCwwLDQwLDE4NloiLz48L3N2Zz4=)
 */
export function PhCellSignalMediumLightIcon(props: PhCellSignalMediumLightIconProps) {
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
      <path d="M126,112v88a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0ZM80,146a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V152A6,6,0,0,0,80,146ZM40,186a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,40,186Z"/>
    </svg>
  );
}
