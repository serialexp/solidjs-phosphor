import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFadersHorizontalFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsODBhOCw4LDAsMCwxLDgtOGgyNGE4LDgsMCwwLDEsMCwxNkgxOTJBOCw4LDAsMCwxLDE4NCw4MFpNNDAsODhoOTZ2MTZhOCw4LDAsMCwwLDgsOGgxNmE4LDgsMCwwLDAsOC04VjU2YTgsOCwwLDAsMC04LThIMTQ0YTgsOCwwLDAsMC04LDhWNzJINDBhOCw4LDAsMCwwLDAsMTZabTE3Niw4MEgxMjhhOCw4LDAsMCwwLDAsMTZoODhhOCw4LDAsMCwwLDAtMTZaTTk2LDE0NEg4MGE4LDgsMCwwLDAtOCw4djE2SDQwYTgsOCwwLDAsMCwwLDE2SDcydjE2YTgsOCwwLDAsMCw4LDhIOTZhOCw4LDAsMCwwLDgtOFYxNTJBOCw4LDAsMCwwLDk2LDE0NFoiLz48L3N2Zz4=)
 */
export function PhFadersHorizontalFillIcon(props: PhFadersHorizontalFillIconProps) {
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
      <path d="M184,80a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H192A8,8,0,0,1,184,80ZM40,88h96v16a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H144a8,8,0,0,0-8,8V72H40a8,8,0,0,0,0,16Zm176,80H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM96,144H80a8,8,0,0,0-8,8v16H40a8,8,0,0,0,0,16H72v16a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V152A8,8,0,0,0,96,144Z"/>
    </svg>
  );
}
