import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSunglassesIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDBhOCw4LDAsMCwwLDAsMTYsMTYsMTYsMCwwLDEsMTYsMTZ2NTZINDBWNzJBMTYsMTYsMCwwLDEsNTYsNTZhOCw4LDAsMCwwLDAtMTZBMzIsMzIsMCwwLDAsMjQsNzJ2OTJhNDQsNDQsMCwwLDAsODgsMFYxNDRoMzJ2MjBhNDQsNDQsMCwwLDAsODgsMFY3MkEzMiwzMiwwLDAsMCwyMDAsNDBabTEyLjYzLDEzNy4zMUwxNzkuMzEsMTQ0SDIxNnYyMEEyNy44LDI3LjgsMCwwLDEsMjEyLjYzLDE3Ny4zMVpNNDAsMTY0VjE0Ny4zMWw0MS4zMSw0MS4zMkEyOCwyOCwwLDAsMSw0MCwxNjRabTU2LDBhMjcuOCwyNy44LDAsMCwxLTMuMzcsMTMuMzFMNTkuMzEsMTQ0SDk2Wm02NCwwVjE0Ny4zMWw0MS4zMSw0MS4zMkEyOCwyOCwwLDAsMSwxNjAsMTY0WiIvPjwvc3ZnPg==)
 */
export function PhSunglassesIcon(props: PhSunglassesIconProps) {
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
      <path d="M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v56H40V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32,32,0,0,0,24,72v92a44,44,0,0,0,88,0V144h32v20a44,44,0,0,0,88,0V72A32,32,0,0,0,200,40Zm12.63,137.31L179.31,144H216v20A27.8,27.8,0,0,1,212.63,177.31ZM40,164V147.31l41.31,41.32A28,28,0,0,1,40,164Zm56,0a27.8,27.8,0,0,1-3.37,13.31L59.31,144H96Zm64,0V147.31l41.31,41.32A28,28,0,0,1,160,164Z"/>
    </svg>
  );
}
