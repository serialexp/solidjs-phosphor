import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendUpLeftFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjAwYTgsOCwwLDAsMS0xNiwwLDg4LjEsODguMSwwLDAsMC04OC04OEg4OHY0MGE4LDgsMCwwLDEtMTMuNjYsNS42NmwtNDgtNDhhOCw4LDAsMCwxLDAtMTEuMzJsNDgtNDhBOCw4LDAsMCwxLDg4LDU2Vjk2aDQwQTEwNC4xMSwxMDQuMTEsMCwwLDEsMjMyLDIwMFoiLz48L3N2Zz4=)
 */
export function PhArrowBendUpLeftFillIcon(props: PhArrowBendUpLeftFillIconProps) {
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
      <path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H88v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,88,56V96h40A104.11,104.11,0,0,1,232,200Z"/>
    </svg>
  );
}
