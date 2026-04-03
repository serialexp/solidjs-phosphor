import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMinusCircleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzQsMTI4YTYsNiwwLDAsMS02LDZIODhhNiw2LDAsMCwxLDAtMTJoODBBNiw2LDAsMCwxLDE3NCwxMjhabTU2LDBBMTAyLDEwMiwwLDEsMSwxMjgsMjYsMTAyLjEyLDEwMi4xMiwwLDAsMSwyMzAsMTI4Wm0tMTIsMGE5MCw5MCwwLDEsMC05MCw5MEE5MC4xLDkwLjEsMCwwLDAsMjE4LDEyOFoiLz48L3N2Zz4=)
 */
export function PhMinusCircleLightIcon(props: PhMinusCircleLightIconProps) {
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
      <path d="M174,128a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h80A6,6,0,0,1,174,128Zm56,0A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"/>
    </svg>
  );
}
