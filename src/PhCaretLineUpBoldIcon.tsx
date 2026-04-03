import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLineUpBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYuNDksMTgzLjUxYTEyLDEyLDAsMCwxLTE3LDE3TDEyOCwxMjksNTYuNDksMjAwLjQ5YTEyLDEyLDAsMCwxLTE3LTE3bDgwLTgwYTEyLDEyLDAsMCwxLDE3LDBaTTQ4LDg0SDIwOGExMiwxMiwwLDAsMCwwLTI0SDQ4YTEyLDEyLDAsMCwwLDAsMjRaIi8+PC9zdmc+)
 */
export function PhCaretLineUpBoldIcon(props: PhCaretLineUpBoldIconProps) {
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
      <path d="M216.49,183.51a12,12,0,0,1-17,17L128,129,56.49,200.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0ZM48,84H208a12,12,0,0,0,0-24H48a12,12,0,0,0,0,24Z"/>
    </svg>
  );
}
