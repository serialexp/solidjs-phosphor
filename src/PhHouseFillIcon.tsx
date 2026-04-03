import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHouseFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTIwdjk2YTgsOCwwLDAsMS04LDhIMTYwYTgsOCwwLDAsMS04LThWMTY0YTQsNCwwLDAsMC00LTRIMTA4YTQsNCwwLDAsMC00LDR2NTJhOCw4LDAsMCwxLTgsOEg0MGE4LDgsMCwwLDEtOC04VjEyMGExNiwxNiwwLDAsMSw0LjY5LTExLjMxbDgwLTgwYTE2LDE2LDAsMCwxLDIyLjYyLDBsODAsODBBMTYsMTYsMCwwLDEsMjI0LDEyMFoiLz48L3N2Zz4=)
 */
export function PhHouseFillIcon(props: PhHouseFillIconProps) {
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
      <path d="M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"/>
    </svg>
  );
}
