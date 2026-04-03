import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNetworkFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTIwYTgsOCwwLDAsMS04LDhIMjAwdjMyaDhhMTYsMTYsMCwwLDEsMTYsMTZ2MzJhMTYsMTYsMCwwLDEtMTYsMTZIMTc2YTE2LDE2LDAsMCwxLTE2LTE2VjE3NmExNiwxNiwwLDAsMSwxNi0xNmg4VjEyOEg3MnYzMmg4YTE2LDE2LDAsMCwxLDE2LDE2djMyYTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjE3NmExNiwxNiwwLDAsMSwxNi0xNmg4VjEyOEgyNGE4LDgsMCwwLDEsMC0xNmg5NlY4OGgtOEExNiwxNiwwLDAsMSw5Niw3MlY0MGExNiwxNiwwLDAsMSwxNi0xNmgzMmExNiwxNiwwLDAsMSwxNiwxNlY3MmExNiwxNiwwLDAsMS0xNiwxNmgtOHYyNGg5NkE4LDgsMCwwLDEsMjQwLDEyMFoiLz48L3N2Zz4=)
 */
export function PhNetworkFillIcon(props: PhNetworkFillIconProps) {
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
      <path d="M240,120a8,8,0,0,1-8,8H200v32h8a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16h8V128H72v32h8a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16h8V128H24a8,8,0,0,1,0-16h96V88h-8A16,16,0,0,1,96,72V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72a16,16,0,0,1-16,16h-8v24h96A8,8,0,0,1,240,120Z"/>
    </svg>
  );
}
