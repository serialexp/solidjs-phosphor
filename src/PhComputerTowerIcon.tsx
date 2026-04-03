import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhComputerTowerIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCw3MmE4LDgsMCwwLDEsOC04aDY0YTgsOCwwLDAsMSwwLDE2SDk2QTgsOCwwLDAsMSw4OCw3MlptOCw0MGg2NGE4LDgsMCwwLDAsMC0xNkg5NmE4LDgsMCwwLDAsMCwxNlpNMjA4LDQwVjIxNmExNiwxNiwwLDAsMS0xNiwxNkg2NGExNiwxNiwwLDAsMS0xNi0xNlY0MEExNiwxNiwwLDAsMSw2NCwyNEgxOTJBMTYsMTYsMCwwLDEsMjA4LDQwWm0tMTYsMEg2NFYyMTZIMTkyWk0xMjgsMTY4YTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDEyOCwxNjhaIi8+PC9zdmc+)
 */
export function PhComputerTowerIcon(props: PhComputerTowerIconProps) {
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
      <path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,72Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM208,40V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V40A16,16,0,0,1,64,24H192A16,16,0,0,1,208,40Zm-16,0H64V216H192ZM128,168a12,12,0,1,0,12,12A12,12,0,0,0,128,168Z"/>
    </svg>
  );
}
