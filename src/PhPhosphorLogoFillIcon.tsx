import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPhosphorLogoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMzJINzJhOCw4LDAsMCwwLTgsOFYxNjhhODAuMDksODAuMDksMCwwLDAsODAsODAsOCw4LDAsMCwwLDgtOFYxNzZhNzIsNzIsMCwwLDAsMC0xNDRaTTEzNiwyMzEuNUE2NC4xNCw2NC4xNCwwLDAsMSw4MC41MSwxNzZIMTM2Wm0wLTk0TDg1LjY4LDQ4SDEzNlpNMTUyLDE2MFY0OGE1Niw1NiwwLDAsMSwwLDExMloiLz48L3N2Zz4=)
 */
export function PhPhosphorLogoFillIcon(props: PhPhosphorLogoFillIconProps) {
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
      <path d="M152,32H72a8,8,0,0,0-8,8V168a80.09,80.09,0,0,0,80,80,8,8,0,0,0,8-8V176a72,72,0,0,0,0-144ZM136,231.5A64.14,64.14,0,0,1,80.51,176H136Zm0-94L85.68,48H136ZM152,160V48a56,56,0,0,1,0,112Z"/>
    </svg>
  );
}
