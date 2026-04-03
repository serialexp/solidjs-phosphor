import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPentagonBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsODQuMzhsLTg3LjktNjguMjktLjI2LS4yYTE5LjkyLDE5LjkyLDAsMCwwLTIzLjY2LDBsLS4yNi4yTDI4LDg0LjM4YTIwLDIwLDAsMCwwLTcuMDksMjJsMzIsMTA3LjUxLjA4LjI2QTE5LjkzLDE5LjkzLDAsMCwwLDcyLDIyOEgxODRhMTkuOTMsMTkuOTMsMCwwLDAsMTktMTMuODdsLjA4LS4yNiwzMi0xMDcuNTFBMjAsMjAsMCwwLDAsMjI4LDg0LjM4Wk0xODEsMjA0SDc1TDQ0LjYyLDEwMS44NywxMjgsMzcuMDlsODMuMzgsNjQuNzhaIi8+PC9zdmc+)
 */
export function PhPentagonBoldIcon(props: PhPentagonBoldIconProps) {
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
      <path d="M228,84.38l-87.9-68.29-.26-.2a19.92,19.92,0,0,0-23.66,0l-.26.2L28,84.38a20,20,0,0,0-7.09,22l32,107.51.08.26A19.93,19.93,0,0,0,72,228H184a19.93,19.93,0,0,0,19-13.87l.08-.26,32-107.51A20,20,0,0,0,228,84.38ZM181,204H75L44.62,101.87,128,37.09l83.38,64.78Z"/>
    </svg>
  );
}
