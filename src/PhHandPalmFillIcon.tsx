import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHandPalmFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTA0djQ4YTg4LDg4LDAsMCwxLTE3NiwwVjY0YTE2LDE2LDAsMCwxLDMyLDB2NTZhOCw4LDAsMCwwLDE2LDBWMzJhMTYsMTYsMCwwLDEsMzIsMHY4MGE4LDgsMCwwLDAsMTYsMFY0OGExNiwxNiwwLDAsMSwzMiwwdjgwLjY3QTQ4LjA4LDQ4LjA4LDAsMCwwLDEyOCwxNzZhOCw4LDAsMCwwLDE2LDAsMzIsMzIsMCwwLDEsMzItMzIsOCw4LDAsMCwwLDgtOFYxMDRhMTYsMTYsMCwwLDEsMzIsMFoiLz48L3N2Zz4=)
 */
export function PhHandPalmFillIcon(props: PhHandPalmFillIconProps) {
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
      <path d="M216,104v48a88,88,0,0,1-176,0V64a16,16,0,0,1,32,0v56a8,8,0,0,0,16,0V32a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V48a16,16,0,0,1,32,0v80.67A48.08,48.08,0,0,0,128,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,8-8V104a16,16,0,0,1,32,0Z"/>
    </svg>
  );
}
