import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLessThanIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDcuMjMsMjAzLjQyYTgsOCwwLDAsMS0xMC42NiwzLjgxbC0xNTItNzJhOCw4LDAsMCwxLDAtMTQuNDZsMTUyLTcyYTgsOCwwLDEsMSw2Ljg1LDE0LjQ2TDY2LjY5LDEyOGwxMzYuNzMsNjQuNzdBOCw4LDAsMCwxLDIwNy4yMywyMDMuNDJaIi8+PC9zdmc+)
 */
export function PhLessThanIcon(props: PhLessThanIconProps) {
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
      <path d="M207.23,203.42a8,8,0,0,1-10.66,3.81l-152-72a8,8,0,0,1,0-14.46l152-72a8,8,0,1,1,6.85,14.46L66.69,128l136.73,64.77A8,8,0,0,1,207.23,203.42Z"/>
    </svg>
  );
}
