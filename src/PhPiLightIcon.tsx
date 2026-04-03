import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPiLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMTcyYTM0LDM0LDAsMCwxLTY4LDBWNzBIOTRWMjAwYTYsNiwwLDAsMS0xMiwwVjcwSDcyYTQyLDQyLDAsMCwwLTQyLDQyLDYsNiwwLDAsMS0xMiwwQTU0LjA2LDU0LjA2LDAsMCwxLDcyLDU4SDIyNGE2LDYsMCwwLDEsMCwxMkgxNzRWMTcyYTIyLDIyLDAsMCwwLDQ0LDAsNiw2LDAsMCwxLDEyLDBaIi8+PC9zdmc+)
 */
export function PhPiLightIcon(props: PhPiLightIconProps) {
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
      <path d="M230,172a34,34,0,0,1-68,0V70H94V200a6,6,0,0,1-12,0V70H72a42,42,0,0,0-42,42,6,6,0,0,1-12,0A54.06,54.06,0,0,1,72,58H224a6,6,0,0,1,0,12H174V172a22,22,0,0,0,44,0,6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
