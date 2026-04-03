import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGasPumpThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzguMTQsNzIuNDksMjE4LjgzLDUzLjE3YTQsNCwwLDAsMC01LjY2LDUuNjZsMTkuMzIsMTkuMzFBMTIsMTIsMCwwLDEsMjM2LDg2LjYzVjE2OGExMiwxMiwwLDAsMS0yNCwwVjEyOGEyMCwyMCwwLDAsMC0yMC0yMEgxNzJWNTZhMjAsMjAsMCwwLDAtMjAtMjBINzJBMjAsMjAsMCwwLDAsNTIsNTZWMjEySDMyYTQsNCwwLDAsMCwwLDhIMTkyYTQsNCwwLDAsMCwwLThIMTcyVjExNmgyMGExMiwxMiwwLDAsMSwxMiwxMnY0MGEyMCwyMCwwLDAsMCw0MCwwVjg2LjYzQTE5Ljg1LDE5Ljg1LDAsMCwwLDIzOC4xNCw3Mi40OVpNNjAsMjEyVjU2QTEyLDEyLDAsMCwxLDcyLDQ0aDgwYTEyLDEyLDAsMCwxLDEyLDEyVjIxMlptODAtMTAwYTQsNCwwLDAsMS00LDRIODhhNCw0LDAsMCwxLDAtOGg0OEE0LDQsMCwwLDEsMTQwLDExMloiLz48L3N2Zz4=)
 */
export function PhGasPumpThinIcon(props: PhGasPumpThinIconProps) {
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
      <path d="M238.14,72.49,218.83,53.17a4,4,0,0,0-5.66,5.66l19.32,19.31A12,12,0,0,1,236,86.63V168a12,12,0,0,1-24,0V128a20,20,0,0,0-20-20H172V56a20,20,0,0,0-20-20H72A20,20,0,0,0,52,56V212H32a4,4,0,0,0,0,8H192a4,4,0,0,0,0-8H172V116h20a12,12,0,0,1,12,12v40a20,20,0,0,0,40,0V86.63A19.85,19.85,0,0,0,238.14,72.49ZM60,212V56A12,12,0,0,1,72,44h80a12,12,0,0,1,12,12V212Zm80-100a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h48A4,4,0,0,1,140,112Z"/>
    </svg>
  );
}
