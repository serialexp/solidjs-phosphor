import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCirclesThreeFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTIwYTQ0LDQ0LDAsMSwxLDQ0LTQ0QTQ0LjA1LDQ0LjA1LDAsMCwxLDEyOCwxMjBabTYwLDhhNDQsNDQsMCwxLDAsNDQsNDRBNDQuMDUsNDQuMDUsMCwwLDAsMTg4LDEyOFpNNjgsMTI4YTQ0LDQ0LDAsMSwwLDQ0LDQ0QTQ0LjA1LDQ0LjA1LDAsMCwwLDY4LDEyOFoiLz48L3N2Zz4=)
 */
export function PhCirclesThreeFillIcon(props: PhCirclesThreeFillIconProps) {
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
      <path d="M128,120a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,120Zm60,8a44,44,0,1,0,44,44A44.05,44.05,0,0,0,188,128ZM68,128a44,44,0,1,0,44,44A44.05,44.05,0,0,0,68,128Z"/>
    </svg>
  );
}
