import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPencilIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuMzEsNzMuMzcsMTgyLjYzLDI4LjY4YTE2LDE2LDAsMCwwLTIyLjYzLDBMMzYuNjksMTUyQTE1Ljg2LDE1Ljg2LDAsMCwwLDMyLDE2My4zMVYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIOTIuNjlBMTUuODYsMTUuODYsMCwwLDAsMTA0LDIxOS4zMUwyMjcuMzEsOTZhMTYsMTYsMCwwLDAsMC0yMi42M1pNNTEuMzEsMTYwLDEzNiw3NS4zMSwxNTIuNjksOTIsNjgsMTc2LjY4Wk00OCwxNzkuMzEsNzYuNjksMjA4SDQ4Wm00OCwyNS4zOEw3OS4zMSwxODgsMTY0LDEwMy4zMSwxODAuNjksMTIwWm05Ni05NkwxNDcuMzEsNjRsMjQtMjRMMjE2LDg0LjY4WiIvPjwvc3ZnPg==)
 */
export function PhPencilIcon(props: PhPencilIconProps) {
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
      <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z"/>
    </svg>
  );
}
