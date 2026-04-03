import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignLeftSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNiw1NlYyMDBhNCw0LDAsMCwxLTgsMFY1NmE0LDQsMCwwLDEsOCwwWk0yMzYsOTZ2NjRhMTIsMTIsMCwwLDEtMTIsMTJINzJhMTIsMTIsMCwwLDEtMTItMTJWOTZBMTIsMTIsMCwwLDEsNzIsODRIMjI0QTEyLDEyLDAsMCwxLDIzNiw5NlptLTgsMGE0LDQsMCwwLDAtNC00SDcyYTQsNCwwLDAsMC00LDR2NjRhNCw0LDAsMCwwLDQsNEgyMjRhNCw0LDAsMCwwLDQtNFoiLz48L3N2Zz4=)
 */
export function PhAlignLeftSimpleThinIcon(props: PhAlignLeftSimpleThinIconProps) {
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
      <path d="M36,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0ZM236,96v64a12,12,0,0,1-12,12H72a12,12,0,0,1-12-12V96A12,12,0,0,1,72,84H224A12,12,0,0,1,236,96Zm-8,0a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4Z"/>
    </svg>
  );
}
