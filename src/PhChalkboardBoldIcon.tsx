import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChalkboardBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTg4aC00VjU2YTIwLDIwLDAsMCwwLTIwLTIwSDQwQTIwLDIwLDAsMCwwLDIwLDU2VjE4OEgxNmExMiwxMiwwLDAsMCwwLDI0SDI0MGExMiwxMiwwLDAsMCwwLTI0Wk00NCw2MEgyMTJWMTg4SDE5NlYxNjBhMTIsMTIsMCwwLDAtMTItMTJIMTIwYTEyLDEyLDAsMCwwLTEyLDEydjI4SDg0VjEwMGg4OHYyMGExMiwxMiwwLDAsMCwyNCwwVjg4YTEyLDEyLDAsMCwwLTEyLTEySDcyQTEyLDEyLDAsMCwwLDYwLDg4VjE4OEg0NFpNMTcyLDE4OEgxMzJWMTcyaDQwWiIvPjwvc3ZnPg==)
 */
export function PhChalkboardBoldIcon(props: PhChalkboardBoldIconProps) {
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
      <path d="M240,188h-4V56a20,20,0,0,0-20-20H40A20,20,0,0,0,20,56V188H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM44,60H212V188H196V160a12,12,0,0,0-12-12H120a12,12,0,0,0-12,12v28H84V100h88v20a12,12,0,0,0,24,0V88a12,12,0,0,0-12-12H72A12,12,0,0,0,60,88V188H44ZM172,188H132V172h40Z"/>
    </svg>
  );
}
