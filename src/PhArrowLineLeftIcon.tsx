import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineLeftIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTI4YTgsOCwwLDAsMS04LDhIOTEuMzFsNTguMzUsNTguMzRhOCw4LDAsMCwxLTExLjMyLDExLjMybC03Mi03MmE4LDgsMCwwLDEsMC0xMS4zMmw3Mi03MmE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMOTEuMzEsMTIwSDIyNEE4LDgsMCwwLDEsMjMyLDEyOFpNNDAsMzJhOCw4LDAsMCwwLTgsOFYyMTZhOCw4LDAsMCwwLDE2LDBWNDBBOCw4LDAsMCwwLDQwLDMyWiIvPjwvc3ZnPg==)
 */
export function PhArrowLineLeftIcon(props: PhArrowLineLeftIconProps) {
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
      <path d="M232,128a8,8,0,0,1-8,8H91.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L91.31,120H224A8,8,0,0,1,232,128ZM40,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,40,32Z"/>
    </svg>
  );
}
