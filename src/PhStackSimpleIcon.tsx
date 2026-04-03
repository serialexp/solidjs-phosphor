import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhStackSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMiwxMTFsMTEyLDY0YTgsOCwwLDAsMCw3Ljk0LDBsMTEyLTY0YTgsOCwwLDAsMCwwLTEzLjlsLTExMi02NGE4LDgsMCwwLDAtNy45NCwwbC0xMTIsNjRBOCw4LDAsMCwwLDEyLDExMVpNMTI4LDQ5LjIxLDIyMy44NywxMDQsMTI4LDE1OC43OSwzMi4xMywxMDRaTTI0Ni45NCwxNDBBOCw4LDAsMCwxLDI0NCwxNTFMMTMyLDIxNWE4LDgsMCwwLDEtNy45NCwwTDEyLDE1MUE4LDgsMCwwLDEsMjAsMTM3LjA1bDEwOCw2MS43NCwxMDgtNjEuNzRBOCw4LDAsMCwxLDI0Ni45NCwxNDBaIi8+PC9zdmc+)
 */
export function PhStackSimpleIcon(props: PhStackSimpleIconProps) {
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
      <path d="M12,111l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,0,0,0-13.9l-112-64a8,8,0,0,0-7.94,0l-112,64A8,8,0,0,0,12,111ZM128,49.21,223.87,104,128,158.79,32.13,104ZM246.94,140A8,8,0,0,1,244,151L132,215a8,8,0,0,1-7.94,0L12,151A8,8,0,0,1,20,137.05l108,61.74,108-61.74A8,8,0,0,1,246.94,140Z"/>
    </svg>
  );
}
