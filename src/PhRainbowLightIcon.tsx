import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRainbowLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODIsMTY4djE2YTYsNiwwLDAsMS0xMiwwVjE2OGE0Miw0MiwwLDAsMC04NCwwdjE2YTYsNiwwLDAsMS0xMiwwVjE2OGE1NCw1NCwwLDAsMSwxMDgsMFpNMTI4LDgyYTg2LjEsODYuMSwwLDAsMC04Niw4NnYxNmE2LDYsMCwwLDAsMTIsMFYxNjhhNzQsNzQsMCwwLDEsMTQ4LDB2MTZhNiw2LDAsMCwwLDEyLDBWMTY4QTg2LjEsODYuMSwwLDAsMCwxMjgsODJabTAtMzJBMTE4LjEzLDExOC4xMywwLDAsMCwxMCwxNjh2MTZhNiw2LDAsMCwwLDEyLDBWMTY4YTEwNiwxMDYsMCwwLDEsMjEyLDB2MTZhNiw2LDAsMCwwLDEyLDBWMTY4QTExOC4xMywxMTguMTMsMCwwLDAsMTI4LDUwWiIvPjwvc3ZnPg==)
 */
export function PhRainbowLightIcon(props: PhRainbowLightIconProps) {
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
      <path d="M182,168v16a6,6,0,0,1-12,0V168a42,42,0,0,0-84,0v16a6,6,0,0,1-12,0V168a54,54,0,0,1,108,0ZM128,82a86.1,86.1,0,0,0-86,86v16a6,6,0,0,0,12,0V168a74,74,0,0,1,148,0v16a6,6,0,0,0,12,0V168A86.1,86.1,0,0,0,128,82Zm0-32A118.13,118.13,0,0,0,10,168v16a6,6,0,0,0,12,0V168a106,106,0,0,1,212,0v16a6,6,0,0,0,12,0V168A118.13,118.13,0,0,0,128,50Z"/>
    </svg>
  );
}
