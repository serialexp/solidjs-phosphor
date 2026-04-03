import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPaperPlaneRightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuODcsMTE0bC0xNjgtOTUuODlBMTYsMTYsMCwwLDAsNDAuOTIsMzcuMzRMNzEuNTUsMTI4LDQwLjkyLDIxOC42N0ExNiwxNiwwLDAsMCw1NiwyNDBhMTYuMTUsMTYuMTUsMCwwLDAsNy45My0yLjFsMTY3LjkyLTk2LjA1YTE2LDE2LDAsMCwwLC4wNS0yNy44OVpNNTYsMjI0YS41Ni41NiwwLDAsMCwwLS4xMkw4NS43NCwxMzZIMTQ0YTgsOCwwLDAsMCwwLTE2SDg1Ljc0TDU2LjA2LDMyLjE2QS40Ni40NiwwLDAsMCw1NiwzMmwxNjgsOTUuODNaIi8+PC9zdmc+)
 */
export function PhPaperPlaneRightIcon(props: PhPaperPlaneRightIconProps) {
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
      <path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z"/>
    </svg>
  );
}
