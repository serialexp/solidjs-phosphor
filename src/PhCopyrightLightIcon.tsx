import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCopyrightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFpNOTQsMTI4YTM0LDM0LDAsMCwwLDYxLjIsMjAuNCw2LDYsMCwwLDEsOS42LDcuMjEsNDYsNDYsMCwxLDEsMC01NS4yMiw2LDYsMCwwLDEtOS42LDcuMjFBMzQsMzQsMCwwLDAsOTQsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhCopyrightLightIcon(props: PhCopyrightLightIconProps) {
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
      <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM94,128a34,34,0,0,0,61.2,20.4,6,6,0,0,1,9.6,7.21,46,46,0,1,1,0-55.22,6,6,0,0,1-9.6,7.21A34,34,0,0,0,94,128Z"/>
    </svg>
  );
}
