import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsThreeCircleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMywxMDQuMTMsMCwwLDAsMTI4LDI0Wk04NCwxNDBhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsODQsMTQwWm00NCwwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEyOCwxNDBabTQ0LDBhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTcyLDE0MFoiLz48L3N2Zz4=)
 */
export function PhDotsThreeCircleFillIcon(props: PhDotsThreeCircleFillIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z"/>
    </svg>
  );
}
