import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhScreencastBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjBWMTk2YTIwLDIwLDAsMCwxLTIwLDIwSDE3MmExMiwxMiwwLDAsMSwwLTI0aDM2VjY0SDQ4djRhMTIsMTIsMCwwLDEtMjQsMFY2MEEyMCwyMCwwLDAsMSw0NCw0MEgyMTJBMjAsMjAsMCwwLDEsMjMyLDYwWk0zNiwxNzZhMTIsMTIsMCwwLDAsMCwyNCw0LDQsMCwwLDEsNCw0LDEyLDEyLDAsMCwwLDI0LDBBMjgsMjgsMCwwLDAsMzYsMTc2Wm0wLTQwYTEyLDEyLDAsMCwwLDAsMjQsNDQuMDUsNDQuMDUsMCwwLDEsNDQsNDQsMTIsMTIsMCwwLDAsMjQsMEE2OC4wNyw2OC4wNywwLDAsMCwzNiwxMzZabTAtNDBhMTIsMTIsMCwwLDAsMCwyNCw4NC4wOSw4NC4wOSwwLDAsMSw4NCw4NCwxMiwxMiwwLDAsMCwyNCwwQTEwOC4xMiwxMDguMTIsMCwwLDAsMzYsOTZaIi8+PC9zdmc+)
 */
export function PhScreencastBoldIcon(props: PhScreencastBoldIconProps) {
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
      <path d="M232,60V196a20,20,0,0,1-20,20H172a12,12,0,0,1,0-24h36V64H48v4a12,12,0,0,1-24,0V60A20,20,0,0,1,44,40H212A20,20,0,0,1,232,60ZM36,176a12,12,0,0,0,0,24,4,4,0,0,1,4,4,12,12,0,0,0,24,0A28,28,0,0,0,36,176Zm0-40a12,12,0,0,0,0,24,44.05,44.05,0,0,1,44,44,12,12,0,0,0,24,0A68.07,68.07,0,0,0,36,136Zm0-40a12,12,0,0,0,0,24,84.09,84.09,0,0,1,84,84,12,12,0,0,0,24,0A108.12,108.12,0,0,0,36,96Z"/>
    </svg>
  );
}
