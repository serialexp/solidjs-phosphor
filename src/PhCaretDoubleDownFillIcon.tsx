import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretDoubleDownFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUuMzksMTMyLjk0YTgsOCwwLDAsMS0xLjczLDguNzJsLTgwLDgwYTgsOCwwLDAsMS0xMS4zMiwwbC04MC04MEE4LDgsMCwwLDEsNDgsMTI4aDYwLjY5TDQyLjM0LDYxLjY2QTgsOCwwLDAsMSw0OCw0OEgyMDhhOCw4LDAsMCwxLDUuNjYsMTMuNjZMMTQ3LjMxLDEyOEgyMDhBOCw4LDAsMCwxLDIxNS4zOSwxMzIuOTRaIi8+PC9zdmc+)
 */
export function PhCaretDoubleDownFillIcon(props: PhCaretDoubleDownFillIconProps) {
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
      <path d="M215.39,132.94a8,8,0,0,1-1.73,8.72l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,128h60.69L42.34,61.66A8,8,0,0,1,48,48H208a8,8,0,0,1,5.66,13.66L147.31,128H208A8,8,0,0,1,215.39,132.94Z"/>
    </svg>
  );
}
