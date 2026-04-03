import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhJarFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDguODFWMzJhMTYsMTYsMCwwLDAtMTYtMTZIODhBMTYsMTYsMCwwLDAsNzIsMzJWNDguODFBNDAuMDUsNDAuMDUsMCwwLDAsNDAsODhWMjAwYTQwLDQwLDAsMCwwLDQwLDQwaDk2YTQwLDQwLDAsMCwwLDQwLTQwVjg4QTQwLjA1LDQwLjA1LDAsMCwwLDE4NCw0OC44MVpNMTIwLDQ4VjMyaDE2VjQ4Wm00OCwwSDE1MlYzMmgxNlpNMTA0LDMyVjQ4SDg4VjMyWiIvPjwvc3ZnPg==)
 */
export function PhJarFillIcon(props: PhJarFillIconProps) {
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
      <path d="M184,48.81V32a16,16,0,0,0-16-16H88A16,16,0,0,0,72,32V48.81A40.05,40.05,0,0,0,40,88V200a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V88A40.05,40.05,0,0,0,184,48.81ZM120,48V32h16V48Zm48,0H152V32h16ZM104,32V48H88V32Z"/>
    </svg>
  );
}
