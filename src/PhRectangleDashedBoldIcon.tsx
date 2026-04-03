import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRectangleDashedBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NCw0OEExMiwxMiwwLDAsMSw3Miw2MEg0NFY3MmExMiwxMiwwLDAsMS0yNCwwVjU2QTIwLDIwLDAsMCwxLDQwLDM2SDcyQTEyLDEyLDAsMCwxLDg0LDQ4Wk0zMiwxNTZhMTIsMTIsMCwwLDAsMTItMTJWMTEyYTEyLDEyLDAsMCwwLTI0LDB2MzJBMTIsMTIsMCwwLDAsMzIsMTU2Wm00MCw0MEg0NFYxODRhMTIsMTIsMCwwLDAtMjQsMHYxNmEyMCwyMCwwLDAsMCwyMCwyMEg3MmExMiwxMiwwLDAsMCwwLTI0Wm03MiwwSDExMmExMiwxMiwwLDAsMCwwLDI0aDMyYTEyLDEyLDAsMCwwLDAtMjRabTgwLTI0YTEyLDEyLDAsMCwwLTEyLDEydjEySDE4NGExMiwxMiwwLDAsMCwwLDI0aDMyYTIwLDIwLDAsMCwwLDIwLTIwVjE4NEExMiwxMiwwLDAsMCwyMjQsMTcyWm0wLTcyYTEyLDEyLDAsMCwwLTEyLDEydjMyYTEyLDEyLDAsMCwwLDI0LDBWMTEyQTEyLDEyLDAsMCwwLDIyNCwxMDBabS04LTY0SDE4NGExMiwxMiwwLDAsMCwwLDI0aDI4VjcyYTEyLDEyLDAsMCwwLDI0LDBWNTZBMjAsMjAsMCwwLDAsMjE2LDM2Wm0tNzIsMEgxMTJhMTIsMTIsMCwwLDAsMCwyNGgzMmExMiwxMiwwLDAsMCwwLTI0WiIvPjwvc3ZnPg==)
 */
export function PhRectangleDashedBoldIcon(props: PhRectangleDashedBoldIconProps) {
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
      <path d="M84,48A12,12,0,0,1,72,60H44V72a12,12,0,0,1-24,0V56A20,20,0,0,1,40,36H72A12,12,0,0,1,84,48ZM32,156a12,12,0,0,0,12-12V112a12,12,0,0,0-24,0v32A12,12,0,0,0,32,156Zm40,40H44V184a12,12,0,0,0-24,0v16a20,20,0,0,0,20,20H72a12,12,0,0,0,0-24Zm72,0H112a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm80-24a12,12,0,0,0-12,12v12H184a12,12,0,0,0,0,24h32a20,20,0,0,0,20-20V184A12,12,0,0,0,224,172Zm0-72a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,224,100Zm-8-64H184a12,12,0,0,0,0,24h28V72a12,12,0,0,0,24,0V56A20,20,0,0,0,216,36Zm-72,0H112a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
