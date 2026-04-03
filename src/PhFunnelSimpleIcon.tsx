import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFunnelSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTM2YTgsOCwwLDAsMS04LDhINjRhOCw4LDAsMCwxLDAtMTZIMTkyQTgsOCwwLDAsMSwyMDAsMTM2Wm0zMi01NkgyNGE4LDgsMCwwLDAsMCwxNkgyMzJhOCw4LDAsMCwwLDAtMTZabS04MCw5NkgxMDRhOCw4LDAsMCwwLDAsMTZoNDhhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 */
export function PhFunnelSimpleIcon(props: PhFunnelSimpleIconProps) {
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
      <path d="M200,136a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H192A8,8,0,0,1,200,136Zm32-56H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-80,96H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
