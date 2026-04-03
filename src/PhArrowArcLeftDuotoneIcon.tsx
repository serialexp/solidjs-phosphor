import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowArcLeftDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwxNTJIMjRWODhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjAxLjU0LDExMC40NmExMDQsMTA0LDAsMCwwLTE0NS40LTEuNjNMMjkuNjYsODIuMzRBOCw4LDAsMCwwLDE2LDg4djY0YTgsOCwwLDAsMCw4LDhIODhhOCw4LDAsMCwwLDUuNjYtMTMuNjZMNjcuNDcsMTIwLjE2QTg4LDg4LDAsMCwxLDIxNiwxODRhOCw4LDAsMCwwLDE2LDBBMTAzLjMzLDEwMy4zMywwLDAsMCwyMDEuNTQsMTEwLjQ2Wk0zMiwxNDRWMTA3LjMxTDY4LjY5LDE0NFoiLz48L3N2Zz4=)
 */
export function PhArrowArcLeftDuotoneIcon(props: PhArrowArcLeftDuotoneIconProps) {
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
      <path d="M88,152H24V88Z" opacity="0.2"/><path d="M201.54,110.46a104,104,0,0,0-145.4-1.63L29.66,82.34A8,8,0,0,0,16,88v64a8,8,0,0,0,8,8H88a8,8,0,0,0,5.66-13.66L67.47,120.16A88,88,0,0,1,216,184a8,8,0,0,0,16,0A103.33,103.33,0,0,0,201.54,110.46ZM32,144V107.31L68.69,144Z"/>
    </svg>
  );
}
