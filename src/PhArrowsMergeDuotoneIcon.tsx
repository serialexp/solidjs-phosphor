import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsMergeDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDB2NjRsLTU2LDU2TDcyLDEwNFY0MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xOTIsNDB2NjRhOCw4LDAsMCwxLTIuMzQsNS42NkwxMzYsMTYzLjMxdjQ5LjM4bDE4LjM0LTE4LjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMmwtMzIsMzJhOCw4LDAsMCwxLTExLjMyLDBsLTMyLTMyYTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxMjAsMjEyLjY5VjE2My4zMUw2Ni4zNCwxMDkuNjZBOCw4LDAsMCwxLDY0LDEwNFY0MGE4LDgsMCwwLDEsMTYsMHY2MC42OWw0OCw0OCw0OC00OFY0MGE4LDgsMCwwLDEsMTYsMFoiLz48L3N2Zz4=)
 */
export function PhArrowsMergeDuotoneIcon(props: PhArrowsMergeDuotoneIconProps) {
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
      <path d="M184,40v64l-56,56L72,104V40Z" opacity="0.2"/><path d="M192,40v64a8,8,0,0,1-2.34,5.66L136,163.31v49.38l18.34-18.35a8,8,0,0,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,212.69V163.31L66.34,109.66A8,8,0,0,1,64,104V40a8,8,0,0,1,16,0v60.69l48,48,48-48V40a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
