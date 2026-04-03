import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAsteriskBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTguMjksMTgyLjE3YTEyLDEyLDAsMCwxLTE2LjQ3LDQuMTJMMTQwLDE0OS4xOVYyMTZhMTIsMTIsMCwwLDEtMjQsMFYxNDkuMTlsLTYxLjgyLDM3LjFhMTIsMTIsMCwxLDEtMTIuMzUtMjAuNThMMTA0LjY4LDEyOCw0MS44Myw5MC4yOUExMiwxMiwwLDEsMSw1NC4xOCw2OS43MUwxMTYsMTA2LjgxVjQwYTEyLDEyLDAsMCwxLDI0LDB2NjYuODFsNjEuODItMzcuMWExMiwxMiwwLDEsMSwxMi4zNSwyMC41OEwxNTEuMzIsMTI4bDYyLjg1LDM3LjcxQTEyLDEyLDAsMCwxLDIxOC4yOSwxODIuMTdaIi8+PC9zdmc+)
 */
export function PhAsteriskBoldIcon(props: PhAsteriskBoldIconProps) {
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
      <path d="M218.29,182.17a12,12,0,0,1-16.47,4.12L140,149.19V216a12,12,0,0,1-24,0V149.19l-61.82,37.1a12,12,0,1,1-12.35-20.58L104.68,128,41.83,90.29A12,12,0,1,1,54.18,69.71L116,106.81V40a12,12,0,0,1,24,0v66.81l61.82-37.1a12,12,0,1,1,12.35,20.58L151.32,128l62.85,37.71A12,12,0,0,1,218.29,182.17Z"/>
    </svg>
  );
}
