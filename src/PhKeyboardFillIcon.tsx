import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhKeyboardFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhIMzJBMTYsMTYsMCwwLDAsMTYsNjRWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDIyNGExNiwxNiwwLDAsMCwxNi0xNlY2NEExNiwxNiwwLDAsMCwyMjQsNDhaTTY0LDE2OEg0OGE4LDgsMCwwLDEsMC0xNkg2NGE4LDgsMCwwLDEsMCwxNlptOTYsMEg5NmE4LDgsMCwwLDEsMC0xNmg2NGE4LDgsMCwwLDEsMCwxNlptNDgsMEgxOTJhOCw4LDAsMCwxLDAtMTZoMTZhOCw4LDAsMCwxLDAsMTZabTAtMzJINDhhOCw4LDAsMCwxLDAtMTZIMjA4YTgsOCwwLDAsMSwwLDE2Wm0wLTMySDQ4YTgsOCwwLDAsMSwwLTE2SDIwOGE4LDgsMCwwLDEsMCwxNloiLz48L3N2Zz4=)
 */
export function PhKeyboardFillIcon(props: PhKeyboardFillIconProps) {
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
      <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM64,168H48a8,8,0,0,1,0-16H64a8,8,0,0,1,0,16Zm96,0H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm48,0H192a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
