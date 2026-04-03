import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChartBarHorizontalDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTA0djQ4SDQ4VjEwNFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMjQsOTZIMTg0VjU2YTgsOCwwLDAsMC04LThINTZWNDBhOCw4LDAsMCwwLTE2LDBWMjE2YTgsOCwwLDAsMCwxNiwwdi04aDg4YTgsOCwwLDAsMCw4LThWMTYwaDcyYTgsOCwwLDAsMCw4LThWMTA0QTgsOCwwLDAsMCwyMjQsOTZaTTE2OCw2NFY5Nkg1NlY2NFpNMTM2LDE5Mkg1NlYxNjBoODBabTgwLTQ4SDU2VjExMkgyMTZaIi8+PC9zdmc+)
 */
export function PhChartBarHorizontalDuotoneIcon(props: PhChartBarHorizontalDuotoneIconProps) {
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
      <path d="M224,104v48H48V104Z" opacity="0.2"/><path d="M224,96H184V56a8,8,0,0,0-8-8H56V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0v-8h88a8,8,0,0,0,8-8V160h72a8,8,0,0,0,8-8V104A8,8,0,0,0,224,96ZM168,64V96H56V64ZM136,192H56V160h80Zm80-48H56V112H216Z"/>
    </svg>
  );
}
