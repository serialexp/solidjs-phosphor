import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhListPlusThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNiw2NGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsMCw4SDQwQTQsNCwwLDAsMSwzNiw2NFptNCw2OEgyMTZhNCw0LDAsMCwwLDAtOEg0MGE0LDQsMCwwLDAsMCw4Wm0xMDQsNTZINDBhNCw0LDAsMCwwLDAsOEgxNDRhNCw0LDAsMCwwLDAtOFptODgsMEgyMTJWMTY4YTQsNCwwLDAsMC04LDB2MjBIMTg0YTQsNCwwLDAsMCwwLDhoMjB2MjBhNCw0LDAsMCwwLDgsMFYxOTZoMjBhNCw0LDAsMCwwLDAtOFoiLz48L3N2Zz4=)
 */
export function PhListPlusThinIcon(props: PhListPlusThinIconProps) {
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
      <path d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm104,56H40a4,4,0,0,0,0,8H144a4,4,0,0,0,0-8Zm88,0H212V168a4,4,0,0,0-8,0v20H184a4,4,0,0,0,0,8h20v20a4,4,0,0,0,8,0V196h20a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
