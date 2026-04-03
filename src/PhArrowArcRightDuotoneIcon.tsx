import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowArcRightDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsODh2NjRIMTY4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzNS4wNiw4MC42MWE4LDgsMCwwLDAtOC43MiwxLjczbC0yNi40OCwyNi40OUExMDQsMTA0LDAsMCwwLDI0LDE4NGE4LDgsMCwwLDAsMTYsMCw4OCw4OCwwLDAsMSwxNDguNTMtNjMuODRsLTI2LjE5LDI2LjE4QTgsOCwwLDAsMCwxNjgsMTYwaDY0YTgsOCwwLDAsMCw4LThWODhBOCw4LDAsMCwwLDIzNS4wNiw4MC42MVpNMjI0LDE0NEgxODcuMzFMMjI0LDEwNy4zMVoiLz48L3N2Zz4=)
 */
export function PhArrowArcRightDuotoneIcon(props: PhArrowArcRightDuotoneIconProps) {
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
      <path d="M232,88v64H168Z" opacity="0.2"/><path d="M235.06,80.61a8,8,0,0,0-8.72,1.73l-26.48,26.49A104,104,0,0,0,24,184a8,8,0,0,0,16,0,88,88,0,0,1,148.53-63.84l-26.19,26.18A8,8,0,0,0,168,160h64a8,8,0,0,0,8-8V88A8,8,0,0,0,235.06,80.61ZM224,144H187.31L224,107.31Z"/>
    </svg>
  );
}
