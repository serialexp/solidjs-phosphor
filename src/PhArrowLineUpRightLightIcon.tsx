import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineUpRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMjE2YTYsNiwwLDAsMS02LDZINDBhNiw2LDAsMCwxLDAtMTJIMjE2QTYsNiwwLDAsMSwyMjIsMjE2Wk04MCwxNzRhNiw2LDAsMCwwLDQuMjQtMS43NkwxODYsNzAuNDlWMTUyYTYsNiwwLDAsMCwxMiwwVjU2YTYsNiwwLDAsMC02LTZIOTZhNiw2LDAsMCwwLDAsMTJoODEuNTFMNzUuNzYsMTYzLjc2QTYsNiwwLDAsMCw4MCwxNzRaIi8+PC9zdmc+)
 */
export function PhArrowLineUpRightLightIcon(props: PhArrowLineUpRightLightIconProps) {
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
      <path d="M222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216ZM80,174a6,6,0,0,0,4.24-1.76L186,70.49V152a6,6,0,0,0,12,0V56a6,6,0,0,0-6-6H96a6,6,0,0,0,0,12h81.51L75.76,163.76A6,6,0,0,0,80,174Z"/>
    </svg>
  );
}
