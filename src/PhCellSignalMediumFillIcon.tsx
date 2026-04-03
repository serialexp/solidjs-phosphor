import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCellSignalMediumFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTguMTIsMjUuMjNhMTYsMTYsMCwwLDAtMTcuNDQsMy40NmwtMTYwLDE2MEExNiwxNiwwLDAsMCwzMiwyMTZIMTkyYTE2LDE2LDAsMCwwLDE2LTE2VjQwQTE1Ljk0LDE1Ljk0LDAsMCwwLDE5OC4xMiwyNS4yM1pNMTkyLDIwMEgxMjhWMTA0bDY0LTY0WiIvPjwvc3ZnPg==)
 */
export function PhCellSignalMediumFillIcon(props: PhCellSignalMediumFillIconProps) {
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
      <path d="M198.12,25.23a16,16,0,0,0-17.44,3.46l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A15.94,15.94,0,0,0,198.12,25.23ZM192,200H128V104l64-64Z"/>
    </svg>
  );
}
