import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPauseFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWMjA4YTE2LDE2LDAsMCwxLTE2LDE2SDE2MGExNiwxNiwwLDAsMS0xNi0xNlY0OGExNiwxNiwwLDAsMSwxNi0xNmg0MEExNiwxNiwwLDAsMSwyMTYsNDhaTTk2LDMySDU2QTE2LDE2LDAsMCwwLDQwLDQ4VjIwOGExNiwxNiwwLDAsMCwxNiwxNkg5NmExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCw5NiwzMloiLz48L3N2Zz4=)
 */
export function PhPauseFillIcon(props: PhPauseFillIconProps) {
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
      <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"/>
    </svg>
  );
}
