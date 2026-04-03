import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCrossIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNzJIMTYwVjMyYTE2LDE2LDAsMCwwLTE2LTE2SDExMkExNiwxNiwwLDAsMCw5NiwzMlY3Mkg1NkExNiwxNiwwLDAsMCw0MCw4OHYzMmExNiwxNiwwLDAsMCwxNiwxNkg5NnY4OGExNiwxNiwwLDAsMCwxNiwxNmgzMmExNiwxNiwwLDAsMCwxNi0xNlYxMzZoNDBhMTYsMTYsMCwwLDAsMTYtMTZWODhBMTYsMTYsMCwwLDAsMjAwLDcyWm0wLDQ4SDE1MmE4LDgsMCwwLDAtOCw4djk2SDExMlYxMjhhOCw4LDAsMCwwLTgtOEg1NlY4OGg0OGE4LDgsMCwwLDAsOC04VjMyaDMyVjgwYTgsOCwwLDAsMCw4LDhoNDhaIi8+PC9zdmc+)
 */
export function PhCrossIcon(props: PhCrossIconProps) {
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
      <path d="M200,72H160V32a16,16,0,0,0-16-16H112A16,16,0,0,0,96,32V72H56A16,16,0,0,0,40,88v32a16,16,0,0,0,16,16H96v88a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V136h40a16,16,0,0,0,16-16V88A16,16,0,0,0,200,72Zm0,48H152a8,8,0,0,0-8,8v96H112V128a8,8,0,0,0-8-8H56V88h48a8,8,0,0,0,8-8V32h32V80a8,8,0,0,0,8,8h48Z"/>
    </svg>
  );
}
