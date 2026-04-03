import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMicrophoneBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTgwYTUyLjA2LDUyLjA2LDAsMCwwLDUyLTUyVjY0QTUyLDUyLDAsMCwwLDc2LDY0djY0QTUyLjA2LDUyLjA2LDAsMCwwLDEyOCwxODBaTTEwMCw2NGEyOCwyOCwwLDAsMSw1NiwwdjY0YTI4LDI4LDAsMCwxLTU2LDBabTQwLDE1NS4yMlYyNDBhMTIsMTIsMCwwLDEtMjQsMFYyMTkuMjJBOTIuMTQsOTIuMTQsMCwwLDEsMzYsMTI4YTEyLDEyLDAsMCwxLDI0LDAsNjgsNjgsMCwwLDAsMTM2LDAsMTIsMTIsMCwwLDEsMjQsMEE5Mi4xNCw5Mi4xNCwwLDAsMSwxNDAsMjE5LjIyWiIvPjwvc3ZnPg==)
 */
export function PhMicrophoneBoldIcon(props: PhMicrophoneBoldIconProps) {
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
      <path d="M128,180a52.06,52.06,0,0,0,52-52V64A52,52,0,0,0,76,64v64A52.06,52.06,0,0,0,128,180ZM100,64a28,28,0,0,1,56,0v64a28,28,0,0,1-56,0Zm40,155.22V240a12,12,0,0,1-24,0V219.22A92.14,92.14,0,0,1,36,128a12,12,0,0,1,24,0,68,68,0,0,0,136,0,12,12,0,0,1,24,0A92.14,92.14,0,0,1,140,219.22Z"/>
    </svg>
  );
}
