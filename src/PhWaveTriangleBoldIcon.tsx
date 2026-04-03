import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWaveTriangleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEuNzMsMTM1bC01Miw3MmExMiwxMiwwLDAsMS0xOS40NiwwTDc2LDc2LjUsMzMuNzMsMTM1QTEyLDEyLDAsMSwxLDE0LjI3LDEyMWw1Mi03MmExMiwxMiwwLDAsMSwxOS40NiwwTDE4MCwxNzkuNSwyMjIuMjcsMTIxQTEyLDEyLDAsMSwxLDI0MS43MywxMzVaIi8+PC9zdmc+)
 */
export function PhWaveTriangleBoldIcon(props: PhWaveTriangleBoldIconProps) {
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
      <path d="M241.73,135l-52,72a12,12,0,0,1-19.46,0L76,76.5,33.73,135A12,12,0,1,1,14.27,121l52-72a12,12,0,0,1,19.46,0L180,179.5,222.27,121A12,12,0,1,1,241.73,135Z"/>
    </svg>
  );
}
