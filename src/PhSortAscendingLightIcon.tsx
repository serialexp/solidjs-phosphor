import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSortAscendingLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjYsMTI4YTYsNiwwLDAsMS02LDZINDhhNiw2LDAsMCwxLDAtMTJoNzJBNiw2LDAsMCwxLDEyNiwxMjhaTTQ4LDcwSDE4NGE2LDYsMCwwLDAsMC0xMkg0OGE2LDYsMCwwLDAsMCwxMlptNTYsMTE2SDQ4YTYsNiwwLDAsMCwwLDEyaDU2YTYsNiwwLDAsMCwwLTEyWm0xMjQuMjQtMjIuMjRhNiw2LDAsMCwwLTguNDgsMEwxOTAsMTkzLjUxVjExMmE2LDYsMCwwLDAtMTIsMHY4MS41MWwtMjkuNzYtMjkuNzVhNiw2LDAsMCwwLTguNDgsOC40OGw0MCw0MGE2LDYsMCwwLDAsOC40OCwwbDQwLTQwQTYsNiwwLDAsMCwyMjguMjQsMTYzLjc2WiIvPjwvc3ZnPg==)
 */
export function PhSortAscendingLightIcon(props: PhSortAscendingLightIconProps) {
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
      <path d="M126,128a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12h72A6,6,0,0,1,126,128ZM48,70H184a6,6,0,0,0,0-12H48a6,6,0,0,0,0,12Zm56,116H48a6,6,0,0,0,0,12h56a6,6,0,0,0,0-12Zm124.24-22.24a6,6,0,0,0-8.48,0L190,193.51V112a6,6,0,0,0-12,0v81.51l-29.76-29.75a6,6,0,0,0-8.48,8.48l40,40a6,6,0,0,0,8.48,0l40-40A6,6,0,0,0,228.24,163.76Z"/>
    </svg>
  );
}
