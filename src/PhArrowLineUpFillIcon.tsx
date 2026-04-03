import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineUpFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuNjYsMTM4LjM0QTgsOCwwLDAsMSwyMDAsMTUySDEzNnY3MmE4LDgsMCwwLDEtMTYsMFYxNTJINTZhOCw4LDAsMCwxLTUuNjYtMTMuNjZsNzItNzJhOCw4LDAsMCwxLDExLjMyLDBaTTIxNiwzMkg0MGE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 */
export function PhArrowLineUpFillIcon(props: PhArrowLineUpFillIconProps) {
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
      <path d="M205.66,138.34A8,8,0,0,1,200,152H136v72a8,8,0,0,1-16,0V152H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0ZM216,32H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
