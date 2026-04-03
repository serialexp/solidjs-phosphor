import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMapPinSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsNzJhNjAsNjAsMCwxLDAtNzIsNTguNzlWMjMyYTEyLDEyLDAsMCwwLDI0LDBWMTMwLjc5QTYwLjA5LDYwLjA5LDAsMCwwLDE4OCw3MlptLTYwLDM2YTM2LDM2LDAsMSwxLDM2LTM2QTM2LDM2LDAsMCwxLDEyOCwxMDhaIi8+PC9zdmc+)
 */
export function PhMapPinSimpleBoldIcon(props: PhMapPinSimpleBoldIconProps) {
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
      <path d="M188,72a60,60,0,1,0-72,58.79V232a12,12,0,0,0,24,0V130.79A60.09,60.09,0,0,0,188,72Zm-60,36a36,36,0,1,1,36-36A36,36,0,0,1,128,108Z"/>
    </svg>
  );
}
