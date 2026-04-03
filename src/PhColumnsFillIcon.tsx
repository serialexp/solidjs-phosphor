import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhColumnsFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsNDhWMjA4YTE2LDE2LDAsMCwxLTE2LDE2SDY0YTE2LDE2LDAsMCwxLTE2LTE2VjQ4QTE2LDE2LDAsMCwxLDY0LDMyaDQwQTE2LDE2LDAsMCwxLDEyMCw0OFptNzItMTZIMTUyYTE2LDE2LDAsMCwwLTE2LDE2VjIwOGExNiwxNiwwLDAsMCwxNiwxNmg0MGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwxOTIsMzJaIi8+PC9zdmc+)
 */
export function PhColumnsFillIcon(props: PhColumnsFillIconProps) {
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
      <path d="M120,48V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V48A16,16,0,0,1,64,32h40A16,16,0,0,1,120,48Zm72-16H152a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"/>
    </svg>
  );
}
