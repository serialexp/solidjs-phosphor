import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsInLineHorizontalDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsNTZWMjAwYTE2LDE2LDAsMCwxLTE2LDE2SDMyYTE2LDE2LDAsMCwxLTE2LTE2VjU2QTE2LDE2LDAsMCwxLDMyLDQwSDIyNEExNiwxNiwwLDAsMSwyNDAsNTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTM2LDQwVjIxNmE4LDgsMCwwLDEtMTYsMFY0MGE4LDgsMCwwLDEsMTYsMFpNNjkuNjYsOTAuMzRhOCw4LDAsMCwwLTExLjMyLDExLjMyTDc2LjY5LDEyMEgxNmE4LDgsMCwwLDAsMCwxNkg3Ni42OUw1OC4zNCwxNTQuMzRhOCw4LDAsMCwwLDExLjMyLDExLjMybDMyLTMyYTgsOCwwLDAsMCwwLTExLjMyWk0yNDAsMTIwSDE3OS4zMWwxOC4zNS0xOC4zNGE4LDgsMCwwLDAtMTEuMzItMTEuMzJsLTMyLDMyYTgsOCwwLDAsMCwwLDExLjMybDMyLDMyYTgsOCwwLDAsMCwxMS4zMi0xMS4zMkwxNzkuMzEsMTM2SDI0MGE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 */
export function PhArrowsInLineHorizontalDuotoneIcon(props: PhArrowsInLineHorizontalDuotoneIconProps) {
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
      <path d="M240,56V200a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V56A16,16,0,0,1,32,40H224A16,16,0,0,1,240,56Z" opacity="0.2"/><path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM69.66,90.34a8,8,0,0,0-11.32,11.32L76.69,120H16a8,8,0,0,0,0,16H76.69L58.34,154.34a8,8,0,0,0,11.32,11.32l32-32a8,8,0,0,0,0-11.32ZM240,120H179.31l18.35-18.34a8,8,0,0,0-11.32-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L179.31,136H240a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
