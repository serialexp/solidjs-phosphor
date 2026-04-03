import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPercentLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQuMjQsNjAuMjNsLTE0NCwxNDRhNiw2LDAsMCwxLTguNDgtOC40OGwxNDQtMTQ0YTYsNiwwLDEsMSw4LjQ4LDguNDlaTTUyLDEwMEEzNCwzNCwwLDEsMSw3NiwxMTAsMzMuNzgsMzMuNzgsMCwwLDEsNTIsMTAwWm0yLTI0YTIyLDIyLDAsMSwwLDYuNDQtMTUuNTZBMjEuODYsMjEuODYsMCwwLDAsNTQsNzZaTTIxNCwxODBBMzQsMzQsMCwxLDEsMjA0LDE1NiwzMy43OCwzMy43OCwwLDAsMSwyMTQsMTgwWm0tMTIsMGEyMS44NywyMS44NywwLDAsMC02LjQ0LTE1LjU2aDBBMjIsMjIsMCwxLDAsMjAyLDE4MFoiLz48L3N2Zz4=)
 */
export function PhPercentLightIcon(props: PhPercentLightIconProps) {
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
      <path d="M204.24,60.23l-144,144a6,6,0,0,1-8.48-8.48l144-144a6,6,0,1,1,8.48,8.49ZM52,100A34,34,0,1,1,76,110,33.78,33.78,0,0,1,52,100Zm2-24a22,22,0,1,0,6.44-15.56A21.86,21.86,0,0,0,54,76ZM214,180A34,34,0,1,1,204,156,33.78,33.78,0,0,1,214,180Zm-12,0a21.87,21.87,0,0,0-6.44-15.56h0A22,22,0,1,0,202,180Z"/>
    </svg>
  );
}
