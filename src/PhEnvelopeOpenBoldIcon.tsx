import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEnvelopeOpenBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuNjYsODZsLTk2LTY0YTEyLDEyLDAsMCwwLTEzLjMyLDBsLTk2LDY0QTEyLDEyLDAsMCwwLDIwLDk2VjIwMGEyMCwyMCwwLDAsMCwyMCwyMEgyMTZhMjAsMjAsMCwwLDAsMjAtMjBWOTZBMTIsMTIsMCwwLDAsMjMwLjY2LDg2Wk04OS44MSwxNTIsNDQsMTg0LjMxdi02NVpNMTE0LjM2LDE2NGgyNy4yOEwxODcsMTk2SDY5LjA1Wk0xNjYuMTksMTUyLDIxMiwxMTkuMjl2NjVaTTEyOCw0Ni40Mmw3NC44Niw0OS45MUwxNDEuNjEsMTQwSDExNC4zOUw1My4xNCw5Ni4zM1oiLz48L3N2Zz4=)
 */
export function PhEnvelopeOpenBoldIcon(props: PhEnvelopeOpenBoldIconProps) {
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
      <path d="M230.66,86l-96-64a12,12,0,0,0-13.32,0l-96,64A12,12,0,0,0,20,96V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V96A12,12,0,0,0,230.66,86ZM89.81,152,44,184.31v-65ZM114.36,164h27.28L187,196H69.05ZM166.19,152,212,119.29v65ZM128,46.42l74.86,49.91L141.61,140H114.39L53.14,96.33Z"/>
    </svg>
  );
}
