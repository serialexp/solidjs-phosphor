import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowRightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsODB2NzJhOCw4LDAsMCwxLTE2LDBWOTkuMzFsLTk4LjM0LDk4LjM1YTgsOCwwLDAsMS0xMS4zMiwwbC05Ni05NkE4LDgsMCwwLDEsMjkuNjYsOTAuMzRMMTIwLDE4MC42OSwyMTIuNjksODhIMTYwYTgsOCwwLDAsMSwwLTE2aDcyQTgsOCwwLDAsMSwyNDAsODBaIi8+PC9zdmc+)
 */
export function PhArrowElbowRightIcon(props: PhArrowElbowRightIconProps) {
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
      <path d="M240,80v72a8,8,0,0,1-16,0V99.31l-98.34,98.35a8,8,0,0,1-11.32,0l-96-96A8,8,0,0,1,29.66,90.34L120,180.69,212.69,88H160a8,8,0,0,1,0-16h72A8,8,0,0,1,240,80Z"/>
    </svg>
  );
}
