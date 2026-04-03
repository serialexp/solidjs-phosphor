import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMinusCircleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTI4YTgsOCwwLDAsMS04LDhIODhhOCw4LDAsMCwxLDAtMTZoODBBOCw4LDAsMCwxLDE3NiwxMjhabTU2LDBBMTA0LDEwNCwwLDEsMSwxMjgsMjQsMTA0LjExLDEwNC4xMSwwLDAsMSwyMzIsMTI4Wm0tMTYsMGE4OCw4OCwwLDEsMC04OCw4OEE4OC4xLDg4LjEsMCwwLDAsMjE2LDEyOFoiLz48L3N2Zz4=)
 */
export function PhMinusCircleIcon(props: PhMinusCircleIconProps) {
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
      <path d="M176,128a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,128Zm56,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/>
    </svg>
  );
}
