import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLinesLeftIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsNzJIMTI4VjMyYTgsOCwwLDAsMC0xMy42Ni01LjY2bC05Niw5NmE4LDgsMCwwLDAsMCwxMS4zMmw5Niw5NkE4LDgsMCwwLDAsMTI4LDIyNFYxODRoMjRhOCw4LDAsMCwwLDgtOFY4MEE4LDgsMCwwLDAsMTUyLDcyWm0tOCw5NkgxMjBhOCw4LDAsMCwwLTgsOHYyOC42OUwzNS4zMSwxMjgsMTEyLDUxLjMxVjgwYTgsOCwwLDAsMCw4LDhoMjRabTgwLTg4djk2YTgsOCwwLDAsMS0xNiwwVjgwYTgsOCwwLDAsMSwxNiwwWm0tMzIsMHY5NmE4LDgsMCwwLDEtMTYsMFY4MGE4LDgsMCwwLDEsMTYsMFoiLz48L3N2Zz4=)
 */
export function PhArrowFatLinesLeftIcon(props: PhArrowFatLinesLeftIconProps) {
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
      <path d="M152,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h24a8,8,0,0,0,8-8V80A8,8,0,0,0,152,72Zm-8,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h24Zm80-88v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm-32,0v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
