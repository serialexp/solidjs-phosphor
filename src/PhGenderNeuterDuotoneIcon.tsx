import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGenderNeuterDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTA0YTcyLDcyLDAsMSwxLTcyLTcyQTcyLDcyLDAsMCwxLDIwMCwxMDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDEwNGE4MCw4MCwwLDEsMC04OCw3OS42VjIzMmE4LDgsMCwwLDAsMTYsMFYxODMuNkE4MC4xMSw4MC4xMSwwLDAsMCwyMDgsMTA0Wm0tODAsNjRhNjQsNjQsMCwxLDEsNjQtNjRBNjQuMDcsNjQuMDcsMCwwLDEsMTI4LDE2OFoiLz48L3N2Zz4=)
 */
export function PhGenderNeuterDuotoneIcon(props: PhGenderNeuterDuotoneIconProps) {
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
      <path d="M200,104a72,72,0,1,1-72-72A72,72,0,0,1,200,104Z" opacity="0.2"/><path d="M208,104a80,80,0,1,0-88,79.6V232a8,8,0,0,0,16,0V183.6A80.11,80.11,0,0,0,208,104Zm-80,64a64,64,0,1,1,64-64A64.07,64.07,0,0,1,128,168Z"/>
    </svg>
  );
}
