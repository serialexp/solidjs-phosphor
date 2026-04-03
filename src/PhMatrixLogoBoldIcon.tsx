import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMatrixLogoBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03NiwyMTZhMTIsMTIsMCwwLDEtMTIsMTJINDBhMTIsMTIsMCwwLDEtMTItMTJWNDBBMTIsMTIsMCwwLDEsNDAsMjhINjRhMTIsMTIsMCwwLDEsMCwyNEg1MlYyMDRINjRBMTIsMTIsMCwwLDEsNzYsMjE2Wk0yMTYsMjhIMTkyYTEyLDEyLDAsMCwwLDAsMjRoMTJWMjA0SDE5MmExMiwxMiwwLDAsMCwwLDI0aDI0YTEyLDEyLDAsMCwwLDEyLTEyVjQwQTEyLDEyLDAsMCwwLDIxNiwyOFpNMTg4LDE2MFYxMjBhMzYsMzYsMCwwLDAtNjAtMjYuOCwzNS45MSwzNS45MSwwLDAsMC0zOS41MS01LjY4QTEyLDEyLDAsMCwwLDY4LDk2djY0YTEyLDEyLDAsMCwwLDI0LDBWMTIwYTEyLDEyLDAsMCwxLDI0LDB2NDBhMTIsMTIsMCwwLDAsMjQsMFYxMjBhMTIsMTIsMCwwLDEsMjQsMHY0MGExMiwxMiwwLDAsMCwyNCwwWiIvPjwvc3ZnPg==)
 */
export function PhMatrixLogoBoldIcon(props: PhMatrixLogoBoldIconProps) {
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
      <path d="M76,216a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V40A12,12,0,0,1,40,28H64a12,12,0,0,1,0,24H52V204H64A12,12,0,0,1,76,216ZM216,28H192a12,12,0,0,0,0,24h12V204H192a12,12,0,0,0,0,24h24a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM188,160V120a36,36,0,0,0-60-26.8,35.91,35.91,0,0,0-39.51-5.68A12,12,0,0,0,68,96v64a12,12,0,0,0,24,0V120a12,12,0,0,1,24,0v40a12,12,0,0,0,24,0V120a12,12,0,0,1,24,0v40a12,12,0,0,0,24,0Z"/>
    </svg>
  );
}
