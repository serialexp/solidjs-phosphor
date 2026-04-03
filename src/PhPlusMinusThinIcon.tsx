import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPlusMinusThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDIuODMsNTguODNsLTE0NCwxNDRhNCw0LDAsMCwxLTUuNjYtNS42NmwxNDQtMTQ0YTQsNCwwLDEsMSw1LjY2LDUuNjZaTTY4LDExMmE0LDQsMCwwLDAsOCwwVjc2aDM2YTQsNCwwLDAsMCwwLThINzZWMzJhNCw0LDAsMCwwLTgsMFY2OEgzMmE0LDQsMCwwLDAsMCw4SDY4Wm0xNTYsNjhIMTQ0YTQsNCwwLDAsMCwwLDhoODBhNCw0LDAsMCwwLDAtOFoiLz48L3N2Zz4=)
 */
export function PhPlusMinusThinIcon(props: PhPlusMinusThinIconProps) {
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
      <path d="M202.83,58.83l-144,144a4,4,0,0,1-5.66-5.66l144-144a4,4,0,1,1,5.66,5.66ZM68,112a4,4,0,0,0,8,0V76h36a4,4,0,0,0,0-8H76V32a4,4,0,0,0-8,0V68H32a4,4,0,0,0,0,8H68Zm156,68H144a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
