import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCloudBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMzZBOTIuMDksOTIuMDksMCwwLDAsNzksODQuMzYsNjgsNjgsMCwxLDAsNzIsMjIwaDg4YTkyLDkyLDAsMCwwLDAtMTg0Wm0wLDE2MEg3MmE0NCw0NCwwLDAsMS0xLjgyLTg4QTkxLjg2LDkxLjg2LDAsMCwwLDY4LDEyOGExMiwxMiwwLDAsMCwyNCwwLDY4LDY4LDAsMSwxLDY4LDY4WiIvPjwvc3ZnPg==)
 */
export function PhCloudBoldIcon(props: PhCloudBoldIconProps) {
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
      <path d="M160,36A92.09,92.09,0,0,0,79,84.36,68,68,0,1,0,72,220h88a92,92,0,0,0,0-184Zm0,160H72a44,44,0,0,1-1.82-88A91.86,91.86,0,0,0,68,128a12,12,0,0,0,24,0,68,68,0,1,1,68,68Z"/>
    </svg>
  );
}
