import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhIntersectDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsOTZhNzIsNzIsMCwwLDEtNzIsNzIsNzMuMzcsNzMuMzcsMCwwLDEtNy42LS40QTczLjM3LDczLjM3LDAsMCwxLDg4LDE2MGE3Miw3MiwwLDAsMSw3Mi03Miw3My4zNyw3My4zNywwLDAsMSw3LjYuNEE3My4zNyw3My4zNywwLDAsMSwxNjgsOTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTc0LjYzLDgxLjM3YTgwLDgwLDAsMSwwLTkzLjI2LDkzLjI2LDgwLDgwLDAsMSwwLDkzLjI2LTkzLjI2Wk0zMiw5NmE2NCw2NCwwLDAsMSwxMjYtMTZBODAuMDgsODAuMDgsMCwwLDAsODAuMDUsMTU4LDY0LjExLDY0LjExLDAsMCwxLDMyLDk2Wm0xMjgsMGE2NC4wNyw2NC4wNywwLDAsMS02NCw2NEE2NC4wNyw2NC4wNywwLDAsMSwxNjAsOTZabTAsMTI4QTY0LjExLDY0LjExLDAsMCwxLDk4LDE3Niw4MC4wOCw4MC4wOCwwLDAsMCwxNzYsOTgsNjQsNjQsMCwwLDEsMTYwLDIyNFoiLz48L3N2Zz4=)
 */
export function PhIntersectDuotoneIcon(props: PhIntersectDuotoneIconProps) {
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
      <path d="M168,96a72,72,0,0,1-72,72,73.37,73.37,0,0,1-7.6-.4A73.37,73.37,0,0,1,88,160a72,72,0,0,1,72-72,73.37,73.37,0,0,1,7.6.4A73.37,73.37,0,0,1,168,96Z" opacity="0.2"/><path d="M174.63,81.37a80,80,0,1,0-93.26,93.26,80,80,0,1,0,93.26-93.26ZM32,96a64,64,0,0,1,126-16A80.08,80.08,0,0,0,80.05,158,64.11,64.11,0,0,1,32,96Zm128,0a64.07,64.07,0,0,1-64,64A64.07,64.07,0,0,1,160,96Zm0,128A64.11,64.11,0,0,1,98,176,80.08,80.08,0,0,0,176,98,64,64,0,0,1,160,224Z"/>
    </svg>
  );
}
