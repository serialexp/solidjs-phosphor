import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLinkedinLogoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjRINDBBMTYsMTYsMCwwLDAsMjQsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY0MEExNiwxNiwwLDAsMCwyMTYsMjRaTTk2LDE3NmE4LDgsMCwwLDEtMTYsMFYxMTJhOCw4LDAsMCwxLDE2LDBaTTg4LDk2YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDg4LDk2Wm05Niw4MGE4LDgsMCwwLDEtMTYsMFYxNDBhMjAsMjAsMCwwLDAtNDAsMHYzNmE4LDgsMCwwLDEtMTYsMFYxMTJhOCw4LDAsMCwxLDE1Ljc5LTEuNzhBMzYsMzYsMCwwLDEsMTg0LDE0MFoiLz48L3N2Zz4=)
 */
export function PhLinkedinLogoFillIcon(props: PhLinkedinLogoFillIconProps) {
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
      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"/>
    </svg>
  );
}
