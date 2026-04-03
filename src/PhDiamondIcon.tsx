import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDiamondIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuMzMsMTE2LjcyLDEzOS4yOCwyMC42NmExNiwxNiwwLDAsMC0yMi41NiwwbC05Niw5Ni4wNmExNiwxNiwwLDAsMCwwLDIyLjU2bDk2LjA1LDk2LjA2aDBhMTYsMTYsMCwwLDAsMjIuNTYsMGw5Ni4wNS05Ni4wNmExNiwxNiwwLDAsMCwwLTIyLjU2Wk0xMjgsMjI0aDBMMzIsMTI4LDEyOCwzMiwyMjQsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhDiamondIcon(props: PhDiamondIconProps) {
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
      <path d="M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z"/>
    </svg>
  );
}
