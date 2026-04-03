import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowURightUpBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQuNDksODguNDlhMTIsMTIsMCwwLDEtMTcsMEwxODAsNjFWMTY4YTY4LDY4LDAsMCwxLTEzNiwwVjgwYTEyLDEyLDAsMCwxLDI0LDB2ODhhNDQsNDQsMCwwLDAsODgsMFY2MUwxMjguNDksODguNDlhMTIsMTIsMCwxLDEtMTctMTdsNDgtNDhhMTIsMTIsMCwwLDEsMTcsMGw0OCw0OEExMiwxMiwwLDAsMSwyMjQuNDksODguNDlaIi8+PC9zdmc+)
 */
export function PhArrowURightUpBoldIcon(props: PhArrowURightUpBoldIconProps) {
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
      <path d="M224.49,88.49a12,12,0,0,1-17,0L180,61V168a68,68,0,0,1-136,0V80a12,12,0,0,1,24,0v88a44,44,0,0,0,88,0V61L128.49,88.49a12,12,0,1,1-17-17l48-48a12,12,0,0,1,17,0l48,48A12,12,0,0,1,224.49,88.49Z"/>
    </svg>
  );
}
