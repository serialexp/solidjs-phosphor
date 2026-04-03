import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowURightUpDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODBIMTIwbDQ4LTQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyMS42Niw3NC4zNGwtNDgtNDhhOCw4LDAsMCwwLTExLjMyLDBsLTQ4LDQ4QTgsOCwwLDAsMCwxMjAsODhoNDB2ODBhNDgsNDgsMCwwLDEtOTYsMFY4MGE4LDgsMCwwLDAtMTYsMHY4OGE2NCw2NCwwLDAsMCwxMjgsMFY4OGg0MGE4LDgsMCwwLDAsNS42Ni0xMy42NlpNMTM5LjMxLDcyLDE2OCw0My4zMSwxOTYuNjksNzJaIi8+PC9zdmc+)
 */
export function PhArrowURightUpDuotoneIcon(props: PhArrowURightUpDuotoneIconProps) {
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
      <path d="M216,80H120l48-48Z" opacity="0.2"/><path d="M221.66,74.34l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,120,88h40v80a48,48,0,0,1-96,0V80a8,8,0,0,0-16,0v88a64,64,0,0,0,128,0V88h40a8,8,0,0,0,5.66-13.66ZM139.31,72,168,43.31,196.69,72Z"/>
    </svg>
  );
}
