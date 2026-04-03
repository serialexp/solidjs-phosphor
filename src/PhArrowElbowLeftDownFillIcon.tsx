import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftDownFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsNzJhOCw4LDAsMCwxLTgsOEg5NnY4MGg0MGE4LDgsMCwwLDEsNS42NiwxMy42NmwtNDgsNDhhOCw4LDAsMCwxLTExLjMyLDBsLTQ4LTQ4QTgsOCwwLDAsMSw0MCwxNjBIODBWNzJhOCw4LDAsMCwxLDgtOEgyMzJBOCw4LDAsMCwxLDI0MCw3MloiLz48L3N2Zz4=)
 */
export function PhArrowElbowLeftDownFillIcon(props: PhArrowElbowLeftDownFillIconProps) {
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
      <path d="M240,72a8,8,0,0,1-8,8H96v80h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,40,160H80V72a8,8,0,0,1,8-8H232A8,8,0,0,1,240,72Z"/>
    </svg>
  );
}
