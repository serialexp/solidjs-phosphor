import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrolleyThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NCwyMjRhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsODQsMjI0Wm0xMzItMTJhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMjE2LDIxMlptMjQtMzJINTJWNzUuMzFhMTIsMTIsMCwwLDAtMy41MS04LjQ4TDI2LjgzLDQ1LjE3YTQsNCwwLDAsMC01LjY2LDUuNjZMNDIuODMsNzIuNDhBNCw0LDAsMCwxLDQ0LDc1LjMxVjE4MEgzMmE0LDQsMCwwLDAsMCw4SDI0MGE0LDQsMCwwLDAsMC04WiIvPjwvc3ZnPg==)
 */
export function PhTrolleyThinIcon(props: PhTrolleyThinIconProps) {
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
      <path d="M84,224a12,12,0,1,1-12-12A12,12,0,0,1,84,224Zm132-12a12,12,0,1,0,12,12A12,12,0,0,0,216,212Zm24-32H52V75.31a12,12,0,0,0-3.51-8.48L26.83,45.17a4,4,0,0,0-5.66,5.66L42.83,72.48A4,4,0,0,1,44,75.31V180H32a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
