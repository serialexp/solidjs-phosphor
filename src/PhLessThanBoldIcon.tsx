import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLessThanBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuODQsMjA1LjEzYTEyLDEyLDAsMCwxLTE2LDUuNzFsLTE1Mi03MmExMiwxMiwwLDAsMSwwLTIxLjY4bDE1Mi03MmExMiwxMiwwLDEsMSwxMC4yNywyMS42OUw3NiwxMjhsMTI5LjEsNjEuMTVBMTIsMTIsMCwwLDEsMjEwLjg0LDIwNS4xM1oiLz48L3N2Zz4=)
 */
export function PhLessThanBoldIcon(props: PhLessThanBoldIconProps) {
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
      <path d="M210.84,205.13a12,12,0,0,1-16,5.71l-152-72a12,12,0,0,1,0-21.68l152-72a12,12,0,1,1,10.27,21.69L76,128l129.1,61.15A12,12,0,0,1,210.84,205.13Z"/>
    </svg>
  );
}
