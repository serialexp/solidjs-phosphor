import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTranslateIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDcuMTUsMjEyLjQybC01Ni0xMTJhOCw4LDAsMCwwLTE0LjMxLDBsLTIxLjcxLDQzLjQzQTg4LDg4LDAsMCwxLDEwOCwxMjYuOTMsMTAzLjY1LDEwMy42NSwwLDAsMCwxMzUuNjksNjRIMTYwYTgsOCwwLDAsMCwwLTE2SDEwNFYzMmE4LDgsMCwwLDAtMTYsMFY0OEgzMmE4LDgsMCwwLDAsMCwxNmg4Ny42M0E4Ny43Niw4Ny43NiwwLDAsMSw5NiwxMTYuMzVhODcuNzQsODcuNzQsMCwwLDEtMTktMzEsOCw4LDAsMSwwLTE1LjA4LDUuMzRBMTAzLjYzLDEwMy42MywwLDAsMCw4NCwxMjdhODcuNTUsODcuNTUsMCwwLDEtNTIsMTcsOCw4LDAsMCwwLDAsMTYsMTAzLjQ2LDEwMy40NiwwLDAsMCw2NC0yMi4wOCwxMDQuMTgsMTA0LjE4LDAsMCwwLDUxLjQ0LDIxLjMxbC0yNi42LDUzLjE5YTgsOCwwLDAsMCwxNC4zMSw3LjE2TDE0OC45NCwxOTJoNzAuMTFsMTMuNzksMjcuNThBOCw4LDAsMCwwLDI0MCwyMjRhOCw4LDAsMCwwLDcuMTUtMTEuNThaTTE1Ni45NCwxNzYsMTg0LDEyMS44OSwyMTEuMDUsMTc2WiIvPjwvc3ZnPg==)
 */
export function PhTranslateIcon(props: PhTranslateIconProps) {
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
      <path d="M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z"/>
    </svg>
  );
}
