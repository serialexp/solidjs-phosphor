import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextAlignLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yOCw2NEExMiwxMiwwLDAsMSw0MCw1MkgyMTZhMTIsMTIsMCwwLDEsMCwyNEg0MEExMiwxMiwwLDAsMSwyOCw2NFptMTIsNTJIMTY4YTEyLDEyLDAsMCwwLDAtMjRINDBhMTIsMTIsMCwwLDAsMCwyNFptMTc2LDE2SDQwYTEyLDEyLDAsMCwwLDAsMjRIMjE2YTEyLDEyLDAsMCwwLDAtMjRabS00OCw0MEg0MGExMiwxMiwwLDAsMCwwLDI0SDE2OGExMiwxMiwwLDAsMCwwLTI0WiIvPjwvc3ZnPg==)
 */
export function PhTextAlignLeftBoldIcon(props: PhTextAlignLeftBoldIconProps) {
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
      <path d="M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,52H168a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm176,16H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-48,40H40a12,12,0,0,0,0,24H168a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
