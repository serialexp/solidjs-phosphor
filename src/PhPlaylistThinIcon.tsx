import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPlaylistThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNiw2NGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsMCw4SDQwQTQsNCwwLDAsMSwzNiw2NFptNCw2OEgxNjBhNCw0LDAsMCwwLDAtOEg0MGE0LDQsMCwwLDAsMCw4Wm03Miw1Nkg0MGE0LDQsMCwwLDAsMCw4aDcyYTQsNCwwLDAsMCwwLThabTEzMS44My02Mi44NWE0LDQsMCwwLDEtNSwyLjY4TDIwNCwxMTcuMzhWMTkyYTI4LDI4LDAsMSwxLTgtMTkuNTdWMTEyYTQsNCwwLDAsMSw1LjE1LTMuODNsNDAsMTJBNCw0LDAsMCwxLDI0My44MywxMjUuMTVaTTE5NiwxOTJhMjAsMjAsMCwxLDAtMjAsMjBBMjAsMjAsMCwwLDAsMTk2LDE5MloiLz48L3N2Zz4=)
 */
export function PhPlaylistThinIcon(props: PhPlaylistThinIconProps) {
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
      <path d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,68H160a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm72,56H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm131.83-62.85a4,4,0,0,1-5,2.68L204,117.38V192a28,28,0,1,1-8-19.57V112a4,4,0,0,1,5.15-3.83l40,12A4,4,0,0,1,243.83,125.15ZM196,192a20,20,0,1,0-20,20A20,20,0,0,0,196,192Z"/>
    </svg>
  );
}
