import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrendDownBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMTI4djY0YTEyLDEyLDAsMCwxLTEyLDEySDE2OGExMiwxMiwwLDAsMSwwLTI0aDM1bC02Ny02Ny0zMS41MSwzMS41MmExMiwxMiwwLDAsMS0xNywwbC03Mi03MmExMiwxMiwwLDAsMSwxNy0xN0w5NiwxMTlsMzEuNTEtMzEuNTJhMTIsMTIsMCwwLDEsMTcsMEwyMjAsMTYzVjEyOGExMiwxMiwwLDAsMSwyNCwwWiIvPjwvc3ZnPg==)
 */
export function PhTrendDownBoldIcon(props: PhTrendDownBoldIconProps) {
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
      <path d="M244,128v64a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h35l-67-67-31.51,31.52a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L96,119l31.51-31.52a12,12,0,0,1,17,0L220,163V128a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
