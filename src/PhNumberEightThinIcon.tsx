import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberEightThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDcuMDgsMTE5LjY0YTQ0LDQ0LDAsMSwwLTM4LjE2LDAsNTIsNTIsMCwxLDAsMzguMTYsMFpNOTIsODBhMzYsMzYsMCwxLDEsMzYsMzZBMzYsMzYsMCwwLDEsOTIsODBabTM2LDEzMmE0NCw0NCwwLDEsMSw0NC00NEE0NC4wNSw0NC4wNSwwLDAsMSwxMjgsMjEyWiIvPjwvc3ZnPg==)
 */
export function PhNumberEightThinIcon(props: PhNumberEightThinIconProps) {
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
      <path d="M147.08,119.64a44,44,0,1,0-38.16,0,52,52,0,1,0,38.16,0ZM92,80a36,36,0,1,1,36,36A36,36,0,0,1,92,80Zm36,132a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,212Z"/>
    </svg>
  );
}
