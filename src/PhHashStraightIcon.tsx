import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHashStraightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTUySDE2OFYxMDRoNDhhOCw4LDAsMCwwLDAtMTZIMTY4VjQwYTgsOCwwLDAsMC0xNiwwVjg4SDEwNFY0MGE4LDgsMCwwLDAtMTYsMFY4OEg0MGE4LDgsMCwwLDAsMCwxNkg4OHY0OEg0MGE4LDgsMCwwLDAsMCwxNkg4OHY0OGE4LDgsMCwwLDAsMTYsMFYxNjhoNDh2NDhhOCw4LDAsMCwwLDE2LDBWMTY4aDQ4YTgsOCwwLDAsMCwwLTE2Wm0tMTEyLDBWMTA0aDQ4djQ4WiIvPjwvc3ZnPg==)
 */
export function PhHashStraightIcon(props: PhHashStraightIconProps) {
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
      <path d="M216,152H168V104h48a8,8,0,0,0,0-16H168V40a8,8,0,0,0-16,0V88H104V40a8,8,0,0,0-16,0V88H40a8,8,0,0,0,0,16H88v48H40a8,8,0,0,0,0,16H88v48a8,8,0,0,0,16,0V168h48v48a8,8,0,0,0,16,0V168h48a8,8,0,0,0,0-16Zm-112,0V104h48v48Z"/>
    </svg>
  );
}
