import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMapTrifoldLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuNjksNTEuMjdhNiw2LDAsMCwwLTUuMTUtMS4wOUwxNjAuNyw2NS42NGwtNjItMzFhNiw2LDAsMCwwLTQuMTQtLjQ1bC02NCwxNkE2LDYsMCwwLDAsMjYsNTZWMjAwYTYsNiwwLDAsMCw3LjQ2LDUuODJMOTUuMywxOTAuMzZsNjIsMzFhNiw2LDAsMCwwLDQuMTQuNDVsNjQtMTZBNiw2LDAsMCwwLDIzMCwyMDBWNTZBNiw2LDAsMCwwLDIyNy42OSw1MS4yN1pNMTAyLDQ5LjcxbDUyLDI2VjIwNi4yOWwtNTItMjZabS02NCwxMSw1Mi0xM1YxNzkuMzJsLTUyLDEzWk0yMTgsMTk1LjMybC01MiwxM1Y3Ni42OGw1Mi0xM1oiLz48L3N2Zz4=)
 */
export function PhMapTrifoldLightIcon(props: PhMapTrifoldLightIconProps) {
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
      <path d="M227.69,51.27a6,6,0,0,0-5.15-1.09L160.7,65.64l-62-31a6,6,0,0,0-4.14-.45l-64,16A6,6,0,0,0,26,56V200a6,6,0,0,0,7.46,5.82L95.3,190.36l62,31a6,6,0,0,0,4.14.45l64-16A6,6,0,0,0,230,200V56A6,6,0,0,0,227.69,51.27ZM102,49.71l52,26V206.29l-52-26Zm-64,11,52-13V179.32l-52,13ZM218,195.32l-52,13V76.68l52-13Z"/>
    </svg>
  );
}
