import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUpDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTEySDU2bDcyLTcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwNS42NiwxMDYuMzRsLTcyLTcyYTgsOCwwLDAsMC0xMS4zMiwwbC03Miw3MkE4LDgsMCwwLDAsNTYsMTIwaDY0djk2YTgsOCwwLDAsMCwxNiwwVjEyMGg2NGE4LDgsMCwwLDAsNS42Ni0xMy42NlpNNzUuMzEsMTA0LDEyOCw1MS4zMSwxODAuNjksMTA0WiIvPjwvc3ZnPg==)
 */
export function PhArrowUpDuotoneIcon(props: PhArrowUpDuotoneIconProps) {
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
      <path d="M200,112H56l72-72Z" opacity="0.2"/><path d="M205.66,106.34l-72-72a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,120h64v96a8,8,0,0,0,16,0V120h64a8,8,0,0,0,5.66-13.66ZM75.31,104,128,51.31,180.69,104Z"/>
    </svg>
  );
}
