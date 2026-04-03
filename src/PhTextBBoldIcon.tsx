import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextBBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODUuMDgsMTE0LjQ2QTQ4LDQ4LDAsMCwwLDE0OCwzNkg4MEExMiwxMiwwLDAsMCw2OCw0OFYyMDBhMTIsMTIsMCwwLDAsMTIsMTJoODBhNTIsNTIsMCwwLDAsMjUuMDgtOTcuNTRaTTkyLDYwaDU2YTI0LDI0LDAsMCwxLDAsNDhIOTJabTY4LDEyOEg5MlYxMzJoNjhhMjgsMjgsMCwwLDEsMCw1NloiLz48L3N2Zz4=)
 */
export function PhTextBBoldIcon(props: PhTextBBoldIconProps) {
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
      <path d="M185.08,114.46A48,48,0,0,0,148,36H80A12,12,0,0,0,68,48V200a12,12,0,0,0,12,12h80a52,52,0,0,0,25.08-97.54ZM92,60h56a24,24,0,0,1,0,48H92Zm68,128H92V132h68a28,28,0,0,1,0,56Z"/>
    </svg>
  );
}
