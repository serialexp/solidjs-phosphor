import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSuitcaseDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00MCw2NEg4OFYyMDhINDBhOCw4LDAsMCwxLTgtOFY3MkE4LDgsMCwwLDEsNDAsNjRabTE3NiwwSDE2OFYyMDhoNDhhOCw4LDAsMCwwLDgtOFY3MkE4LDgsMCwwLDAsMjE2LDY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNiw1NkgxNzZWNDhhMjQsMjQsMCwwLDAtMjQtMjRIMTA0QTI0LDI0LDAsMCwwLDgwLDQ4djhINDBBMTYsMTYsMCwwLDAsMjQsNzJWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY3MkExNiwxNiwwLDAsMCwyMTYsNTZaTTk2LDQ4YTgsOCwwLDAsMSw4LThoNDhhOCw4LDAsMCwxLDgsOHY4SDk2Wm02NCwyNFYyMDBIOTZWNzJaTTQwLDcySDgwVjIwMEg0MFpNMjE2LDIwMEgxNzZWNzJoNDBWMjAwWiIvPjwvc3ZnPg==)
 */
export function PhSuitcaseDuotoneIcon(props: PhSuitcaseDuotoneIconProps) {
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
      <path d="M40,64H88V208H40a8,8,0,0,1-8-8V72A8,8,0,0,1,40,64Zm176,0H168V208h48a8,8,0,0,0,8-8V72A8,8,0,0,0,216,64Z" opacity="0.2"/><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm64,24V200H96V72ZM40,72H80V200H40ZM216,200H176V72h40V200Z"/>
    </svg>
  );
}
