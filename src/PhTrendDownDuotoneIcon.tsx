import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrendDownDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTI4djY0SDE2OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzUuMDYsMTIwLjYxYTgsOCwwLDAsMC04LjcyLDEuNzNMMjAwLDE0OC42OSwxNDEuNjYsOTAuMzRhOCw4LDAsMCwwLTExLjMyLDBMOTYsMTI0LjY5LDI5LjY2LDU4LjM0QTgsOCwwLDAsMCwxOC4zNCw2OS42Nmw3Miw3MmE4LDgsMCwwLDAsMTEuMzIsMEwxMzYsMTA3LjMxLDE4OC42OSwxNjBsLTI2LjM1LDI2LjM0QTgsOCwwLDAsMCwxNjgsMjAwaDY0YTgsOCwwLDAsMCw4LThWMTI4QTgsOCwwLDAsMCwyMzUuMDYsMTIwLjYxWk0yMjQsMTg0SDE4Ny4zMUwyMjQsMTQ3LjMxWiIvPjwvc3ZnPg==)
 */
export function PhTrendDownDuotoneIcon(props: PhTrendDownDuotoneIconProps) {
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
      <path d="M232,128v64H168Z" opacity="0.2"/><path d="M235.06,120.61a8,8,0,0,0-8.72,1.73L200,148.69,141.66,90.34a8,8,0,0,0-11.32,0L96,124.69,29.66,58.34A8,8,0,0,0,18.34,69.66l72,72a8,8,0,0,0,11.32,0L136,107.31,188.69,160l-26.35,26.34A8,8,0,0,0,168,200h64a8,8,0,0,0,8-8V128A8,8,0,0,0,235.06,120.61ZM224,184H187.31L224,147.31Z"/>
    </svg>
  );
}
