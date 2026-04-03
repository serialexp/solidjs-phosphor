import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowArcRightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsODh2NjRhMTIsMTIsMCwwLDEtMTIsMTJIMTY4YTEyLDEyLDAsMCwxLDAtMjRoMzQuOWwtMTUuNDgtMTUuMzdBODQsODQsMCwwLDAsNDQsMTg0YTEyLDEyLDAsMCwxLTI0LDAsMTA4LDEwOCwwLDAsMSwxODQuMzctNzYuMzdMMjIwLDEyMy4xNlY4OGExMiwxMiwwLDAsMSwyNCwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowArcRightBoldIcon(props: PhArrowArcRightBoldIconProps) {
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
      <path d="M244,88v64a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h34.9l-15.48-15.37A84,84,0,0,0,44,184a12,12,0,0,1-24,0,108,108,0,0,1,184.37-76.37L220,123.16V88a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
