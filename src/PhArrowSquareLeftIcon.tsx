import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowSquareLeftIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJabTAsMTc2SDQ4VjQ4SDIwOFpNODIuMzQsMTMzLjY2YTgsOCwwLDAsMSwwLTExLjMybDMyLTMyYTgsOCwwLDAsMSwxMS4zMiwxMS4zMkwxMDcuMzEsMTIwSDE2OGE4LDgsMCwwLDEsMCwxNkgxMDcuMzFsMTguMzUsMTguMzRhOCw4LDAsMCwxLTExLjMyLDExLjMyWiIvPjwvc3ZnPg==)
 */
export function PhArrowSquareLeftIcon(props: PhArrowSquareLeftIconProps) {
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
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208ZM82.34,133.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168a8,8,0,0,1,0,16H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32Z"/>
    </svg>
  );
}
