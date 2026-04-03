import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPiThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTcyYTMyLDMyLDAsMCwxLTY0LDBWNjhIOTJWMjAwYTQsNCwwLDAsMS04LDBWNjhINzJhNDQuMDUsNDQuMDUsMCwwLDAtNDQsNDQsNCw0LDAsMCwxLTgsMEE1Mi4wNiw1Mi4wNiwwLDAsMSw3Miw2MEgyMjRhNCw0LDAsMCwxLDAsOEgxNzJWMTcyYTI0LDI0LDAsMCwwLDQ4LDAsNCw0LDAsMCwxLDgsMFoiLz48L3N2Zz4=)
 */
export function PhPiThinIcon(props: PhPiThinIconProps) {
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
      <path d="M228,172a32,32,0,0,1-64,0V68H92V200a4,4,0,0,1-8,0V68H72a44.05,44.05,0,0,0-44,44,4,4,0,0,1-8,0A52.06,52.06,0,0,1,72,60H224a4,4,0,0,1,0,8H172V172a24,24,0,0,0,48,0,4,4,0,0,1,8,0Z"/>
    </svg>
  );
}
