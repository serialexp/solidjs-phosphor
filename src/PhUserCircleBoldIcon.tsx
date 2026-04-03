import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUserCircleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWk03OS41NywxOTYuNTdhNjAsNjAsMCwwLDEsOTYuODYsMCw4My43Miw4My43MiwwLDAsMS05Ni44NiwwWk0xMDAsMTIwYTI4LDI4LDAsMSwxLDI4LDI4QTI4LDI4LDAsMCwxLDEwMCwxMjBaTTE5NCwxNzkuOTRhODMuNDgsODMuNDgsMCwwLDAtMjktMjMuNDIsNTIsNTIsMCwxLDAtNzQsMCw4My40OCw4My40OCwwLDAsMC0yOSwyMy40Miw4NCw4NCwwLDEsMSwxMzEuOSwwWiIvPjwvc3ZnPg==)
 */
export function PhUserCircleBoldIcon(props: PhUserCircleBoldIconProps) {
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
      <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20ZM79.57,196.57a60,60,0,0,1,96.86,0,83.72,83.72,0,0,1-96.86,0ZM100,120a28,28,0,1,1,28,28A28,28,0,0,1,100,120ZM194,179.94a83.48,83.48,0,0,0-29-23.42,52,52,0,1,0-74,0,83.48,83.48,0,0,0-29,23.42,84,84,0,1,1,131.9,0Z"/>
    </svg>
  );
}
