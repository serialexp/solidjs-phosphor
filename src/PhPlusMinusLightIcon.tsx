import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPlusMinusLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQuMjQsNjAuMjRsLTE0NCwxNDRhNiw2LDAsMCwxLTguNDgtOC40OGwxNDQtMTQ0YTYsNiwwLDAsMSw4LjQ4LDguNDhaTTY2LDExMmE2LDYsMCwwLDAsMTIsMFY3OGgzNGE2LDYsMCwwLDAsMC0xMkg3OFYzMmE2LDYsMCwwLDAtMTIsMFY2NkgzMmE2LDYsMCwwLDAsMCwxMkg2NlptMTU4LDY2SDE0NGE2LDYsMCwwLDAsMCwxMmg4MGE2LDYsMCwwLDAsMC0xMloiLz48L3N2Zz4=)
 */
export function PhPlusMinusLightIcon(props: PhPlusMinusLightIconProps) {
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
      <path d="M204.24,60.24l-144,144a6,6,0,0,1-8.48-8.48l144-144a6,6,0,0,1,8.48,8.48ZM66,112a6,6,0,0,0,12,0V78h34a6,6,0,0,0,0-12H78V32a6,6,0,0,0-12,0V66H32a6,6,0,0,0,0,12H66Zm158,66H144a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
