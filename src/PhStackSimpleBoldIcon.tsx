import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhStackSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMC4wNSwxMTAuNDJsMTEyLDY0YTEyLDEyLDAsMCwwLDExLjksMGwxMTItNjRhMTIsMTIsMCwwLDAsMC0yMC44NGwtMTEyLTY0YTEyLDEyLDAsMCwwLTExLjksMGwtMTEyLDY0YTEyLDEyLDAsMCwwLDAsMjAuODRabTExOC02MC42TDIxNS44MSwxMDAsMTI4LDE1MC4xOCw0MC4xOSwxMDBabTEyMi40Miw5Mi4yM0ExMiwxMiwwLDAsMSwyNDYsMTU4LjQybC0xMTIsNjRhMTIsMTIsMCwwLDEtMTEuOSwwbC0xMTItNjRBMTIsMTIsMCwxLDEsMjIsMTM3LjU4bDEwNiw2MC42LDEwNi02MC42QTEyLDEyLDAsMCwxLDI1MC40MiwxNDIuMDVaIi8+PC9zdmc+)
 */
export function PhStackSimpleBoldIcon(props: PhStackSimpleBoldIconProps) {
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
      <path d="M10.05,110.42l112,64a12,12,0,0,0,11.9,0l112-64a12,12,0,0,0,0-20.84l-112-64a12,12,0,0,0-11.9,0l-112,64a12,12,0,0,0,0,20.84Zm118-60.6L215.81,100,128,150.18,40.19,100Zm122.42,92.23A12,12,0,0,1,246,158.42l-112,64a12,12,0,0,1-11.9,0l-112-64A12,12,0,1,1,22,137.58l106,60.6,106-60.6A12,12,0,0,1,250.42,142.05Z"/>
    </svg>
  );
}
