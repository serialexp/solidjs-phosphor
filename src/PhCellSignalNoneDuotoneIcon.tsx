import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCellSignalNoneDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTguMTIsMjUuMjNhMTYsMTYsMCwwLDAtMTcuNDMsMy40N2wtMTYwLDE2MEExNiwxNiwwLDAsMCwzMiwyMTZIMTkyYTE2LDE2LDAsMCwwLDE2LTE2VjQwQTE2LDE2LDAsMCwwLDE5OC4xMiwyNS4yM1pNMTkyLDIwMEgzMkwxOTIsNDBaIi8+PC9zdmc+)
 */
export function PhCellSignalNoneDuotoneIcon(props: PhCellSignalNoneDuotoneIconProps) {
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
      <path d="M198.12,25.23a16,16,0,0,0-17.43,3.47l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A16,16,0,0,0,198.12,25.23ZM192,200H32L192,40Z"/>
    </svg>
  );
}
