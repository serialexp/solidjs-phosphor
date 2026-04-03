import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineLeftFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OCw0MFYyMTZhOCw4LDAsMCwxLTE2LDBWNDBhOCw4LDAsMCwxLDE2LDBabTE3Niw4MEgxNTJWNTZhOCw4LDAsMCwwLTEzLjY2LTUuNjZsLTcyLDcyYTgsOCwwLDAsMCwwLDExLjMybDcyLDcyQTgsOCwwLDAsMCwxNTIsMjAwVjEzNmg3MmE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 */
export function PhArrowLineLeftFillIcon(props: PhArrowLineLeftFillIconProps) {
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
      <path d="M48,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm176,80H152V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,152,200V136h72a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
