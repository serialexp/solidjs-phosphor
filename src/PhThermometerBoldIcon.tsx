import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhThermometerBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsNTJhMzIsMzIsMCwxLDAsMzIsMzJBMzIsMzIsMCwwLDAsMjEyLDUyWm0wLDQwYTgsOCwwLDEsMSw4LThBOCw4LDAsMCwxLDIxMiw5MlpNMTYwLDU2QTUyLDUyLDAsMCwwLDU2LDU2djk0LjY5YTY0LDY0LDAsMSwwLDEwNCwwWk0xMDgsMjI4YTQwLDQwLDAsMCwxLTMwLjkxLTY1LjM5QTEyLDEyLDAsMCwwLDgwLDE1NC43OFY1NmEyOCwyOCwwLDAsMSw1Niwwdjk4Ljc3YTEyLDEyLDAsMCwwLDIuNzcsNy42OEE0MCw0MCwwLDAsMSwxMDgsMjI4Wm0yNC00MGEyNCwyNCwwLDEsMS0zNi0yMC43OFY5MmExMiwxMiwwLDAsMSwyNCwwdjc1LjIyQTI0LDI0LDAsMCwxLDEzMiwxODhaIi8+PC9zdmc+)
 */
export function PhThermometerBoldIcon(props: PhThermometerBoldIconProps) {
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
      <path d="M212,52a32,32,0,1,0,32,32A32,32,0,0,0,212,52Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,212,92ZM160,56A52,52,0,0,0,56,56v94.69a64,64,0,1,0,104,0ZM108,228a40,40,0,0,1-30.91-65.39A12,12,0,0,0,80,154.78V56a28,28,0,0,1,56,0v98.77a12,12,0,0,0,2.77,7.68A40,40,0,0,1,108,228Zm24-40a24,24,0,1,1-36-20.78V92a12,12,0,0,1,24,0v75.22A24,24,0,0,1,132,188Z"/>
    </svg>
  );
}
