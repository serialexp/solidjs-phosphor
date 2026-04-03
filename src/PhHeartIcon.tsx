import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHeartIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY2LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY2LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOEMxMDkuNzQsMjA0LjE2LDMyLDE1NS42OSwzMiwxMDJBNDYuMDYsNDYuMDYsMCwwLDEsNzgsNTZjMTkuNDUsMCwzNS43OCwxMC4zNiw0Mi42LDI3YTgsOCwwLDAsMCwxNC44LDBjNi44Mi0xNi42NywyMy4xNS0yNyw0Mi42LTI3YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI0LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+)
 */
export function PhHeartIcon(props: PhHeartIconProps) {
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
      <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"/>
    </svg>
  );
}
