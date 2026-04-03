import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhToggleRightDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTI4YTMyLDMyLDAsMSwxLTMyLTMyQTMyLDMyLDAsMCwxLDIwOCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTc2LDU2SDgwYTcyLDcyLDAsMCwwLDAsMTQ0aDk2YTcyLDcyLDAsMCwwLDAtMTQ0Wm0wLDEyOEg4MEE1Niw1NiwwLDAsMSw4MCw3Mmg5NmE1Niw1NiwwLDAsMSwwLDExMlptMC05NmE0MCw0MCwwLDEsMCw0MCw0MEE0MCw0MCwwLDAsMCwxNzYsODhabTAsNjRhMjQsMjQsMCwxLDEsMjQtMjRBMjQsMjQsMCwwLDEsMTc2LDE1MloiLz48L3N2Zz4=)
 */
export function PhToggleRightDuotoneIcon(props: PhToggleRightDuotoneIconProps) {
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
      <path d="M208,128a32,32,0,1,1-32-32A32,32,0,0,1,208,128Z" opacity="0.2"/><path d="M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144Zm0,128H80A56,56,0,0,1,80,72h96a56,56,0,0,1,0,112Zm0-96a40,40,0,1,0,40,40A40,40,0,0,0,176,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z"/>
    </svg>
  );
}
