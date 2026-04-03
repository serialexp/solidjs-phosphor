import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCropBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMTkyYTEyLDEyLDAsMCwxLTEyLDEySDIwNHYyOGExMiwxMiwwLDAsMS0yNCwwVjIwNEg2NGExMiwxMiwwLDAsMS0xMi0xMlY3NkgyNGExMiwxMiwwLDAsMSwwLTI0SDUyVjI0YTEyLDEyLDAsMCwxLDI0LDBWMTgwSDIzMkExMiwxMiwwLDAsMSwyNDQsMTkyWk0xMDQsNzZoNzZ2NzZhMTIsMTIsMCwwLDAsMjQsMFY2NGExMiwxMiwwLDAsMC0xMi0xMkgxMDRhMTIsMTIsMCwwLDAsMCwyNFoiLz48L3N2Zz4=)
 */
export function PhCropBoldIcon(props: PhCropBoldIconProps) {
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
      <path d="M244,192a12,12,0,0,1-12,12H204v28a12,12,0,0,1-24,0V204H64a12,12,0,0,1-12-12V76H24a12,12,0,0,1,0-24H52V24a12,12,0,0,1,24,0V180H232A12,12,0,0,1,244,192ZM104,76h76v76a12,12,0,0,0,24,0V64a12,12,0,0,0-12-12H104a12,12,0,0,0,0,24Z"/>
    </svg>
  );
}
