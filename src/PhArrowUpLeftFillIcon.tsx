import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUpLeftFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTcuNjYsMTk3LjY2YTgsOCwwLDAsMS0xMS4zMiwwTDExNiwxMjcuMzEsNjkuNjYsMTczLjY2QTgsOCwwLDAsMSw1NiwxNjhWNjRhOCw4LDAsMCwxLDgtOEgxNjhhOCw4LDAsMCwxLDUuNjYsMTMuNjZMMTI3LjMxLDExNmw3MC4zNSw3MC4zNEE4LDgsMCwwLDEsMTk3LjY2LDE5Ny42NloiLz48L3N2Zz4=)
 */
export function PhArrowUpLeftFillIcon(props: PhArrowUpLeftFillIconProps) {
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
      <path d="M197.66,197.66a8,8,0,0,1-11.32,0L116,127.31,69.66,173.66A8,8,0,0,1,56,168V64a8,8,0,0,1,8-8H168a8,8,0,0,1,5.66,13.66L127.31,116l70.35,70.34A8,8,0,0,1,197.66,197.66Z"/>
    </svg>
  );
}
