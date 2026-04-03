import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberCircleNineFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDUuMzMsMTE4bDAsMEEyMCwyMCwwLDEsMSwxMzgsOTAuNjgsMjAsMjAsMCwwLDEsMTQ1LjMxLDExOFpNMjMyLDEyOEExMDQsMTA0LDAsMSwxLDEyOCwyNCwxMDQuMTEsMTA0LjExLDAsMCwxLDIzMiwxMjhaTTE0Niw3Ni44MkEzNiwzNiwwLDEsMCwxMjcuOTQsMTQ0cS45NCwwLDEuODktLjA2bC0xNi43LDI4YTgsOCwwLDAsMCwyLjc3LDExLDgsOCwwLDAsMCwxMS0yLjc3TDE1OS4xOCwxMjZBMzYuMDUsMzYuMDUsMCwwLDAsMTQ2LDc2LjgyWiIvPjwvc3ZnPg==)
 */
export function PhNumberCircleNineFillIcon(props: PhNumberCircleNineFillIconProps) {
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
      <path d="M145.33,118l0,0A20,20,0,1,1,138,90.68,20,20,0,0,1,145.31,118ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128ZM146,76.82A36,36,0,1,0,127.94,144q.94,0,1.89-.06l-16.7,28a8,8,0,0,0,2.77,11,8,8,0,0,0,11-2.77L159.18,126A36.05,36.05,0,0,0,146,76.82Z"/>
    </svg>
  );
}
