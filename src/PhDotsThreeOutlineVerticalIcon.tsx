import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsThreeOutlineVerticalIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsOTZhMzIsMzIsMCwxLDAsMzIsMzJBMzIsMzIsMCwwLDAsMTI4LDk2Wm0wLDQ4YTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDEyOCwxNDRabTAtNjRBMzIsMzIsMCwxLDAsOTYsNDgsMzIsMzIsMCwwLDAsMTI4LDgwWm0wLTQ4YTE2LDE2LDAsMSwxLTE2LDE2QTE2LDE2LDAsMCwxLDEyOCwzMlptMCwxNDRhMzIsMzIsMCwxLDAsMzIsMzJBMzIsMzIsMCwwLDAsMTI4LDE3NlptMCw0OGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwxMjgsMjI0WiIvPjwvc3ZnPg==)
 */
export function PhDotsThreeOutlineVerticalIcon(props: PhDotsThreeOutlineVerticalIconProps) {
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
      <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Zm0-64A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,32Zm0,144a32,32,0,1,0,32,32A32,32,0,0,0,128,176Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,224Z"/>
    </svg>
  );
}
