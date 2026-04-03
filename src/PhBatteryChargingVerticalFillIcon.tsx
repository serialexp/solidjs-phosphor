import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryChargingVerticalFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMzJIODBBMjQsMjQsMCwwLDAsNTYsNTZWMjI0YTI0LDI0LDAsMCwwLDI0LDI0aDk2YTI0LDI0LDAsMCwwLDI0LTI0VjU2QTI0LDI0LDAsMCwwLDE3NiwzMlpNMTUxLjE2LDEzOS41OGwtMTYsMzJhOCw4LDAsMCwxLTE0LjMyLTcuMTZMMTMxLjA2LDE0NEgxMTJhOCw4LDAsMCwxLTcuMTYtMTEuNThsMTYtMzJhOCw4LDAsMSwxLDE0LjMyLDcuMTZMMTI0Ljk0LDEyOEgxNDRhOCw4LDAsMCwxLDcuMTYsMTEuNThaTTg4LDhhOCw4LDAsMCwxLDgtOGg2NGE4LDgsMCwwLDEsMCwxNkg5NkE4LDgsMCwwLDEsODgsOFoiLz48L3N2Zz4=)
 */
export function PhBatteryChargingVerticalFillIcon(props: PhBatteryChargingVerticalFillIconProps) {
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
      <path d="M176,32H80A24,24,0,0,0,56,56V224a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V56A24,24,0,0,0,176,32ZM151.16,139.58l-16,32a8,8,0,0,1-14.32-7.16L131.06,144H112a8,8,0,0,1-7.16-11.58l16-32a8,8,0,1,1,14.32,7.16L124.94,128H144a8,8,0,0,1,7.16,11.58ZM88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8Z"/>
    </svg>
  );
}
