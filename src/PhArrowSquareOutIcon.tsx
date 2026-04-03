import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowSquareOutIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTA0YTgsOCwwLDAsMS0xNiwwVjU5LjMybC02Ni4zMyw2Ni4zNGE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTk2LjY4LDQ4SDE1MmE4LDgsMCwwLDEsMC0xNmg2NGE4LDgsMCwwLDEsOCw4Wm0tNDAsMjRhOCw4LDAsMCwwLTgsOHY3Mkg0OFY4MGg3MmE4LDgsMCwwLDAsMC0xNkg0OEExNiwxNiwwLDAsMCwzMiw4MFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMTc2YTE2LDE2LDAsMCwwLDE2LTE2VjEzNkE4LDgsMCwwLDAsMTg0LDEyOFoiLz48L3N2Zz4=)
 */
export function PhArrowSquareOutIcon(props: PhArrowSquareOutIconProps) {
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
      <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"/>
    </svg>
  );
}
