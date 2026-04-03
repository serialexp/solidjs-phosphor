import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUniteFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTY0YTc2LDc2LDAsMCwxLTE1MS45LDMuOSw3Niw3NiwwLDEsMSw3OS44LTc5LjhBNzYuMSw3Ni4xLDAsMCwxLDI0MCwxNjRaIi8+PC9zdmc+)
 */
export function PhUniteFillIcon(props: PhUniteFillIconProps) {
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
      <path d="M240,164a76,76,0,0,1-151.9,3.9,76,76,0,1,1,79.8-79.8A76.1,76.1,0,0,1,240,164Z"/>
    </svg>
  );
}
