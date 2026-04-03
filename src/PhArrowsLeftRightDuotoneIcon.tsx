import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsLeftRightDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODB2OTZINDhWODBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjEzLjY2LDE4MS42NmwtMzIsMzJhOCw4LDAsMCwxLTExLjMyLTExLjMyTDE4OC42OSwxODRINDhhOCw4LDAsMCwxLDAtMTZIMTg4LjY5bC0xOC4zNS0xOC4zNGE4LDgsMCwwLDEsMTEuMzItMTEuMzJsMzIsMzJBOCw4LDAsMCwxLDIxMy42NiwxODEuNjZabS0xMzkuMzItNjRhOCw4LDAsMCwwLDExLjMyLTExLjMyTDY3LjMxLDg4SDIwOGE4LDgsMCwwLDAsMC0xNkg2Ny4zMUw4NS42Niw1My42NkE4LDgsMCwwLDAsNzQuMzQsNDIuMzRsLTMyLDMyYTgsOCwwLDAsMCwwLDExLjMyWiIvPjwvc3ZnPg==)
 */
export function PhArrowsLeftRightDuotoneIcon(props: PhArrowsLeftRightDuotoneIconProps) {
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
      <path d="M208,80v96H48V80Z" opacity="0.2"/><path d="M213.66,181.66l-32,32a8,8,0,0,1-11.32-11.32L188.69,184H48a8,8,0,0,1,0-16H188.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,213.66,181.66Zm-139.32-64a8,8,0,0,0,11.32-11.32L67.31,88H208a8,8,0,0,0,0-16H67.31L85.66,53.66A8,8,0,0,0,74.34,42.34l-32,32a8,8,0,0,0,0,11.32Z"/>
    </svg>
  );
}
