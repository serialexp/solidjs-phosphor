import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretDownDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsOTZsLTgwLDgwTDQ4LDk2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNS4zOSw5Mi45NEE4LDgsMCwwLDAsMjA4LDg4SDQ4YTgsOCwwLDAsMC01LjY2LDEzLjY2bDgwLDgwYTgsOCwwLDAsMCwxMS4zMiwwbDgwLTgwQTgsOCwwLDAsMCwyMTUuMzksOTIuOTRaTTEyOCwxNjQuNjksNjcuMzEsMTA0SDE4OC42OVoiLz48L3N2Zz4=)
 */
export function PhCaretDownDuotoneIcon(props: PhCaretDownDuotoneIconProps) {
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
      <path d="M208,96l-80,80L48,96Z" opacity="0.2"/><path d="M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"/>
    </svg>
  );
}
