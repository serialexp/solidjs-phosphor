import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBookBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjBINzJBMzYsMzYsMCwwLDAsMzYsNTZWMjI0YTEyLDEyLDAsMCwwLDEyLDEySDE5MmExMiwxMiwwLDAsMCwwLTI0SDYwdi00YTEyLDEyLDAsMCwxLDEyLTEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlYzMkExMiwxMiwwLDAsMCwyMDgsMjBaTTE5NiwxNzJINzJhMzUuNTksMzUuNTksMCwwLDAtMTIsMi4wNlY1NkExMiwxMiwwLDAsMSw3Miw0NEgxOTZaIi8+PC9zdmc+)
 */
export function PhBookBoldIcon(props: PhBookBoldIconProps) {
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
      <path d="M208,20H72A36,36,0,0,0,36,56V224a12,12,0,0,0,12,12H192a12,12,0,0,0,0-24H60v-4a12,12,0,0,1,12-12H208a12,12,0,0,0,12-12V32A12,12,0,0,0,208,20ZM196,172H72a35.59,35.59,0,0,0-12,2.06V56A12,12,0,0,1,72,44H196Z"/>
    </svg>
  );
}
