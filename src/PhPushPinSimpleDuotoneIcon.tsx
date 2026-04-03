import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPushPinSimpleDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTc2SDU2TDgwLDQwaDk2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNiwxNjhoLTkuMjlMMTg1LjU0LDQ4SDE5MmE4LDgsMCwwLDAsMC0xNkg2NGE4LDgsMCwwLDAsMCwxNmg2LjQ2TDQ5LjI5LDE2OEg0MGE4LDgsMCwwLDAsMCwxNmg4MHY1NmE4LDgsMCwwLDAsMTYsMFYxODRoODBhOCw4LDAsMCwwLDAtMTZaTTg2LjcxLDQ4aDgyLjU4bDIxLjE3LDEyMEg2NS41NFoiLz48L3N2Zz4=)
 */
export function PhPushPinSimpleDuotoneIcon(props: PhPushPinSimpleDuotoneIconProps) {
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
      <path d="M200,176H56L80,40h96Z" opacity="0.2"/><path d="M216,168h-9.29L185.54,48H192a8,8,0,0,0,0-16H64a8,8,0,0,0,0,16h6.46L49.29,168H40a8,8,0,0,0,0,16h80v56a8,8,0,0,0,16,0V184h80a8,8,0,0,0,0-16ZM86.71,48h82.58l21.17,120H65.54Z"/>
    </svg>
  );
}
