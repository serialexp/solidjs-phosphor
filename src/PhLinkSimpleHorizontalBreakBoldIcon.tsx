import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLinkSimpleHorizontalBreakBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yOCwxMjhhMzYsMzYsMCwwLDAsMzYsMzZoNDBhMTIsMTIsMCwwLDEsMCwyNEg2NEE2MCw2MCwwLDAsMSw2NCw2OGg0MGExMiwxMiwwLDAsMSwwLDI0SDY0QTM2LDM2LDAsMCwwLDI4LDEyOFpNMTkyLDY4SDE1MmExMiwxMiwwLDAsMCwwLDI0aDQwYTM2LDM2LDAsMCwxLDAsNzJIMTUyYTEyLDEyLDAsMCwwLDAsMjRoNDBhNjAsNjAsMCwwLDAsMC0xMjBaIi8+PC9zdmc+)
 */
export function PhLinkSimpleHorizontalBreakBoldIcon(props: PhLinkSimpleHorizontalBreakBoldIconProps) {
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
      <path d="M28,128a36,36,0,0,0,36,36h40a12,12,0,0,1,0,24H64A60,60,0,0,1,64,68h40a12,12,0,0,1,0,24H64A36,36,0,0,0,28,128ZM192,68H152a12,12,0,0,0,0,24h40a36,36,0,0,1,0,72H152a12,12,0,0,0,0,24h40a60,60,0,0,0,0-120Z"/>
    </svg>
  );
}
