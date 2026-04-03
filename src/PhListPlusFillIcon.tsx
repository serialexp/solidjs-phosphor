import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhListPlusFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTY0LDcySDE5MmE4LDgsMCwwLDEsMCwxNkg2NGE4LDgsMCwwLDEsMC0xNlptNTYsMTEySDY0YTgsOCwwLDAsMSwwLTE2aDU2YTgsOCwwLDAsMSwwLDE2Wm0xNi00OEg2NGE4LDgsMCwwLDEsMC0xNmg3MmE4LDgsMCwwLDEsMCwxNlptNjQsMzJIMTg0djE2YTgsOCwwLDAsMS0xNiwwVjE2OEgxNTJhOCw4LDAsMCwxLDAtMTZoMTZWMTM2YTgsOCwwLDAsMSwxNiwwdjE2aDE2YTgsOCwwLDAsMSwwLDE2WiIvPjwvc3ZnPg==)
 */
export function PhListPlusFillIcon(props: PhListPlusFillIconProps) {
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
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM64,72H192a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm56,112H64a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm16-48H64a8,8,0,0,1,0-16h72a8,8,0,0,1,0,16Zm64,32H184v16a8,8,0,0,1-16,0V168H152a8,8,0,0,1,0-16h16V136a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
