import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGenderNonbinaryIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsOTYuNDZWNjIuMTNsMjcuODgsMTYuNzNhOCw4LDAsMSwwLDguMjQtMTMuNzJMMTQzLjU1LDQ4bDI4LjU3LTE3LjE0YTgsOCwwLDAsMC04LjI0LTEzLjcyTDEyOCwzOC42Nyw5Mi4xMiwxNy4xNGE4LDgsMCwwLDAtOC4yNCwxMy43MkwxMTIuNDUsNDgsODMuODgsNjUuMTRhOCw4LDAsMCwwLDguMjQsMTMuNzJMMTIwLDYyLjEzVjk2LjQ2YTcyLDcyLDAsMSwwLDE2LDBaTTEyOCwyMjRhNTYsNTYsMCwxLDEsNTYtNTZBNTYuMDYsNTYuMDYsMCwwLDEsMTI4LDIyNFoiLz48L3N2Zz4=)
 */
export function PhGenderNonbinaryIcon(props: PhGenderNonbinaryIconProps) {
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
      <path d="M136,96.46V62.13l27.88,16.73a8,8,0,1,0,8.24-13.72L143.55,48l28.57-17.14a8,8,0,0,0-8.24-13.72L128,38.67,92.12,17.14a8,8,0,0,0-8.24,13.72L112.45,48,83.88,65.14a8,8,0,0,0,8.24,13.72L120,62.13V96.46a72,72,0,1,0,16,0ZM128,224a56,56,0,1,1,56-56A56.06,56.06,0,0,1,128,224Z"/>
    </svg>
  );
}
