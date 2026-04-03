import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotMemberOfThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuNjksMzdhNCw0LDAsMCwwLTUuNjUuMjdMMTk5LDQ0SDEyOEE4NCw4NCwwLDAsMCw2OC42MywxODcuMzZMNDUsMjEzLjMxQTQsNCwwLDEsMCw1MSwyMTguNjlsMjMuNTgtMjUuOTRBODMuNjQsODMuNjQsMCwwLDAsMTI4LDIxMmg3MmE0LDQsMCwwLDAsMC04SDEyOGE3NS42Niw3NS42NiwwLDAsMS00OC4wNy0xNy4xOEwxMjkuNzcsMTMySDIwMGE0LDQsMCwwLDAsMC04SDEzN0wyMTEsNDIuNjlBNCw0LDAsMCwwLDIxMC42OSwzN1pNNzQsMTgxLjQzQTc1LjcsNzUuNywwLDAsMSw1Mi4xMSwxMzJIMTE5Wk01Mi4xMSwxMjRBNzYuMDksNzYuMDksMCwwLDEsMTI4LDUyaDYzLjY5bC02NS40Niw3MloiLz48L3N2Zz4=)
 */
export function PhNotMemberOfThinIcon(props: PhNotMemberOfThinIconProps) {
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
      <path d="M210.69,37a4,4,0,0,0-5.65.27L199,44H128A84,84,0,0,0,68.63,187.36L45,213.31A4,4,0,1,0,51,218.69l23.58-25.94A83.64,83.64,0,0,0,128,212h72a4,4,0,0,0,0-8H128a75.66,75.66,0,0,1-48.07-17.18L129.77,132H200a4,4,0,0,0,0-8H137L211,42.69A4,4,0,0,0,210.69,37ZM74,181.43A75.7,75.7,0,0,1,52.11,132H119ZM52.11,124A76.09,76.09,0,0,1,128,52h63.69l-65.46,72Z"/>
    </svg>
  );
}
