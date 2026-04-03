import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretUpDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTYwSDQ4bDgwLTgwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxMy42NiwxNTQuMzRsLTgwLTgwYTgsOCwwLDAsMC0xMS4zMiwwbC04MCw4MEE4LDgsMCwwLDAsNDgsMTY4SDIwOGE4LDgsMCwwLDAsNS42Ni0xMy42NlpNNjcuMzEsMTUyLDEyOCw5MS4zMSwxODguNjksMTUyWiIvPjwvc3ZnPg==)
 */
export function PhCaretUpDuotoneIcon(props: PhCaretUpDuotoneIconProps) {
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
      <path d="M208,160H48l80-80Z" opacity="0.2"/><path d="M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z"/>
    </svg>
  );
}
