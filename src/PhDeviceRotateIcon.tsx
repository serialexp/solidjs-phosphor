import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceRotateIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuNjYsMjIxLjY2bC0yNCwyNGE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTgwLjY5LDIyNEg4MGEyNCwyNCwwLDAsMS0yNC0yNFYxMDRhOCw4LDAsMCwxLDE2LDB2OTZhOCw4LDAsMCwwLDgsOEgxODAuNjlsLTEwLjM1LTEwLjM0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMmwyNCwyNEE4LDgsMCwwLDEsMjA1LjY2LDIyMS42NlpNODAsNzJhOCw4LDAsMCwwLDUuNjYtMTMuNjZMNzUuMzEsNDhIMTc2YTgsOCwwLDAsMSw4LDh2OTZhOCw4LDAsMCwwLDE2LDBWNTZhMjQsMjQsMCwwLDAtMjQtMjRINzUuMzFMODUuNjYsMjEuNjZBOCw4LDAsMSwwLDc0LjM0LDEwLjM0bC0yNCwyNGE4LDgsMCwwLDAsMCwxMS4zMmwyNCwyNEE4LDgsMCwwLDAsODAsNzJaIi8+PC9zdmc+)
 */
export function PhDeviceRotateIcon(props: PhDeviceRotateIconProps) {
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
      <path d="M205.66,221.66l-24,24a8,8,0,0,1-11.32-11.32L180.69,224H80a24,24,0,0,1-24-24V104a8,8,0,0,1,16,0v96a8,8,0,0,0,8,8H180.69l-10.35-10.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,205.66,221.66ZM80,72a8,8,0,0,0,5.66-13.66L75.31,48H176a8,8,0,0,1,8,8v96a8,8,0,0,0,16,0V56a24,24,0,0,0-24-24H75.31L85.66,21.66A8,8,0,1,0,74.34,10.34l-24,24a8,8,0,0,0,0,11.32l24,24A8,8,0,0,0,80,72Z"/>
    </svg>
  );
}
