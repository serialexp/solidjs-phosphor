import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineUpThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDIuODMsMTQxLjE3YTQsNCwwLDAsMS01LjY2LDUuNjZMMTMyLDgxLjY2VjIyNGE0LDQsMCwwLDEtOCwwVjgxLjY2TDU4LjgzLDE0Ni44M2E0LDQsMCwwLDEtNS42Ni01LjY2bDcyLTcyYTQsNCwwLDAsMSw1LjY2LDBaTTIxNiwzNkg0MGE0LDQsMCwwLDAsMCw4SDIxNmE0LDQsMCwwLDAsMC04WiIvPjwvc3ZnPg==)
 */
export function PhArrowLineUpThinIcon(props: PhArrowLineUpThinIconProps) {
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
      <path d="M202.83,141.17a4,4,0,0,1-5.66,5.66L132,81.66V224a4,4,0,0,1-8,0V81.66L58.83,146.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0ZM216,36H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
