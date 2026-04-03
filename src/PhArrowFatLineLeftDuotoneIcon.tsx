import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLineLeftDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsODB2OTZIMTIwdjQ4TDI0LDEyOGw5Ni05NlY4MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xODQsNzJIMTI4VjMyYTgsOCwwLDAsMC0xMy42Ni01LjY2bC05Niw5NmE4LDgsMCwwLDAsMCwxMS4zMmw5Niw5NkE4LDgsMCwwLDAsMTI4LDIyNFYxODRoNTZhOCw4LDAsMCwwLDgtOFY4MEE4LDgsMCwwLDAsMTg0LDcyWm0tOCw5NkgxMjBhOCw4LDAsMCwwLTgsOHYyOC42OUwzNS4zMSwxMjgsMTEyLDUxLjMxVjgwYTgsOCwwLDAsMCw4LDhoNTZabTQ4LTg4djk2YTgsOCwwLDAsMS0xNiwwVjgwYTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowFatLineLeftDuotoneIcon(props: PhArrowFatLineLeftDuotoneIconProps) {
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
      <path d="M184,80v96H120v48L24,128l96-96V80Z" opacity="0.2"/><path d="M184,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h56a8,8,0,0,0,8-8V80A8,8,0,0,0,184,72Zm-8,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h56Zm48-88v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
