import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBeerSteinLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsOTBIMTk4VjcyYTM4LDM4LDAsMCwwLTM4LTM4SDE0OC4wN0MxMzYuNDcsMjMuOCwxMjAuNTYsMTgsMTA0LDE4LDY5LjgxLDE4LDQyLDQyLjIyLDQyLDcyVjIwOGExNCwxNCwwLDAsMCwxNCwxNEgxODRhMTQsMTQsMCwwLDAsMTQtMTRWMTk4aDE4YTIyLDIyLDAsMCwwLDIyLTIyVjExMkEyMiwyMiwwLDAsMCwyMTYsOTBaTTEwNCwzMGMxNC4zOCwwLDI4LjA4LDUuMjIsMzcuNTksMTQuMzNBNiw2LDAsMCwwLDE0NS43NCw0NkgxNjBhMjYsMjYsMCwwLDEsMjUuMjksMjBINTQuNTJDNTgsNDUuNjcsNzguODYsMzAsMTA0LDMwWm04MiwxNzhhMiwyLDAsMCwxLTIsMkg1NmEyLDIsMCwwLDEtMi0yVjc4SDE4NlptNDAtMzJhMTAsMTAsMCwwLDEtMTAsMTBIMTk4VjEwMmgxOGExMCwxMCwwLDAsMSwxMCwxMFpNMTAyLDEwNHY4MGE2LDYsMCwwLDEtMTIsMFYxMDRhNiw2LDAsMCwxLDEyLDBabTQ4LDB2ODBhNiw2LDAsMCwxLTEyLDBWMTA0YTYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 */
export function PhBeerSteinLightIcon(props: PhBeerSteinLightIconProps) {
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
      <path d="M216,90H198V72a38,38,0,0,0-38-38H148.07C136.47,23.8,120.56,18,104,18,69.81,18,42,42.22,42,72V208a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V198h18a22,22,0,0,0,22-22V112A22,22,0,0,0,216,90ZM104,30c14.38,0,28.08,5.22,37.59,14.33A6,6,0,0,0,145.74,46H160a26,26,0,0,1,25.29,20H54.52C58,45.67,78.86,30,104,30Zm82,178a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V78H186Zm40-32a10,10,0,0,1-10,10H198V102h18a10,10,0,0,1,10,10ZM102,104v80a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v80a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
