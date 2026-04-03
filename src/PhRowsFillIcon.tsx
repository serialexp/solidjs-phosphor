import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRowsFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTUydjQwYTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjE1MmExNiwxNiwwLDAsMSwxNi0xNkgyMDhBMTYsMTYsMCwwLDEsMjI0LDE1MlpNMjA4LDQ4SDQ4QTE2LDE2LDAsMCwwLDMyLDY0djQwYTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY2NEExNiwxNiwwLDAsMCwyMDgsNDhaIi8+PC9zdmc+)
 */
export function PhRowsFillIcon(props: PhRowsFillIconProps) {
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
      <path d="M224,152v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H208A16,16,0,0,1,224,152ZM208,48H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Z"/>
    </svg>
  );
}
