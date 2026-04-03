import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBracketsSquareBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01Miw1MlYyMDRIODBhMTIsMTIsMCwwLDEsMCwyNEg0MGExMiwxMiwwLDAsMS0xMi0xMlY0MEExMiwxMiwwLDAsMSw0MCwyOEg4MGExMiwxMiwwLDAsMSwwLDI0Wk0yMTYsMjhIMTc2YTEyLDEyLDAsMCwwLDAsMjRoMjhWMjA0SDE3NmExMiwxMiwwLDAsMCwwLDI0aDQwYTEyLDEyLDAsMCwwLDEyLTEyVjQwQTEyLDEyLDAsMCwwLDIxNiwyOFoiLz48L3N2Zz4=)
 */
export function PhBracketsSquareBoldIcon(props: PhBracketsSquareBoldIconProps) {
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
      <path d="M52,52V204H80a12,12,0,0,1,0,24H40a12,12,0,0,1-12-12V40A12,12,0,0,1,40,28H80a12,12,0,0,1,0,24ZM216,28H176a12,12,0,0,0,0,24h28V204H176a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Z"/>
    </svg>
  );
}
