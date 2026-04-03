import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMapTrifoldThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjYuNDYsNTIuODVhNCw0LDAsMCwwLTMuNDMtLjczTDE2MC40Nyw2Ny43Niw5Ny43OSwzNi40MmE0LDQsMCwwLDAtMi43Ni0uM2wtNjQsMTZBNCw0LDAsMCwwLDI4LDU2VjIwMGE0LDQsMCwwLDAsNSwzLjg4bDYyLjU2LTE1LjY0LDYyLjY4LDMxLjM0YTQsNCwwLDAsMCwyLjc2LjNsNjQtMTZhNCw0LDAsMCwwLDMtMy44OFY1NkE0LDQsMCwwLDAsMjI2LjQ2LDUyLjg1Wk0xMDAsNDYuNDdsNTYsMjhWMjA5LjUzbC01Ni0yOFpNMzYsNTkuMTJsNTYtMTRWMTgwLjg4bC01NiwxNFpNMjIwLDE5Ni44OGwtNTYsMTRWNzUuMTJsNTYtMTRaIi8+PC9zdmc+)
 */
export function PhMapTrifoldThinIcon(props: PhMapTrifoldThinIconProps) {
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
      <path d="M226.46,52.85a4,4,0,0,0-3.43-.73L160.47,67.76,97.79,36.42a4,4,0,0,0-2.76-.3l-64,16A4,4,0,0,0,28,56V200a4,4,0,0,0,5,3.88l62.56-15.64,62.68,31.34a4,4,0,0,0,2.76.3l64-16a4,4,0,0,0,3-3.88V56A4,4,0,0,0,226.46,52.85ZM100,46.47l56,28V209.53l-56-28ZM36,59.12l56-14V180.88l-56,14ZM220,196.88l-56,14V75.12l56-14Z"/>
    </svg>
  );
}
