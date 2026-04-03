import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhControlDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTIwSDU2bDcyLTcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwNS42NiwxMTQuMzRsLTcyLTcyYTgsOCwwLDAsMC0xMS4zMiwwbC03Miw3MkE4LDgsMCwwLDAsNTYsMTI4SDIwMGE4LDgsMCwwLDAsNS42Ni0xMy42NlpNNzUuMzEsMTEyLDEyOCw1OS4zMSwxODAuNjksMTEyWiIvPjwvc3ZnPg==)
 */
export function PhControlDuotoneIcon(props: PhControlDuotoneIconProps) {
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
      <path d="M200,120H56l72-72Z" opacity="0.2"/><path d="M205.66,114.34l-72-72a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,128H200a8,8,0,0,0,5.66-13.66ZM75.31,112,128,59.31,180.69,112Z"/>
    </svg>
  );
}
