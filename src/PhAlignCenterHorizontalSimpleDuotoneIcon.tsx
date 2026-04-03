import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignCenterHorizontalSimpleDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsOTZ2NjRhOCw4LDAsMCwxLTgsOEg0OGE4LDgsMCwwLDEtOC04Vjk2YTgsOCwwLDAsMSw4LThIMjA4QTgsOCwwLDAsMSwyMTYsOTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDgwSDEzNlY0OGE4LDgsMCwwLDAtMTYsMFY4MEg0OEExNiwxNiwwLDAsMCwzMiw5NnY2NGExNiwxNiwwLDAsMCwxNiwxNmg3MnYzMmE4LDgsMCwwLDAsMTYsMFYxNzZoNzJhMTYsMTYsMCwwLDAsMTYtMTZWOTZBMTYsMTYsMCwwLDAsMjA4LDgwWm0wLDgwSDQ4Vjk2SDIwOHY2NFoiLz48L3N2Zz4=)
 */
export function PhAlignCenterHorizontalSimpleDuotoneIcon(props: PhAlignCenterHorizontalSimpleDuotoneIconProps) {
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
      <path d="M216,96v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z" opacity="0.2"/><path d="M208,80H136V48a8,8,0,0,0-16,0V80H48A16,16,0,0,0,32,96v64a16,16,0,0,0,16,16h72v32a8,8,0,0,0,16,0V176h72a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,80H48V96H208v64Z"/>
    </svg>
  );
}
