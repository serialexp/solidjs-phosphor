import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAirplaneTiltFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUuNTIsMTk3LjI2YTgsOCwwLDAsMS0xLjg2LDguMzlsLTI0LDI0QTgsOCwwLDAsMSwxODQsMjMyYTcuMDksNy4wOSwwLDAsMS0uNzksMCw4LDgsMCwwLDEtNS44Ny0zLjUybC00NC4wNy02Ni4xMkwxMTIsMTgzLjU5VjIwOGE4LDgsMCwwLDEtMi4zNCw1LjY1cy0xNCwxNC4wNi0xNS44OCwxNS44OEE3LjkxLDcuOTEsMCwwLDEsOTEsMjMxLjQxYTgsOCwwLDAsMS0xMC40MS00LjM1bC0uMDYtLjE1LTE0LjctMzYuNzZMMjksMTc1LjQyYTgsOCwwLDAsMS0yLjY5LTEzLjA4bDE2LTE2QTgsOCwwLDAsMSw0OCwxNDRINzIuNGwyMS4yNy0yMS4yN0wyNy41Niw3OC42NWE4LDgsMCwwLDEtMS4yMi0xMi4zMmwyNC0yNGE4LDgsMCwwLDEsOC4zOS0xLjg2bDg1Ljk0LDMxLjI1TDE3Ni4yLDQwLjE5YTI4LDI4LDAsMCwxLDM5LjYsMzkuNmwtMzEuNTMsMzEuNTNaIi8+PC9zdmc+)
 */
export function PhAirplaneTiltFillIcon(props: PhAirplaneTiltFillIconProps) {
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
      <path d="M215.52,197.26a8,8,0,0,1-1.86,8.39l-24,24A8,8,0,0,1,184,232a7.09,7.09,0,0,1-.79,0,8,8,0,0,1-5.87-3.52l-44.07-66.12L112,183.59V208a8,8,0,0,1-2.34,5.65s-14,14.06-15.88,15.88A7.91,7.91,0,0,1,91,231.41a8,8,0,0,1-10.41-4.35l-.06-.15-14.7-36.76L29,175.42a8,8,0,0,1-2.69-13.08l16-16A8,8,0,0,1,48,144H72.4l21.27-21.27L27.56,78.65a8,8,0,0,1-1.22-12.32l24-24a8,8,0,0,1,8.39-1.86l85.94,31.25L176.2,40.19a28,28,0,0,1,39.6,39.6l-31.53,31.53Z"/>
    </svg>
  );
}
