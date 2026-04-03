import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotionLogoBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZIMTc2YTEyLDEyLDAsMCwwLDAsMjRoOFYxNjEuMjhMMTE4LjUxLDQyLjIyQTEyLDEyLDAsMCwwLDEwOCwzNkg0MGExMiwxMiwwLDAsMCwwLDI0aDhWMTk2SDQwYTEyLDEyLDAsMCwwLDAsMjRIODBhMTIsMTIsMCwwLDAsMC0yNEg3MlY5NC43Mmw2NS40OSwxMTkuMDZBMTIsMTIsMCwwLDAsMTQ4LDIyMGg0OGExMiwxMiwwLDAsMCwxMi0xMlY2MGg4YTEyLDEyLDAsMCwwLDAtMjRaTTgwLjMsNjBoMjAuNmw3NC44LDEzNkgxNTUuMVoiLz48L3N2Zz4=)
 */
export function PhNotionLogoBoldIcon(props: PhNotionLogoBoldIconProps) {
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
      <path d="M216,36H176a12,12,0,0,0,0,24h8V161.28L118.51,42.22A12,12,0,0,0,108,36H40a12,12,0,0,0,0,24h8V196H40a12,12,0,0,0,0,24H80a12,12,0,0,0,0-24H72V94.72l65.49,119.06A12,12,0,0,0,148,220h48a12,12,0,0,0,12-12V60h8a12,12,0,0,0,0-24ZM80.3,60h20.6l74.8,136H155.1Z"/>
    </svg>
  );
}
