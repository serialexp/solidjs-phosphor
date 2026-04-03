import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPenIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuMzIsNzMuMzcsMTgyLjYzLDI4LjY5YTE2LDE2LDAsMCwwLTIyLjYzLDBMMzYuNjksMTUyQTE1Ljg2LDE1Ljg2LDAsMCwwLDMyLDE2My4zMVYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIOTIuNjlBMTUuODYsMTUuODYsMCwwLDAsMTA0LDIxOS4zMWw4My42Ny04My42NiwzLjQ4LDEzLjktMzYuOCwzNi43OWE4LDgsMCwwLDAsMTEuMzEsMTEuMzJsNDAtNDBhOCw4LDAsMCwwLDIuMTEtNy42bC02LjktMjcuNjFMMjI3LjMyLDk2QTE2LDE2LDAsMCwwLDIyNy4zMiw3My4zN1pNNDgsMTc5LjMxLDc2LjY5LDIwOEg0OFptNDgsMjUuMzhMNTEuMzEsMTYwLDEzNiw3NS4zMSwxODAuNjksMTIwWm05Ni05NkwxNDcuMzIsNjRsMjQtMjRMMjE2LDg0LjY5WiIvPjwvc3ZnPg==)
 */
export function PhPenIcon(props: PhPenIconProps) {
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
      <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31l83.67-83.66,3.48,13.9-36.8,36.79a8,8,0,0,0,11.31,11.32l40-40a8,8,0,0,0,2.11-7.6l-6.9-27.61L227.32,96A16,16,0,0,0,227.32,73.37ZM48,179.31,76.69,208H48Zm48,25.38L51.31,160,136,75.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z"/>
    </svg>
  );
}
