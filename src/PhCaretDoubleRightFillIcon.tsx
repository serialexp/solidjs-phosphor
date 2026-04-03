import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretDoubleRightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuNjYsMTMzLjY2bC04MCw4MEE4LDgsMCwwLDEsMTI4LDIwOFYxNDcuMzFMNjEuNjYsMjEzLjY2QTgsOCwwLDAsMSw0OCwyMDhWNDhhOCw4LDAsMCwxLDEzLjY2LTUuNjZMMTI4LDEwOC42OVY0OGE4LDgsMCwwLDEsMTMuNjYtNS42Nmw4MCw4MEE4LDgsMCwwLDEsMjIxLjY2LDEzMy42NloiLz48L3N2Zz4=)
 */
export function PhCaretDoubleRightFillIcon(props: PhCaretDoubleRightFillIconProps) {
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
      <path d="M221.66,133.66l-80,80A8,8,0,0,1,128,208V147.31L61.66,213.66A8,8,0,0,1,48,208V48a8,8,0,0,1,13.66-5.66L128,108.69V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,221.66,133.66Z"/>
    </svg>
  );
}
