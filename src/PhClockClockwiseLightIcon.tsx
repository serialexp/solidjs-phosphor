import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhClockClockwiseLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzQsODB2NDQuNmwzNy4wOSwyMi4yNWE2LDYsMCwwLDEtNi4xOCwxMC4zbC00MC0yNEE2LDYsMCwwLDEsMTIyLDEyOFY4MGE2LDYsMCwwLDEsMTIsMFptOTAtMjJhNiw2LDAsMCwwLTYsNlY4Ny4zNmMtNy40OC04LjgzLTE0Ljk0LTE3LjEzLTIzLjUzLTI1LjgzYTk0LDk0LDAsMSwwLTEuOTUsMTM0LjgzLDYsNiwwLDAsMC04LjI0LTguNzJBODIsODIsMCwxLDEsMTg2LDcwYzkuMjQsOS4zNiwxNy4xOCwxOC4zLDI1LjMxLDI4SDE4NGE2LDYsMCwwLDAsMCwxMmg0MGE2LDYsMCwwLDAsNi02VjY0QTYsNiwwLDAsMCwyMjQsNThaIi8+PC9zdmc+)
 */
export function PhClockClockwiseLightIcon(props: PhClockClockwiseLightIconProps) {
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
      <path d="M134,80v44.6l37.09,22.25a6,6,0,0,1-6.18,10.3l-40-24A6,6,0,0,1,122,128V80a6,6,0,0,1,12,0Zm90-22a6,6,0,0,0-6,6V87.36c-7.48-8.83-14.94-17.13-23.53-25.83a94,94,0,1,0-1.95,134.83,6,6,0,0,0-8.24-8.72A82,82,0,1,1,186,70c9.24,9.36,17.18,18.3,25.31,28H184a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V64A6,6,0,0,0,224,58Z"/>
    </svg>
  );
}
