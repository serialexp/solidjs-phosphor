import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPhosphorLogoIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMzJINzJhOCw4LDAsMCwwLTgsOFYxNjhhODAuMDksODAuMDksMCwwLDAsODAsODAsOCw4LDAsMCwwLDgtOFYxNzZhNzIsNzIsMCwwLDAsMC0xNDRaTTgwLDcwLjU0LDEzMC4zMiwxNjBIODBabTU2LDY2LjkyTDg1LjY4LDQ4SDEzNlpNODAuNTEsMTc2SDEzNnY1NS41QTY0LjE0LDY0LjE0LDAsMCwxLDgwLjUxLDE3NlpNMTUyLDE2MFY0OGE1Niw1NiwwLDAsMSwwLDExMloiLz48L3N2Zz4=)
 */
export function PhPhosphorLogoIcon(props: PhPhosphorLogoIconProps) {
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
      <path d="M152,32H72a8,8,0,0,0-8,8V168a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V176a72,72,0,0,0,0-144ZM80,70.54,130.32,160H80Zm56,66.92L85.68,48H136ZM80.51,176H136v55.5A64.14,64.14,0,0,1,80.51,176ZM152,160V48a56,56,0,0,1,0,112Z"/>
    </svg>
  );
}
