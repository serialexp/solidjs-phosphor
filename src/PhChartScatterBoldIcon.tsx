import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChartScatterBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMjA4YTEyLDEyLDAsMCwxLTEyLDEySDMyYTEyLDEyLDAsMCwxLTEyLTEyVjQ4YTEyLDEyLDAsMCwxLDI0LDBWMTk2SDIyNEExMiwxMiwwLDAsMSwyMzYsMjA4Wk0xMTYsMTQ4YTE2LDE2LDAsMSwwLDE2LTE2QTE2LDE2LDAsMCwwLDExNiwxNDhabS04LTQwQTE2LDE2LDAsMSwwLDkyLDkyLDE2LDE2LDAsMCwwLDEwOCwxMDhaTTc2LDE4MGExNiwxNiwwLDEsMC0xNi0xNkExNiwxNiwwLDAsMCw3NiwxODBabTk2LTQ4YTE2LDE2LDAsMSwwLTE2LTE2QTE2LDE2LDAsMCwwLDE3MiwxMzJabTI0LTQwYTE2LDE2LDAsMSwwLTE2LTE2QTE2LDE2LDAsMCwwLDE5Niw5MlptLTI0LDcyYTE2LDE2LDAsMSwwLDE2LTE2QTE2LDE2LDAsMCwwLDE3MiwxNjRaIi8+PC9zdmc+)
 */
export function PhChartScatterBoldIcon(props: PhChartScatterBoldIconProps) {
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
      <path d="M236,208a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V48a12,12,0,0,1,24,0V196H224A12,12,0,0,1,236,208ZM116,148a16,16,0,1,0,16-16A16,16,0,0,0,116,148Zm-8-40A16,16,0,1,0,92,92,16,16,0,0,0,108,108ZM76,180a16,16,0,1,0-16-16A16,16,0,0,0,76,180Zm96-48a16,16,0,1,0-16-16A16,16,0,0,0,172,132Zm24-40a16,16,0,1,0-16-16A16,16,0,0,0,196,92Zm-24,72a16,16,0,1,0,16-16A16,16,0,0,0,172,164Z"/>
    </svg>
  );
}
