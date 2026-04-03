import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsThreeVerticalBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsNjBhMTYsMTYsMCwxLDEsMTYsMTZBMTYsMTYsMCwwLDEsMTEyLDYwWm0xNiw1MmExNiwxNiwwLDEsMCwxNiwxNkExNiwxNiwwLDAsMCwxMjgsMTEyWm0wLDY4YTE2LDE2LDAsMSwwLDE2LDE2QTE2LDE2LDAsMCwwLDEyOCwxODBaIi8+PC9zdmc+)
 */
export function PhDotsThreeVerticalBoldIcon(props: PhDotsThreeVerticalBoldIconProps) {
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
      <path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"/>
    </svg>
  );
}
