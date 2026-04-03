import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDropSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzQsNDcuNzVhMjU0LjE5LDI1NC4xOSwwLDAsMC00MS40NS0zOC4zLDgsOCwwLDAsMC05LjE4LDBBMjU0LjE5LDI1NC4xOSwwLDAsMCw4Miw0Ny43NUM1NC41MSw3OS4zMiw0MCwxMTIuNiw0MCwxNDRhODgsODgsMCwwLDAsMTc2LDBDMjE2LDExMi42LDIwMS40OSw3OS4zMiwxNzQsNDcuNzVaTTEyOCwyMTZhNzIuMDgsNzIuMDgsMCwwLDEtNzItNzJjMC01Ny4yMyw1NS40Ny0xMDUsNzItMTE4LDE2LjUzLDEzLDcyLDYwLjc1LDcyLDExOEE3Mi4wOCw3Mi4wOCwwLDAsMSwxMjgsMjE2WiIvPjwvc3ZnPg==)
 */
export function PhDropSimpleIcon(props: PhDropSimpleIconProps) {
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
      <path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Z"/>
    </svg>
  );
}
