import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowRightUpFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMuMzksOTkuMDZBOCw4LDAsMCwxLDIxNiwxMDRIMTc2djg4YTgsOCwwLDAsMS04LDhIMjRhOCw4LDAsMCwxLDAtMTZIMTYwVjEwNEgxMjBhOCw4LDAsMCwxLTUuNjYtMTMuNjZsNDgtNDhhOCw4LDAsMCwxLDExLjMyLDBsNDgsNDhBOCw4LDAsMCwxLDIyMy4zOSw5OS4wNloiLz48L3N2Zz4=)
 */
export function PhArrowElbowRightUpFillIcon(props: PhArrowElbowRightUpFillIconProps) {
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
      <path d="M223.39,99.06A8,8,0,0,1,216,104H176v88a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H160V104H120a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,223.39,99.06Z"/>
    </svg>
  );
}
