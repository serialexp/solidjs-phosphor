import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberFiveBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsMTYwQTYwLDYwLDAsMCwxLDgwLDIwNC43MmExMiwxMiwwLDEsMSwxNi0xNy44OCwzNiwzNiwwLDEsMCwuNjktNTQuMjgsMTIsMTIsMCwwLDEtMTkuNTQtMTEuNDlMOTIuMjMsNDUuNjVBMTIsMTIsMCwwLDEsMTA0LDM2aDY0YTEyLDEyLDAsMCwxLDAsMjRIMTEzLjg0bC04LjM2LDQxLjc5QTYwLDYwLDAsMCwxLDE4MCwxNjBaIi8+PC9zdmc+)
 */
export function PhNumberFiveBoldIcon(props: PhNumberFiveBoldIconProps) {
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
      <path d="M180,160A60,60,0,0,1,80,204.72a12,12,0,1,1,16-17.88,36,36,0,1,0,.69-54.28,12,12,0,0,1-19.54-11.49L92.23,45.65A12,12,0,0,1,104,36h64a12,12,0,0,1,0,24H113.84l-8.36,41.79A60,60,0,0,1,180,160Z"/>
    </svg>
  );
}
