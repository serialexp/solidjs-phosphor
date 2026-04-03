import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUniteDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTYwYTcyLDcyLDAsMCwxLTE0My42LDcuNiw3Miw3MiwwLDEsMSw3OS4yLTc5LjJBNzIsNzIsMCwwLDEsMjMyLDE2MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNzQuNjMsODEuMzdhODAsODAsMCwxLDAtOTMuMjYsOTMuMjYsODAsODAsMCwxLDAsOTMuMjYtOTMuMjZaTTMyLDk2YTY0LDY0LDAsMCwxLDEyNi0xNkE4MC4wOCw4MC4wOCwwLDAsMCw4MC4wNSwxNTgsNjQuMTEsNjQuMTEsMCwwLDEsMzIsOTZabTEyOCwwYTY0LjA3LDY0LjA3LDAsMCwxLTY0LDY0QTY0LjA3LDY0LjA3LDAsMCwxLDE2MCw5NlptMCwxMjhBNjQuMTEsNjQuMTEsMCwwLDEsOTgsMTc2LDgwLjA4LDgwLjA4LDAsMCwwLDE3Niw5OCw2NCw2NCwwLDAsMSwxNjAsMjI0WiIvPjwvc3ZnPg==)
 */
export function PhUniteDuotoneIcon(props: PhUniteDuotoneIconProps) {
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
      <path d="M232,160a72,72,0,0,1-143.6,7.6,72,72,0,1,1,79.2-79.2A72,72,0,0,1,232,160Z" opacity="0.2"/><path d="M174.63,81.37a80,80,0,1,0-93.26,93.26,80,80,0,1,0,93.26-93.26ZM32,96a64,64,0,0,1,126-16A80.08,80.08,0,0,0,80.05,158,64.11,64.11,0,0,1,32,96Zm128,0a64.07,64.07,0,0,1-64,64A64.07,64.07,0,0,1,160,96Zm0,128A64.11,64.11,0,0,1,98,176,80.08,80.08,0,0,0,176,98,64,64,0,0,1,160,224Z"/>
    </svg>
  );
}
