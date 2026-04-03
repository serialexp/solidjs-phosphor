import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsOutLineVerticalLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMTI4YTYsNiwwLDAsMS02LDZINDBhNiw2LDAsMCwxLDAtMTJIMjE2QTYsNiwwLDAsMSwyMjIsMTI4Wk0xMDAuMjQsNTIuMjQsMTIyLDMwLjQ5Vjk2YTYsNiwwLDAsMCwxMiwwVjMwLjQ5bDIxLjc2LDIxLjc1YTYsNiwwLDAsMCw4LjQ4LTguNDhsLTMyLTMyYTYsNiwwLDAsMC04LjQ4LDBsLTMyLDMyYTYsNiwwLDAsMCw4LjQ4LDguNDhabTU1LjUyLDE1MS41MkwxMzQsMjI1LjUxVjE2MGE2LDYsMCwwLDAtMTIsMHY2NS41MWwtMjEuNzYtMjEuNzVhNiw2LDAsMCwwLTguNDgsOC40OGwzMiwzMmE2LDYsMCwwLDAsOC40OCwwbDMyLTMyYTYsNiwwLDAsMC04LjQ4LTguNDhaIi8+PC9zdmc+)
 */
export function PhArrowsOutLineVerticalLightIcon(props: PhArrowsOutLineVerticalLightIconProps) {
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
      <path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM100.24,52.24,122,30.49V96a6,6,0,0,0,12,0V30.49l21.76,21.75a6,6,0,0,0,8.48-8.48l-32-32a6,6,0,0,0-8.48,0l-32,32a6,6,0,0,0,8.48,8.48Zm55.52,151.52L134,225.51V160a6,6,0,0,0-12,0v65.51l-21.76-21.75a6,6,0,0,0-8.48,8.48l32,32a6,6,0,0,0,8.48,0l32-32a6,6,0,0,0-8.48-8.48Z"/>
    </svg>
  );
}
