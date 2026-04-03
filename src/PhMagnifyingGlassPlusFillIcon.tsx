import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMagnifyingGlassPlusFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMjE4LjM0LDE3OS42LDE2OC4yOGE4OC4yMSw4OC4yMSwwLDEsMC0xMS4zMiwxMS4zMWw1MC4wNiw1MC4wN2E4LDgsMCwwLDAsMTEuMzItMTEuMzJaTTE0NCwxMjBIMTIwdjI0YTgsOCwwLDAsMS0xNiwwVjEyMEg4MGE4LDgsMCwwLDEsMC0xNmgyNFY4MGE4LDgsMCwwLDEsMTYsMHYyNGgyNGE4LDgsMCwwLDEsMCwxNloiLz48L3N2Zz4=)
 */
export function PhMagnifyingGlassPlusFillIcon(props: PhMagnifyingGlassPlusFillIconProps) {
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
      <path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM144,120H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
