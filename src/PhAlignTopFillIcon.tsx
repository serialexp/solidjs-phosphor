import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignTopFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDBhOCw4LDAsMCwxLTgsOEg0MGE4LDgsMCwwLDEsMC0xNkgyMTZBOCw4LDAsMCwxLDIyNCw0MFpNMTkyLDY0SDE1MmExNiwxNiwwLDAsMC0xNiwxNnY5NmExNiwxNiwwLDAsMCwxNiwxNmg0MGExNiwxNiwwLDAsMCwxNi0xNlY4MEExNiwxNiwwLDAsMCwxOTIsNjRabS04OCwwSDY0QTE2LDE2LDAsMCwwLDQ4LDgwVjIxNmExNiwxNiwwLDAsMCwxNiwxNmg0MGExNiwxNiwwLDAsMCwxNi0xNlY4MEExNiwxNiwwLDAsMCwxMDQsNjRaIi8+PC9zdmc+)
 */
export function PhAlignTopFillIcon(props: PhAlignTopFillIconProps) {
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
      <path d="M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM192,64H152a16,16,0,0,0-16,16v96a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V80A16,16,0,0,0,192,64Zm-88,0H64A16,16,0,0,0,48,80V216a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V80A16,16,0,0,0,104,64Z"/>
    </svg>
  );
}
