import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhProjectorScreenThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzZhMTIsMTIsMCwwLDAsMTItMTJWNDhhMTIsMTIsMCwwLDAtMTItMTJINDBBMTIsMTIsMCwwLDAsMjgsNDhWNjRBMTIsMTIsMCwwLDAsNDAsNzZoNFYxODBIMzJhNCw0LDAsMCwwLDAsOGg5MnYyNC40YTIwLDIwLDAsMSwwLDgsMFYxODhoOTJhNCw0LDAsMCwwLDAtOEgyMTJWNzZaTTE0MCwyMzJhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTQwLDIzMlpNMzYsNjRWNDhhNCw0LDAsMCwxLDQtNEgyMTZhNCw0LDAsMCwxLDQsNFY2NGE0LDQsMCwwLDEtNCw0SDQwQTQsNCwwLDAsMSwzNiw2NFpNMjA0LDE4MEg1MlY3NkgyMDRaIi8+PC9zdmc+)
 */
export function PhProjectorScreenThinIcon(props: PhProjectorScreenThinIconProps) {
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
      <path d="M216,76a12,12,0,0,0,12-12V48a12,12,0,0,0-12-12H40A12,12,0,0,0,28,48V64A12,12,0,0,0,40,76h4V180H32a4,4,0,0,0,0,8h92v24.4a20,20,0,1,0,8,0V188h92a4,4,0,0,0,0-8H212V76ZM140,232a12,12,0,1,1-12-12A12,12,0,0,1,140,232ZM36,64V48a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4V64a4,4,0,0,1-4,4H40A4,4,0,0,1,36,64ZM204,180H52V76H204Z"/>
    </svg>
  );
}
