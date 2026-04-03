import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWallBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDRIMzJBMTIsMTIsMCwwLDAsMjAsNTZWMjAwYTEyLDEyLDAsMCwwLDEyLDEySDIyNGExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMjQsNDRaTTkyLDE0MFYxMTZoNzJ2MjRabS00OCwwVjExNkg2OHYyNFptMTQ0LTI0aDI0djI0SDE4OFptMjQtMjRIMTQwVjY4aDcyWk0xMTYsNjhWOTJINDRWNjhaTTQ0LDE2NGg3MnYyNEg0NFptOTYsMjRWMTY0aDcydjI0WiIvPjwvc3ZnPg==)
 */
export function PhWallBoldIcon(props: PhWallBoldIconProps) {
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
      <path d="M224,44H32A12,12,0,0,0,20,56V200a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V56A12,12,0,0,0,224,44ZM92,140V116h72v24Zm-48,0V116H68v24Zm144-24h24v24H188Zm24-24H140V68h72ZM116,68V92H44V68ZM44,164h72v24H44Zm96,24V164h72v24Z"/>
    </svg>
  );
}
