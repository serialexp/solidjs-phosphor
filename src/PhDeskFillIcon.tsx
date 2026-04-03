import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeskFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsNjRIOEE4LDgsMCwwLDAsOCw4MGg4VjE5MmE4LDgsMCwwLDAsMTYsMFYxNDRIMjI0djQ4YTgsOCwwLDAsMCwxNiwwVjgwaDhhOCw4LDAsMCwwLDAtMTZaTTgwLDExMkg1NmE4LDgsMCwwLDEsMC0xNkg4MGE4LDgsMCwwLDEsMCwxNlptNTYsOGE4LDgsMCwwLDEtMTYsMFY4OGE4LDgsMCwwLDEsMTYsMFptNjQtOEgxNzZhOCw4LDAsMCwxLDAtMTZoMjRhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 */
export function PhDeskFillIcon(props: PhDeskFillIconProps) {
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
      <path d="M248,64H8A8,8,0,0,0,8,80h8V192a8,8,0,0,0,16,0V144H224v48a8,8,0,0,0,16,0V80h8a8,8,0,0,0,0-16ZM80,112H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm56,8a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm64-8H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
