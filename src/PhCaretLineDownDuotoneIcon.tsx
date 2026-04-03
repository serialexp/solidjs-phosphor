import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLineDownDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNzJsLTgwLDgwTDQ4LDcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEyMi4zNCwxNTcuNjZhOCw4LDAsMCwwLDExLjMyLDBsODAtODBBOCw4LDAsMCwwLDIwOCw2NEg0OGE4LDgsMCwwLDAtNS42NiwxMy42NlpNMTg4LjY5LDgwLDEyOCwxNDAuNjksNjcuMzEsODBaTTIxNiwxOTJhOCw4LDAsMCwxLTgsOEg0OGE4LDgsMCwwLDEsMC0xNkgyMDhBOCw4LDAsMCwxLDIxNiwxOTJaIi8+PC9zdmc+)
 */
export function PhCaretLineDownDuotoneIcon(props: PhCaretLineDownDuotoneIconProps) {
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
      <path d="M208,72l-80,80L48,72Z" opacity="0.2"/><path d="M122.34,157.66a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,208,64H48a8,8,0,0,0-5.66,13.66ZM188.69,80,128,140.69,67.31,80ZM216,192a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,192Z"/>
    </svg>
  );
}
