import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVectorThreeIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsMTQxLjY2bC0zMiwzMmE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMjEyLjY5LDE0NEgxMjMuMzFsLTU2LDU2SDk2YTgsOCwwLDAsMSwwLDE2SDQ4YTgsOCwwLDAsMS04LThWMTYwYTgsOCwwLDAsMSwxNiwwdjI4LjY5bDU2LTU2VjQzLjMxTDkzLjY2LDYxLjY2QTgsOCwwLDAsMSw4Mi4zNCw1MC4zNGwzMi0zMmE4LDgsMCwwLDEsMTEuMzIsMGwzMiwzMmE4LDgsMCwwLDEtMTEuMzIsMTEuMzJMMTI4LDQzLjMxVjEyOGg4NC42OWwtMTguMzUtMTguMzRhOCw4LDAsMCwxLDExLjMyLTExLjMybDMyLDMyQTgsOCwwLDAsMSwyMzcuNjYsMTQxLjY2WiIvPjwvc3ZnPg==)
 */
export function PhVectorThreeIcon(props: PhVectorThreeIconProps) {
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
      <path d="M237.66,141.66l-32,32a8,8,0,0,1-11.32-11.32L212.69,144H123.31l-56,56H96a8,8,0,0,1,0,16H48a8,8,0,0,1-8-8V160a8,8,0,0,1,16,0v28.69l56-56V43.31L93.66,61.66A8,8,0,0,1,82.34,50.34l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L128,43.31V128h84.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,141.66Z"/>
    </svg>
  );
}
