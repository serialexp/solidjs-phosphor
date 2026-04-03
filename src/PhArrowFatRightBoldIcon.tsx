import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatRightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNDksMTE5LjUxbC05Ni05NkExMiwxMiwwLDAsMCwxMjQsMzJWNjhINDhBMjAsMjAsMCwwLDAsMjgsODh2ODBhMjAsMjAsMCwwLDAsMjAsMjBoNzZ2MzZhMTIsMTIsMCwwLDAsMjAuNDksOC40OWw5Ni05NkExMiwxMiwwLDAsMCwyNDAuNDksMTE5LjUxWk0xNDgsMTk1VjE3NmExMiwxMiwwLDAsMC0xMi0xMkg1MlY5Mmg4NGExMiwxMiwwLDAsMCwxMi0xMlY2MWw2Nyw2N1oiLz48L3N2Zz4=)
 */
export function PhArrowFatRightBoldIcon(props: PhArrowFatRightBoldIconProps) {
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
      <path d="M240.49,119.51l-96-96A12,12,0,0,0,124,32V68H48A20,20,0,0,0,28,88v80a20,20,0,0,0,20,20h76v36a12,12,0,0,0,20.49,8.49l96-96A12,12,0,0,0,240.49,119.51ZM148,195V176a12,12,0,0,0-12-12H52V92h84a12,12,0,0,0,12-12V61l67,67Z"/>
    </svg>
  );
}
