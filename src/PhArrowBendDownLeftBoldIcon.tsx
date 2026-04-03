import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendDownLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsNTZBMTA4LjEyLDEwOC4xMiwwLDAsMSwxMjgsMTY0SDYxbDI3LjUyLDI3LjUxYTEyLDEyLDAsMCwxLTE3LDE3bC00OC00OGExMiwxMiwwLDAsMSwwLTE3bDQ4LTQ4YTEyLDEyLDAsMCwxLDE3LDE3TDYxLDE0MGg2N2E4NC4wOSw4NC4wOSwwLDAsMCw4NC04NCwxMiwxMiwwLDAsMSwyNCwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowBendDownLeftBoldIcon(props: PhArrowBendDownLeftBoldIconProps) {
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
      <path d="M236,56A108.12,108.12,0,0,1,128,164H61l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,0,1,17,17L61,140h67a84.09,84.09,0,0,0,84-84,12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
