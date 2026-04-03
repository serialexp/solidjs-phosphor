import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHourglassSimpleLowBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQsMTkzLjY4LDE0NS4zNSwxMjgsMjE0LDYyLjMybC4xOC0uMThBMjAsMjAsMCwwLDAsMjAwLDI4SDU2QTIwLDIwLDAsMCwwLDQxLjg3LDYyLjE0bC4xOC4xOEwxMTAuNjUsMTI4bC02OC42LDY1LjY4LS4xOC4xOEEyMCwyMCwwLDAsMCw1NiwyMjhIMjAwYTIwLDIwLDAsMCwwLDE0LjE0LTM0LjE0Wk0xNDguMjUsMTY0aC00MC41TDEyOCwxNDQuNjFaTTE5MCw1MmwtNjIsNTkuMzlMNjYsNTJaTTY2LDIwNGwxNi43MS0xNmg5MC42MkwxOTAsMjA0WiIvPjwvc3ZnPg==)
 */
export function PhHourglassSimpleLowBoldIcon(props: PhHourglassSimpleLowBoldIconProps) {
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
      <path d="M214,193.68,145.35,128,214,62.32l.18-.18A20,20,0,0,0,200,28H56A20,20,0,0,0,41.87,62.14l.18.18L110.65,128l-68.6,65.68-.18.18A20,20,0,0,0,56,228H200a20,20,0,0,0,14.14-34.14ZM148.25,164h-40.5L128,144.61ZM190,52l-62,59.39L66,52ZM66,204l16.71-16h90.62L190,204Z"/>
    </svg>
  );
}
