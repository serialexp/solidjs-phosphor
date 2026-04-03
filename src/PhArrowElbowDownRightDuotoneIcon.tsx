import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowDownRightDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTc2bC00OCw0OFYxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjIxLjY2LDE3MC4zNGwtNDgtNDhBOCw4LDAsMCwwLDE2MCwxMjh2NDBIODBWMzJhOCw4LDAsMCwwLTE2LDBWMTc2YTgsOCwwLDAsMCw4LDhoODh2NDBhOCw4LDAsMCwwLDEzLjY2LDUuNjZsNDgtNDhBOCw4LDAsMCwwLDIyMS42NiwxNzAuMzRaTTE3NiwyMDQuNjlWMTQ3LjMxTDIwNC42OSwxNzZaIi8+PC9zdmc+)
 */
export function PhArrowElbowDownRightDuotoneIcon(props: PhArrowElbowDownRightDuotoneIconProps) {
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
      <path d="M216,176l-48,48V128Z" opacity="0.2"/><path d="M221.66,170.34l-48-48A8,8,0,0,0,160,128v40H80V32a8,8,0,0,0-16,0V176a8,8,0,0,0,8,8h88v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,221.66,170.34ZM176,204.69V147.31L204.69,176Z"/>
    </svg>
  );
}
