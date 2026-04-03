import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhInfoBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsODRhMTYsMTYsMCwxLDEsMTYsMTZBMTYsMTYsMCwwLDEsMTA4LDg0Wm0xMjgsNDRBMTA4LDEwOCwwLDEsMSwxMjgsMjAsMTA4LjEyLDEwOC4xMiwwLDAsMSwyMzYsMTI4Wm0tMjQsMGE4NCw4NCwwLDEsMC04NCw4NEE4NC4wOSw4NC4wOSwwLDAsMCwyMTIsMTI4Wm0tNzIsMzYuNjhWMTMyYTIwLDIwLDAsMCwwLTIwLTIwLDEyLDEyLDAsMCwwLTQsMjMuMzJWMTY4YTIwLDIwLDAsMCwwLDIwLDIwLDEyLDEyLDAsMCwwLDQtMjMuMzJaIi8+PC9zdmc+)
 */
export function PhInfoBoldIcon(props: PhInfoBoldIconProps) {
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
      <path d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"/>
    </svg>
  );
}
