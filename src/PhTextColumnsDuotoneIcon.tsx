import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextColumnsDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRWMTg0SDQwVjY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEyMCw2NGE4LDgsMCwwLDEtOCw4SDQwYTgsOCwwLDAsMSwwLTE2aDcyQTgsOCwwLDAsMSwxMjAsNjRabS04LDMySDQwYTgsOCwwLDAsMCwwLDE2aDcyYTgsOCwwLDAsMCwwLTE2Wm0wLDQwSDQwYTgsOCwwLDAsMCwwLDE2aDcyYTgsOCwwLDAsMCwwLTE2Wm0wLDQwSDQwYTgsOCwwLDAsMCwwLDE2aDcyYTgsOCwwLDAsMCwwLTE2Wk0xNDQsNzJoNzJhOCw4LDAsMCwwLDAtMTZIMTQ0YTgsOCwwLDAsMCwwLDE2Wm03MiwyNEgxNDRhOCw4LDAsMCwwLDAsMTZoNzJhOCw4LDAsMCwwLDAtMTZabTAsNDBIMTQ0YTgsOCwwLDAsMCwwLDE2aDcyYTgsOCwwLDAsMCwwLTE2Wm0wLDQwSDE0NGE4LDgsMCwwLDAsMCwxNmg3MmE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 */
export function PhTextColumnsDuotoneIcon(props: PhTextColumnsDuotoneIconProps) {
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
      <path d="M216,64V184H40V64Z" opacity="0.2"/><path d="M120,64a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h72A8,8,0,0,1,120,64Zm-8,32H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM144,72h72a8,8,0,0,0,0-16H144a8,8,0,0,0,0,16Zm72,24H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm0,40H144a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
