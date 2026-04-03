import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhScooterFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMTcyYTMyLDMyLDAsMSwxLTQ5LjM4LTI2Ljg1bC05LTI2Ljg5LTUxLjQ2LDYyLjgxQTgsOCwwLDAsMSwxMjgsMTg0SDczLjY2YTMyLDMyLDAsMSwxLDIuMDgtMTZoNDguNDdsNTUuNDYtNjcuNjlMMTYyLjIzLDQ4SDEzNmE4LDgsMCwwLDEsMC0xNmgzMmE4LDgsMCwwLDEsNy41OSw1LjQ3TDIwOS44LDE0MC4wOGMuNzItLjA1LDEuNDYtLjA4LDIuMi0uMDhBMzIsMzIsMCwwLDEsMjQ0LDE3MloiLz48L3N2Zz4=)
 */
export function PhScooterFillIcon(props: PhScooterFillIconProps) {
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
      <path d="M244,172a32,32,0,1,1-49.38-26.85l-9-26.89-51.46,62.81A8,8,0,0,1,128,184H73.66a32,32,0,1,1,2.08-16h48.47l55.46-67.69L162.23,48H136a8,8,0,0,1,0-16h32a8,8,0,0,1,7.59,5.47L209.8,140.08c.72-.05,1.46-.08,2.2-.08A32,32,0,0,1,244,172Z"/>
    </svg>
  );
}
