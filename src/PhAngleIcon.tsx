import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAngleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05Niw3MmE4LDgsMCwwLDEsOC04QTEwNC4xMSwxMDQuMTEsMCwwLDEsMjA4LDE2OGE4LDgsMCwwLDEtMTYsMCw4OC4xLDg4LjEsMCwwLDAtODgtODhBOCw4LDAsMCwxLDk2LDcyWk0yNDAsMTkySDgwVjMyYTgsOCwwLDAsMC0xNiwwVjY0SDMyYTgsOCwwLDAsMCwwLDE2SDY0VjIwMGE4LDgsMCwwLDAsOCw4SDI0MGE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 */
export function PhAngleIcon(props: PhAngleIconProps) {
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
      <path d="M96,72a8,8,0,0,1,8-8A104.11,104.11,0,0,1,208,168a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88A8,8,0,0,1,96,72ZM240,192H80V32a8,8,0,0,0-16,0V64H32a8,8,0,0,0,0,16H64V200a8,8,0,0,0,8,8H240a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
