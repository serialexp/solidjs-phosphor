import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryVerticalMediumIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMzJIODBBMjQsMjQsMCwwLDAsNTYsNTZWMjI0YTI0LDI0LDAsMCwwLDI0LDI0aDk2YTI0LDI0LDAsMCwwLDI0LTI0VjU2QTI0LDI0LDAsMCwwLDE3NiwzMlptOCwxOTJhOCw4LDAsMCwxLTgsOEg4MGE4LDgsMCwwLDEtOC04VjU2YTgsOCwwLDAsMSw4LThoOTZhOCw4LDAsMCwxLDgsOFptLTE2LTI0YTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMCwxLDAtMTZoNjRBOCw4LDAsMCwxLDE2OCwyMDBaTTg4LDhhOCw4LDAsMCwxLDgtOGg2NGE4LDgsMCwwLDEsMCwxNkg5NkE4LDgsMCwwLDEsODgsOFptODAsMTUyYTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMCwxLDAtMTZoNjRBOCw4LDAsMCwxLDE2OCwxNjBaIi8+PC9zdmc+)
 */
export function PhBatteryVerticalMediumIcon(props: PhBatteryVerticalMediumIconProps) {
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
      <path d="M176,32H80A24,24,0,0,0,56,56V224a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V56A24,24,0,0,0,176,32Zm8,192a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Zm-16-24a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,200ZM88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8Zm80,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,160Z"/>
    </svg>
  );
}
