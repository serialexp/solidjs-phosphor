import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMinusCircleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsMTI4YTEyLDEyLDAsMCwxLTEyLDEySDg4YTEyLDEyLDAsMCwxLDAtMjRoODBBMTIsMTIsMCwwLDEsMTgwLDEyOFptNTYsMEExMDgsMTA4LDAsMSwxLDEyOCwyMCwxMDguMTIsMTA4LjEyLDAsMCwxLDIzNiwxMjhabS0yNCwwYTg0LDg0LDAsMSwwLTg0LDg0QTg0LjA5LDg0LjA5LDAsMCwwLDIxMiwxMjhaIi8+PC9zdmc+)
 */
export function PhMinusCircleBoldIcon(props: PhMinusCircleBoldIconProps) {
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
      <path d="M180,128a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h80A12,12,0,0,1,180,128Zm56,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"/>
    </svg>
  );
}
