import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTentDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTkySDhMNzIsNDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjU1LjMxLDE4OC43NWwtNjQtMTQ0QTgsOCwwLDAsMCwxODQsNDBINzJhOCw4LDAsMCwwLTcuMjcsNC42OS4yMS4yMSwwLDAsMCwwLC4wNmwwLC4xMiwwLDBMLjY5LDE4OC43NUE4LDgsMCwwLDAsOCwyMDBIMjQ4YTgsOCwwLDAsMCw3LjMxLTExLjI1Wk02NCwxODRIMjAuMzFMNjQsODUuN1ptMTYsMFY4NS43TDEyMy42OSwxODRabTYxLjIsMEw4NC4zMSw1NkgxNzguOGw1Ni44OSwxMjhaIi8+PC9zdmc+)
 */
export function PhTentDuotoneIcon(props: PhTentDuotoneIconProps) {
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
      <path d="M136,192H8L72,48Z" opacity="0.2"/><path d="M255.31,188.75l-64-144A8,8,0,0,0,184,40H72a8,8,0,0,0-7.27,4.69.21.21,0,0,0,0,.06l0,.12,0,0L.69,188.75A8,8,0,0,0,8,200H248a8,8,0,0,0,7.31-11.25ZM64,184H20.31L64,85.7Zm16,0V85.7L123.69,184Zm61.2,0L84.31,56H178.8l56.89,128Z"/>
    </svg>
  );
}
