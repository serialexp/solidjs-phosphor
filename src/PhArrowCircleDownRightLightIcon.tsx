import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowCircleDownRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFptMzgtMTA2djQ4YTYsNiwwLDAsMS02LDZIMTEyYTYsNiwwLDAsMSwwLTEyaDMzLjUxTDkxLjc2LDEwMC4yNGE2LDYsMCwwLDEsOC40OC04LjQ4TDE1NCwxNDUuNTFWMTEyYTYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowCircleDownRightLightIcon(props: PhArrowCircleDownRightLightIconProps) {
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
      <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm38-106v48a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h33.51L91.76,100.24a6,6,0,0,1,8.48-8.48L154,145.51V112a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
