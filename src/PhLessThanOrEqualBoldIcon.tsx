import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLessThanOrEqualBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNiwxMDRhMTIsMTIsMCwwLDEsNy44NS0xMS4yNmwxNTItNTZhMTIsMTIsMCwxLDEsOC4zLDIyLjUyTDgyLjcxLDEwNGwxMjEuNDQsNDQuNzRBMTIsMTIsMCwwLDEsMjAwLDE3MmExMS44NSwxMS44NSwwLDAsMS00LjE1LS43NGwtMTUyLTU2QTEyLDEyLDAsMCwxLDM2LDEwNFptMTY0LDg0SDQ4YTEyLDEyLDAsMCwwLDAsMjRIMjAwYTEyLDEyLDAsMCwwLDAtMjRaIi8+PC9zdmc+)
 */
export function PhLessThanOrEqualBoldIcon(props: PhLessThanOrEqualBoldIconProps) {
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
      <path d="M36,104a12,12,0,0,1,7.85-11.26l152-56a12,12,0,1,1,8.3,22.52L82.71,104l121.44,44.74A12,12,0,0,1,200,172a11.85,11.85,0,0,1-4.15-.74l-152-56A12,12,0,0,1,36,104Zm164,84H48a12,12,0,0,0,0,24H200a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
