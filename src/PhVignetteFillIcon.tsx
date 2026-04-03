import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVignetteFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabS0xNiw4OGMwLDMwLjkzLTMyLjI0LDU2LTcyLDU2cy03Mi0yNS4wNy03Mi01NiwzMi4yNC01Niw3Mi01NlMyMDAsOTcuMDcsMjAwLDEyOFoiLz48L3N2Zz4=)
 */
export function PhVignetteFillIcon(props: PhVignetteFillIconProps) {
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
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-16,88c0,30.93-32.24,56-72,56s-72-25.07-72-56,32.24-56,72-56S200,97.07,200,128Z"/>
    </svg>
  );
}
