import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMouseSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMTJIMTEyQTY4LjA3LDY4LjA3LDAsMCwwLDQ0LDgwdjk2YTY4LjA3LDY4LjA3LDAsMCwwLDY4LDY4aDMyYTY4LjA3LDY4LjA3LDAsMCwwLDY4LTY4VjgwQTY4LjA3LDY4LjA3LDAsMCwwLDE0NCwxMlptNDQsMTY0YTQ0LjA1LDQ0LjA1LDAsMCwxLTQ0LDQ0SDExMmE0NC4wNSw0NC4wNSwwLDAsMS00NC00NFY4MGE0NC4wNSw0NC4wNSwwLDAsMSw0NC00NGgzMmE0NC4wNSw0NC4wNSwwLDAsMSw0NCw0NFpNMTQwLDY0djQ4YTEyLDEyLDAsMCwxLTI0LDBWNjRhMTIsMTIsMCwwLDEsMjQsMFoiLz48L3N2Zz4=)
 */
export function PhMouseSimpleBoldIcon(props: PhMouseSimpleBoldIconProps) {
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
      <path d="M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,164a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44V80a44.05,44.05,0,0,1,44-44h32a44.05,44.05,0,0,1,44,44ZM140,64v48a12,12,0,0,1-24,0V64a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
