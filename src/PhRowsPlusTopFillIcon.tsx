import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRowsPlusTopFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTc2djI0YTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjE3NmExNiwxNiwwLDAsMSwxNi0xNkgyMDhBMTYsMTYsMCwwLDEsMjI0LDE3NlpNMjA4LDg4SDQ4YTE2LDE2LDAsMCwwLTE2LDE2djI0YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlYxMDRBMTYsMTYsMCwwLDAsMjA4LDg4Wk0xMDQsNDhoMTZWNjRhOCw4LDAsMCwwLDE2LDBWNDhoMTZhOCw4LDAsMCwwLDAtMTZIMTM2VjE2YTgsOCwwLDAsMC0xNiwwVjMySDEwNGE4LDgsMCwwLDAsMCwxNloiLz48L3N2Zz4=)
 */
export function PhRowsPlusTopFillIcon(props: PhRowsPlusTopFillIconProps) {
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
      <path d="M224,176v24a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16H208A16,16,0,0,1,224,176ZM208,88H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104A16,16,0,0,0,208,88ZM104,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H136V16a8,8,0,0,0-16,0V32H104a8,8,0,0,0,0,16Z"/>
    </svg>
  );
}
