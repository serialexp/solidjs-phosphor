import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTI4YTEyLDEyLDAsMCwxLTEyLDEySDEwOWw1MS41Miw1MS41MWExMiwxMiwwLDAsMS0xNywxN2wtNzItNzJhMTIsMTIsMCwwLDEsMC0xN2w3Mi03MmExMiwxMiwwLDAsMSwxNywxN0wxMDksMTE2SDIyNEExMiwxMiwwLDAsMSwyMzYsMTI4Wk00MCwyOEExMiwxMiwwLDAsMCwyOCw0MFYyMTZhMTIsMTIsMCwwLDAsMjQsMFY0MEExMiwxMiwwLDAsMCw0MCwyOFoiLz48L3N2Zz4=)
 */
export function PhArrowLineLeftBoldIcon(props: PhArrowLineLeftBoldIconProps) {
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
      <path d="M236,128a12,12,0,0,1-12,12H109l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L109,116H224A12,12,0,0,1,236,128ZM40,28A12,12,0,0,0,28,40V216a12,12,0,0,0,24,0V40A12,12,0,0,0,40,28Z"/>
    </svg>
  );
}
