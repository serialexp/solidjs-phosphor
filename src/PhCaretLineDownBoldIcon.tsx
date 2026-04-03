import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLineDownBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zOS41MSw4MC40OWExMiwxMiwwLDAsMSwxNy0xN0wxMjgsMTM1bDcxLjUxLTcxLjUyYTEyLDEyLDAsMCwxLDE3LDE3bC04MCw4MGExMiwxMiwwLDAsMS0xNywwWk0yMDgsMTgwSDQ4YTEyLDEyLDAsMCwwLDAsMjRIMjA4YTEyLDEyLDAsMCwwLDAtMjRaIi8+PC9zdmc+)
 */
export function PhCaretLineDownBoldIcon(props: PhCaretLineDownBoldIconProps) {
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
      <path d="M39.51,80.49a12,12,0,0,1,17-17L128,135l71.51-71.52a12,12,0,0,1,17,17l-80,80a12,12,0,0,1-17,0ZM208,180H48a12,12,0,0,0,0,24H208a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
