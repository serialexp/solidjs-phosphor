import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArchiveIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhIMzJBMTYsMTYsMCwwLDAsMTYsNjRWODhhMTYsMTYsMCwwLDAsMTYsMTZ2ODhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjEwNGExNiwxNiwwLDAsMCwxNi0xNlY2NEExNiwxNiwwLDAsMCwyMjQsNDhaTTIwOCwxOTJINDhWMTA0SDIwOFpNMjI0LDg4SDMyVjY0SDIyNFY4OFpNOTYsMTM2YTgsOCwwLDAsMSw4LThoNDhhOCw4LDAsMCwxLDAsMTZIMTA0QTgsOCwwLDAsMSw5NiwxMzZaIi8+PC9zdmc+)
 */
export function PhArchiveIcon(props: PhArchiveIconProps) {
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
      <path d="M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z"/>
    </svg>
  );
}
