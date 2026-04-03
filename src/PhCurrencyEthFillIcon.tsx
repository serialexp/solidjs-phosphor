import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyEthFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIuMjksMTIzLjA2bC04OC0xMTJhOCw4LDAsMCwwLTEyLjU4LDBsLTg4LDExMmE4LDgsMCwwLDAsMCw5Ljg4bDg4LDExMmE4LDgsMCwwLDAsMTIuNTgsMGw4OC0xMTJBOCw4LDAsMCwwLDIyMi4yOSwxMjMuMDZaTTEzNiwxNTUuNThWMzkuMTNsNjcuNDIsODUuOFptLTE2LDBMNTIuNTgsMTI0LjkzLDEyMCwzOS4xM1ptMCwxNy41N3Y0My43MmwtNTMuNDMtNjhaIi8+PC9zdmc+)
 */
export function PhCurrencyEthFillIcon(props: PhCurrencyEthFillIconProps) {
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
      <path d="M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,155.58V39.13l67.42,85.8Zm-16,0L52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Z"/>
    </svg>
  );
}
