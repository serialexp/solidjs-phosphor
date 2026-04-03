import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPenNibFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMzEsODEuMzYsMTc0LjYzLDEyLjY4YTE2LDE2LDAsMCwwLTIyLjYzLDBMMTIzLjU2LDQxLjEybC01OCwyMS43NkExNiwxNiwwLDAsMCw1NS4zNiw3NS4yM0wzNC41OSwxOTkuODNhNCw0LDAsMCwwLDYuNzcsMy40OWw1Ny01N2EyMy44NSwyMy44NSwwLDAsMS0yLjI5LTEyLjA4LDI0LDI0LDAsMSwxLDEzLjYsMjMuNGwtNTcsNTdhNCw0LDAsMCwwLDMuNDksNi43N2wxMjQuNjEtMjAuNzdhMTYsMTYsMCwwLDAsMTIuMzUtMTAuMTZsMjEuNzctNTguMDdMMjQzLjMxLDEwNGExNiwxNiwwLDAsMCwwLTIyLjYzWk0yMDgsMTE2LjY4LDEzOS4zMiw0OGwyNC0yNEwyMzIsOTIuNjhaIi8+PC9zdmc+)
 */
export function PhPenNibFillIcon(props: PhPenNibFillIconProps) {
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
      <path d="M243.31,81.36,174.63,12.68a16,16,0,0,0-22.63,0L123.56,41.12l-58,21.76A16,16,0,0,0,55.36,75.23L34.59,199.83a4,4,0,0,0,6.77,3.49l57-57a23.85,23.85,0,0,1-2.29-12.08,24,24,0,1,1,13.6,23.4l-57,57a4,4,0,0,0,3.49,6.77l124.61-20.77a16,16,0,0,0,12.35-10.16l21.77-58.07L243.31,104a16,16,0,0,0,0-22.63ZM208,116.68,139.32,48l24-24L232,92.68Z"/>
    </svg>
  );
}
