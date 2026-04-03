import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVaultDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhINDBhOCw4LDAsMCwwLTgsOFYxOTJhOCw4LDAsMCwwLDgsOEgyMTZhOCw4LDAsMCwwLDgtOFY1NkE4LDgsMCwwLDAsMjE2LDQ4Wk0xNTIsMTY4YTQwLDQwLDAsMSwxLDQwLTQwQTQwLDQwLDAsMCwxLDE1MiwxNjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE2LDQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjE5MmExNiwxNiwwLDAsMCwxNiwxNkg1NnYxNmE4LDgsMCwwLDAsMTYsMFYyMDhIMTg0djE2YTgsOCwwLDAsMCwxNiwwVjIwOGgxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabTAsMTUySDQwVjU2SDIxNnY2NEgxOTkuMzJhNDgsNDgsMCwxLDAsMCwxNkgyMTZ2NTZabS01MC4xNi03MmExNiwxNiwwLDEsMCwwLDE2SDE4M2EzMiwzMiwwLDEsMSwwLTE2WiIvPjwvc3ZnPg==)
 */
export function PhVaultDuotoneIcon(props: PhVaultDuotoneIconProps) {
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
      <path d="M216,48H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM152,168a40,40,0,1,1,40-40A40,40,0,0,1,152,168Z" opacity="0.2"/><path d="M216,40H40A16,16,0,0,0,24,56V192a16,16,0,0,0,16,16H56v16a8,8,0,0,0,16,0V208H184v16a8,8,0,0,0,16,0V208h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,152H40V56H216v64H199.32a48,48,0,1,0,0,16H216v56Zm-50.16-72a16,16,0,1,0,0,16H183a32,32,0,1,1,0-16Z"/>
    </svg>
  );
}
