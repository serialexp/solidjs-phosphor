import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCheckSquareOffsetDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWMjA4YTgsOCwwLDAsMS04LDhINjRMNDAsMTkyVjQ4YTgsOCwwLDAsMSw4LThIMjA4QTgsOCwwLDAsMSwyMTYsNDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI0LDQ4VjIwOGExNiwxNiwwLDAsMS0xNiwxNkgxMzZhOCw4LDAsMCwxLDAtMTZoNzJWNDhINDh2OTZhOCw4LDAsMCwxLTE2LDBWNDhBMTYsMTYsMCwwLDEsNDgsMzJIMjA4QTE2LDE2LDAsMCwxLDIyNCw0OFpNMTI1LjY2LDE1NC4zNGE4LDgsMCwwLDAtMTEuMzIsMEw2NCwyMDQuNjksNDUuNjYsMTg2LjM0YTgsOCwwLDAsMC0xMS4zMiwxMS4zMmwyNCwyNGE4LDgsMCwwLDAsMTEuMzIsMGw1Ni01NkE4LDgsMCwwLDAsMTI1LjY2LDE1NC4zNFoiLz48L3N2Zz4=)
 */
export function PhCheckSquareOffsetDuotoneIcon(props: PhCheckSquareOffsetDuotoneIconProps) {
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
      <path d="M216,48V208a8,8,0,0,1-8,8H64L40,192V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"/><path d="M224,48V208a16,16,0,0,1-16,16H136a8,8,0,0,1,0-16h72V48H48v96a8,8,0,0,1-16,0V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM125.66,154.34a8,8,0,0,0-11.32,0L64,204.69,45.66,186.34a8,8,0,0,0-11.32,11.32l24,24a8,8,0,0,0,11.32,0l56-56A8,8,0,0,0,125.66,154.34Z"/>
    </svg>
  );
}
