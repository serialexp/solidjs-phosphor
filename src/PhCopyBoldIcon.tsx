import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCopyBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjhIODhBMTIsMTIsMCwwLDAsNzYsNDBWNzZINDBBMTIsMTIsMCwwLDAsMjgsODhWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDE2OGExMiwxMiwwLDAsMCwxMi0xMlYxODBoMzZhMTIsMTIsMCwwLDAsMTItMTJWNDBBMTIsMTIsMCwwLDAsMjE2LDI4Wk0xNTYsMjA0SDUyVjEwMEgxNTZabTQ4LTQ4SDE4MFY4OGExMiwxMiwwLDAsMC0xMi0xMkgxMDBWNTJIMjA0WiIvPjwvc3ZnPg==)
 */
export function PhCopyBoldIcon(props: PhCopyBoldIconProps) {
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
      <path d="M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"/>
    </svg>
  );
}
