import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSelectionFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTEwNCwyMDBINzJhMTYsMTYsMCwwLDEtMTYtMTZWMTUyYTgsOCwwLDAsMSwxNiwwdjMyaDMyYTgsOCwwLDAsMSwwLDE2Wm0wLTEyOEg3MnYzMmE4LDgsMCwwLDEtMTYsMFY3MkExNiwxNiwwLDAsMSw3Miw1NmgzMmE4LDgsMCwwLDEsMCwxNlptOTYsMTEyYTE2LDE2LDAsMCwxLTE2LDE2SDE1MmE4LDgsMCwwLDEsMC0xNmgzMlYxNTJhOCw4LDAsMCwxLDE2LDBabTAtODBhOCw4LDAsMCwxLTE2LDBWNzJIMTUyYTgsOCwwLDAsMSwwLTE2aDMyYTE2LDE2LDAsMCwxLDE2LDE2WiIvPjwvc3ZnPg==)
 */
export function PhSelectionFillIcon(props: PhSelectionFillIconProps) {
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
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,200H72a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Zm0-128H72v32a8,8,0,0,1-16,0V72A16,16,0,0,1,72,56h32a8,8,0,0,1,0,16Zm96,112a16,16,0,0,1-16,16H152a8,8,0,0,1,0-16h32V152a8,8,0,0,1,16,0Zm0-80a8,8,0,0,1-16,0V72H152a8,8,0,0,1,0-16h32a16,16,0,0,1,16,16Z"/>
    </svg>
  );
}
