import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGenderIntersexThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhIMTY4YTQsNCwwLDAsMCwwLDhoMzAuMzRMMTYzLjU1LDcwLjc5QTYwLDYwLDAsMSwwLDExNiwxNzEuODVWMTk2SDg4YTQsNCwwLDAsMCwwLDhoMjh2MjhhNCw0LDAsMCwwLDgsMFYyMDRoMjhhNCw0LDAsMCwwLDAtOEgxMjRWMTcxLjg1QTU5Ljk0LDU5Ljk0LDAsMCwwLDE2OC42OCw3N0wyMDQsNDEuNjZWNzJhNCw0LDAsMCwwLDgsMFYzMkE0LDQsMCwwLDAsMjA4LDI4Wk0xMjAsMTY0YTUyLDUyLDAsMSwxLDUyLTUyQTUyLjA2LDUyLjA2LDAsMCwxLDEyMCwxNjRaIi8+PC9zdmc+)
 */
export function PhGenderIntersexThinIcon(props: PhGenderIntersexThinIconProps) {
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
      <path d="M208,28H168a4,4,0,0,0,0,8h30.34L163.55,70.79A60,60,0,1,0,116,171.85V196H88a4,4,0,0,0,0,8h28v28a4,4,0,0,0,8,0V204h28a4,4,0,0,0,0-8H124V171.85A59.94,59.94,0,0,0,168.68,77L204,41.66V72a4,4,0,0,0,8,0V32A4,4,0,0,0,208,28ZM120,164a52,52,0,1,1,52-52A52.06,52.06,0,0,1,120,164Z"/>
    </svg>
  );
}
