import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowDownRightDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsODhWMTkySDg4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE5NS4wNiw4MC42MWE4LDgsMCwwLDAtOC43MiwxLjczTDE0MCwxMjguNjksNjkuNjYsNTguMzRBOCw4LDAsMCwwLDU4LjM0LDY5LjY2TDEyOC42OSwxNDAsODIuMzQsMTg2LjM0QTgsOCwwLDAsMCw4OCwyMDBIMTkyYTgsOCwwLDAsMCw4LThWODhBOCw4LDAsMCwwLDE5NS4wNiw4MC42MVpNMTg0LDE4NEgxMDcuMzFsMzguMzQtMzguMzRoMEwxODQsMTA3LjMxWiIvPjwvc3ZnPg==)
 */
export function PhArrowDownRightDuotoneIcon(props: PhArrowDownRightDuotoneIconProps) {
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
      <path d="M192,88V192H88Z" opacity="0.2"/><path d="M195.06,80.61a8,8,0,0,0-8.72,1.73L140,128.69,69.66,58.34A8,8,0,0,0,58.34,69.66L128.69,140,82.34,186.34A8,8,0,0,0,88,200H192a8,8,0,0,0,8-8V88A8,8,0,0,0,195.06,80.61ZM184,184H107.31l38.34-38.34h0L184,107.31Z"/>
    </svg>
  );
}
