import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPathIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTY4YTMyLjA2LDMyLjA2LDAsMCwwLTMxLDI0SDcyYTMyLDMyLDAsMCwxLDAtNjRoOTZhNDAsNDAsMCwwLDAsMC04MEg3MmE4LDgsMCwwLDAsMCwxNmg5NmEyNCwyNCwwLDAsMSwwLDQ4SDcyYTQ4LDQ4LDAsMCwwLDAsOTZoOTdhMzIsMzIsMCwxLDAsMzEtNDBabTAsNDhhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsMjAwLDIxNloiLz48L3N2Zz4=)
 */
export function PhPathIcon(props: PhPathIconProps) {
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
      <path d="M200,168a32.06,32.06,0,0,0-31,24H72a32,32,0,0,1,0-64h96a40,40,0,0,0,0-80H72a8,8,0,0,0,0,16h96a24,24,0,0,1,0,48H72a48,48,0,0,0,0,96h97a32,32,0,1,0,31-40Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,200,216Z"/>
    </svg>
  );
}
