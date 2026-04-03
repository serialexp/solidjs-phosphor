import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSplitHorizontalThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsNDhWMjA4YTQsNCwwLDAsMS04LDBWMTMySDMzLjY2bDI1LjE3LDI1LjE3YTQsNCwwLDAsMS01LjY2LDUuNjZsLTMyLTMyYTQsNCwwLDAsMSwwLTUuNjZsMzItMzJhNCw0LDAsMCwxLDUuNjYsNS42NkwzMy42NiwxMjRIMTAwVjQ4YTQsNCwwLDAsMSw4LDBabTEyNi44Myw3Ny4xNy0zMi0zMmE0LDQsMCwwLDAtNS42Niw1LjY2TDIyMi4zNCwxMjRIMTU2VjQ4YTQsNCwwLDAsMC04LDBWMjA4YTQsNCwwLDAsMCw4LDBWMTMyaDY2LjM0bC0yNS4xNywyNS4xN2E0LDQsMCwwLDAsNS42Niw1LjY2bDMyLTMyQTQsNCwwLDAsMCwyMzQuODMsMTI1LjE3WiIvPjwvc3ZnPg==)
 */
export function PhSplitHorizontalThinIcon(props: PhSplitHorizontalThinIconProps) {
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
      <path d="M108,48V208a4,4,0,0,1-8,0V132H33.66l25.17,25.17a4,4,0,0,1-5.66,5.66l-32-32a4,4,0,0,1,0-5.66l32-32a4,4,0,0,1,5.66,5.66L33.66,124H100V48a4,4,0,0,1,8,0Zm126.83,77.17-32-32a4,4,0,0,0-5.66,5.66L222.34,124H156V48a4,4,0,0,0-8,0V208a4,4,0,0,0,8,0V132h66.34l-25.17,25.17a4,4,0,0,0,5.66,5.66l32-32A4,4,0,0,0,234.83,125.17Z"/>
    </svg>
  );
}
