import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPlayCircleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTI4YTEyLDEyLDAsMCwxLTUuMTcsOS44N2wtNTIsMzZBMTIsMTIsMCwwLDEsMTAwLDE2NFY5MmExMiwxMiwwLDAsMSwxOC44My05Ljg3bDUyLDM2QTEyLDEyLDAsMCwxLDE3NiwxMjhabTYwLDBBMTA4LDEwOCwwLDEsMSwxMjgsMjAsMTA4LjEyLDEwOC4xMiwwLDAsMSwyMzYsMTI4Wm0tMjQsMGE4NCw4NCwwLDEsMC04NCw4NEE4NC4wOSw4NC4wOSwwLDAsMCwyMTIsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhPlayCircleBoldIcon(props: PhPlayCircleBoldIconProps) {
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
      <path d="M176,128a12,12,0,0,1-5.17,9.87l-52,36A12,12,0,0,1,100,164V92a12,12,0,0,1,18.83-9.87l52,36A12,12,0,0,1,176,128Zm60,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"/>
    </svg>
  );
}
