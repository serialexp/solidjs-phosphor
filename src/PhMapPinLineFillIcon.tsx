import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMapPinLineFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjI0SDE1MC41NEEyNjYuNTYsMjY2LjU2LDAsMCwwLDE3NCwyMDAuMjVjMjcuNDUtMzEuNTcsNDItNjQuODUsNDItOTYuMjVhODgsODgsMCwwLDAtMTc2LDBjMCwzMS40LDE0LjUxLDY0LjY4LDQyLDk2LjI1QTI2Ni41NiwyNjYuNTYsMCwwLDAsMTA1LjQ2LDIyNEg1NmE4LDgsMCwwLDAsMCwxNkgyMDBhOCw4LDAsMCwwLDAtMTZaTTEyOCw3MmEzMiwzMiwwLDEsMS0zMiwzMkEzMiwzMiwwLDAsMSwxMjgsNzJaIi8+PC9zdmc+)
 */
export function PhMapPinLineFillIcon(props: PhMapPinLineFillIconProps) {
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
      <path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM128,72a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"/>
    </svg>
  );
}
