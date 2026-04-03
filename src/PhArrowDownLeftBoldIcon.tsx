import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowDownLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAuNDksNzIuNDgsOTMsMTgwaDc1YTEyLDEyLDAsMCwxLDAsMjRINjRhMTIsMTIsMCwwLDEtMTItMTJWODhhMTIsMTIsMCwwLDEsMjQsMHY3NUwxODMuNTEsNTUuNTFhMTIsMTIsMCwwLDEsMTcsMTdaIi8+PC9zdmc+)
 */
export function PhArrowDownLeftBoldIcon(props: PhArrowDownLeftBoldIconProps) {
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
      <path d="M200.49,72.48,93,180h75a12,12,0,0,1,0,24H64a12,12,0,0,1-12-12V88a12,12,0,0,1,24,0v75L183.51,55.51a12,12,0,0,1,17,17Z"/>
    </svg>
  );
}
