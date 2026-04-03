import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSupersetProperOfLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMTI4YTg2LjEsODYuMSwwLDAsMS04Niw4Nkg2NGE2LDYsMCwwLDEsMC0xMmg3MmE3NCw3NCwwLDAsMCwwLTE0OEg2NGE2LDYsMCwwLDEsMC0xMmg3MkE4Ni4xLDg2LjEsMCwwLDEsMjIyLDEyOFoiLz48L3N2Zz4=)
 */
export function PhSupersetProperOfLightIcon(props: PhSupersetProperOfLightIconProps) {
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
      <path d="M222,128a86.1,86.1,0,0,1-86,86H64a6,6,0,0,1,0-12h72a74,74,0,0,0,0-148H64a6,6,0,0,1,0-12h72A86.1,86.1,0,0,1,222,128Z"/>
    </svg>
  );
}
