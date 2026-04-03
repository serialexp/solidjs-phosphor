import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBellFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuOCwxNzUuOTRDMjE2LjI1LDE2Ni4zOCwyMDgsMTM5LjMzLDIwOCwxMDRhODAsODAsMCwxLDAtMTYwLDBjMCwzNS4zNC04LjI2LDYyLjM4LTEzLjgxLDcxLjk0QTE2LDE2LDAsMCwwLDQ4LDIwMEg4OC44MWE0MCw0MCwwLDAsMCw3OC4zOCwwSDIwOGExNiwxNiwwLDAsMCwxMy44LTI0LjA2Wk0xMjgsMjE2YTI0LDI0LDAsMCwxLTIyLjYyLTE2aDQ1LjI0QTI0LDI0LDAsMCwxLDEyOCwyMTZaIi8+PC9zdmc+)
 */
export function PhBellFillIcon(props: PhBellFillIconProps) {
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
      <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z"/>
    </svg>
  );
}
