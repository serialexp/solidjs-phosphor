import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSignOutBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjQsMjE2YTEyLDEyLDAsMCwxLTEyLDEySDQ4YTEyLDEyLDAsMCwxLTEyLTEyVjQwQTEyLDEyLDAsMCwxLDQ4LDI4aDY0YTEyLDEyLDAsMCwxLDAsMjRINjBWMjA0aDUyQTEyLDEyLDAsMCwxLDEyNCwyMTZabTEwOC40OS05Ni40OS00MC00MGExMiwxMiwwLDAsMC0xNywxN0wxOTUsMTE2SDExMmExMiwxMiwwLDAsMCwwLDI0aDgzbC0xOS41MiwxOS41MWExMiwxMiwwLDAsMCwxNywxN2w0MC00MEExMiwxMiwwLDAsMCwyMzIuNDksMTE5LjUxWiIvPjwvc3ZnPg==)
 */
export function PhSignOutBoldIcon(props: PhSignOutBoldIconProps) {
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
      <path d="M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z"/>
    </svg>
  );
}
