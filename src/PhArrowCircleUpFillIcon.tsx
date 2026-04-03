import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowCircleUpFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0zNy42NiwxMDEuNjZhOCw4LDAsMCwxLTExLjMyLDBMMTM2LDEwNy4zMVYxNjhhOCw4LDAsMCwxLTE2LDBWMTA3LjMxbC0xOC4zNCwxOC4zNWE4LDgsMCwwLDEtMTEuMzItMTEuMzJsMzItMzJhOCw4LDAsMCwxLDExLjMyLDBsMzIsMzJBOCw4LDAsMCwxLDE2NS42NiwxMjUuNjZaIi8+PC9zdmc+)
 */
export function PhArrowCircleUpFillIcon(props: PhArrowCircleUpFillIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,101.66a8,8,0,0,1-11.32,0L136,107.31V168a8,8,0,0,1-16,0V107.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,165.66,125.66Z"/>
    </svg>
  );
}
