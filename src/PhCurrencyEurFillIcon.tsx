import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyEurFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDgwYTgsOCwwLDAsMSwwLDE2SDg4djE2aDI0YTgsOCwwLDAsMSwwLDE2SDg4LjgxYTQwLDQwLDAsMCwwLDY1Ljg2LDIxLjgyLDgsOCwwLDEsMSwxMC42NiwxMS45MkE1Niw1NiwwLDAsMSw3Mi41OCwxNTJINjRhOCw4LDAsMCwxLDAtMTZoOFYxMjBINjRhOCw4LDAsMCwxLDAtMTZoOC41OGE1Niw1NiwwLDAsMSw5Mi43NS0zMy43NCw4LDgsMCwxLDEtMTAuNjYsMTEuOTJBNDAsNDAsMCwwLDAsODguODEsMTA0WiIvPjwvc3ZnPg==)
 */
export function PhCurrencyEurFillIcon(props: PhCurrencyEurFillIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,80a8,8,0,0,1,0,16H88v16h24a8,8,0,0,1,0,16H88.81a40,40,0,0,0,65.86,21.82,8,8,0,1,1,10.66,11.92A56,56,0,0,1,72.58,152H64a8,8,0,0,1,0-16h8V120H64a8,8,0,0,1,0-16h8.58a56,56,0,0,1,92.75-33.74,8,8,0,1,1-10.66,11.92A40,40,0,0,0,88.81,104Z"/>
    </svg>
  );
}
