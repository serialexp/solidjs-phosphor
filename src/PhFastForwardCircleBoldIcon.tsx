import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFastForwardCircleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsMTI4YTEyLDEyLDAsMCwxLTQuNSw5LjM3bC00MCwzMkExMiwxMiwwLDAsMSwxMzIsMTYwVjE0MC4xN2wtMzYuNSwyOS4yQTEyLDEyLDAsMCwxLDc2LDE2MFY5NmExMiwxMiwwLDAsMSwxOS41LTkuMzdsMzYuNSwyOS4yVjk2YTEyLDEyLDAsMCwxLDE5LjUtOS4zN2w0MCwzMkExMiwxMiwwLDAsMSwxOTYsMTI4Wm00MCwwQTEwOCwxMDgsMCwxLDEsMTI4LDIwLDEwOC4xMiwxMDguMTIsMCwwLDEsMjM2LDEyOFptLTI0LDBhODQsODQsMCwxLDAtODQsODRBODQuMDksODQuMDksMCwwLDAsMjEyLDEyOFoiLz48L3N2Zz4=)
 */
export function PhFastForwardCircleBoldIcon(props: PhFastForwardCircleBoldIconProps) {
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
      <path d="M196,128a12,12,0,0,1-4.5,9.37l-40,32A12,12,0,0,1,132,160V140.17l-36.5,29.2A12,12,0,0,1,76,160V96a12,12,0,0,1,19.5-9.37l36.5,29.2V96a12,12,0,0,1,19.5-9.37l40,32A12,12,0,0,1,196,128Zm40,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"/>
    </svg>
  );
}
