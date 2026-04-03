import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatDownThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuNywxMzQuNDdBNCw0LDAsMCwwLDIyNCwxMzJIMTgwVjQ4YTEyLDEyLDAsMCwwLTEyLTEySDg4QTEyLDEyLDAsMCwwLDc2LDQ4djg0SDMyYTQsNCwwLDAsMC0yLjgzLDYuODNsOTYsOTZhNCw0LDAsMCwwLDUuNjYsMGw5Ni05NkE0LDQsMCwwLDAsMjI3LjcsMTM0LjQ3Wk0xMjgsMjI2LjM0LDQxLjY2LDE0MEg4MGE0LDQsMCwwLDAsNC00VjQ4YTQsNCwwLDAsMSw0LTRoODBhNCw0LDAsMCwxLDQsNHY4OGE0LDQsMCwwLDAsNCw0aDM4LjM0WiIvPjwvc3ZnPg==)
 */
export function PhArrowFatDownThinIcon(props: PhArrowFatDownThinIconProps) {
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
      <path d="M227.7,134.47A4,4,0,0,0,224,132H180V48a12,12,0,0,0-12-12H88A12,12,0,0,0,76,48v84H32a4,4,0,0,0-2.83,6.83l96,96a4,4,0,0,0,5.66,0l96-96A4,4,0,0,0,227.7,134.47ZM128,226.34,41.66,140H80a4,4,0,0,0,4-4V48a4,4,0,0,1,4-4h80a4,4,0,0,1,4,4v88a4,4,0,0,0,4,4h38.34Z"/>
    </svg>
  );
}
