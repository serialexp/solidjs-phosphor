import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhThumbsDownBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuNzgsMTU2LjUzbC0xMi05NkEyOCwyOCwwLDAsMCwyMDQsMzZIMzJBMjAsMjAsMCwwLDAsMTIsNTZ2ODhhMjAsMjAsMCwwLDAsMjAsMjBINzIuNThsMzYuNjksNzMuMzdBMTIsMTIsMCwwLDAsMTIwLDI0NGE0NC4wNSw0NC4wNSwwLDAsMCw0NC00NFYxODhoNTJhMjgsMjgsMCwwLDAsMjcuNzgtMzEuNDdaTTY4LDE0MEgzNlY2MEg2OFptMTUxLDIyLjY1YTQsNCwwLDAsMS0zLDEuMzVIMTUyYTEyLDEyLDAsMCwwLTEyLDEydjI0YTIwLDIwLDAsMCwxLTEzLjE4LDE4LjhMOTIsMTQ5LjE3VjYwSDIwNGE0LDQsMCwwLDEsNCwzLjVsMTIsOTZBNCw0LDAsMCwxLDIxOSwxNjIuNjVaIi8+PC9zdmc+)
 */
export function PhThumbsDownBoldIcon(props: PhThumbsDownBoldIconProps) {
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
      <path d="M243.78,156.53l-12-96A28,28,0,0,0,204,36H32A20,20,0,0,0,12,56v88a20,20,0,0,0,20,20H72.58l36.69,73.37A12,12,0,0,0,120,244a44.05,44.05,0,0,0,44-44V188h52a28,28,0,0,0,27.78-31.47ZM68,140H36V60H68Zm151,22.65a4,4,0,0,1-3,1.35H152a12,12,0,0,0-12,12v24a20,20,0,0,1-13.18,18.8L92,149.17V60H204a4,4,0,0,1,4,3.5l12,96A4,4,0,0,1,219,162.65Z"/>
    </svg>
  );
}
