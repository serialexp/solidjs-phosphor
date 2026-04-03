import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAnchorSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTIwYTEwNCwxMDQsMCwwLDEtMjA4LDAsOCw4LDAsMCwxLDgtOEg1NmE4LDgsMCwwLDEsMCwxNkg0MC4zNkE4OC4xNSw4OC4xNSwwLDAsMCwxMjAsMjA3LjYzVjkwLjgzYTI4LDI4LDAsMSwxLDE2LDB2MTE2LjhBODguMTUsODguMTUsMCwwLDAsMjE1LjY0LDEyOEgyMDBhOCw4LDAsMCwxLDAtMTZoMjRBOCw4LDAsMCwxLDIzMiwxMjBaIi8+PC9zdmc+)
 */
export function PhAnchorSimpleFillIcon(props: PhAnchorSimpleFillIconProps) {
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
      <path d="M232,120a104,104,0,0,1-208,0,8,8,0,0,1,8-8H56a8,8,0,0,1,0,16H40.36A88.15,88.15,0,0,0,120,207.63V90.83a28,28,0,1,1,16,0v116.8A88.15,88.15,0,0,0,215.64,128H200a8,8,0,0,1,0-16h24A8,8,0,0,1,232,120Z"/>
    </svg>
  );
}
