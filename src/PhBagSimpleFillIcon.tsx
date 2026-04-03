import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBagSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRIMTc2YTQ4LDQ4LDAsMCwwLTk2LDBINDBBMTYsMTYsMCwwLDAsMjQsODBWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY4MEExNiwxNiwwLDAsMCwyMTYsNjRaTTEyOCwzMmEzMiwzMiwwLDAsMSwzMiwzMkg5NkEzMiwzMiwwLDAsMSwxMjgsMzJaIi8+PC9zdmc+)
 */
export function PhBagSimpleFillIcon(props: PhBagSimpleFillIconProps) {
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
      <path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"/>
    </svg>
  );
}
