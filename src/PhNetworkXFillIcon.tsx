import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNetworkXFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTIwYTgsOCwwLDAsMS04LDhIMjAwdjE2YTgsOCwwLDAsMS0xNiwwVjEyOEg3MnYzMmg4YTE2LDE2LDAsMCwxLDE2LDE2djMyYTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjE3NmExNiwxNiwwLDAsMSwxNi0xNmg4VjEyOEgyNGE4LDgsMCwwLDEsMC0xNmg5NlY4OGgtOEExNiwxNiwwLDAsMSw5Niw3MlY0MGExNiwxNiwwLDAsMSwxNi0xNmgzMmExNiwxNiwwLDAsMSwxNiwxNlY3MmExNiwxNiwwLDAsMS0xNiwxNmgtOHYyNGg5NkE4LDgsMCwwLDEsMjQwLDEyMFptLTE4LjM0LDQyLjM0YTgsOCwwLDAsMC0xMS4zMiwwTDE5MiwxODAuNjlsLTE4LjM0LTE4LjM1YTgsOCwwLDAsMC0xMS4zMiwxMS4zMkwxODAuNjksMTkybC0xOC4zNSwxOC4zNGE4LDgsMCwwLDAsMTEuMzIsMTEuMzJMMTkyLDIwMy4zMWwxOC4zNCwxOC4zNWE4LDgsMCwwLDAsMTEuMzItMTEuMzJMMjAzLjMxLDE5MmwxOC4zNS0xOC4zNEE4LDgsMCwwLDAsMjIxLjY2LDE2Mi4zNFoiLz48L3N2Zz4=)
 */
export function PhNetworkXFillIcon(props: PhNetworkXFillIconProps) {
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
      <path d="M240,120a8,8,0,0,1-8,8H200v16a8,8,0,0,1-16,0V128H72v32h8a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16h8V128H24a8,8,0,0,1,0-16h96V88h-8A16,16,0,0,1,96,72V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72a16,16,0,0,1-16,16h-8v24h96A8,8,0,0,1,240,120Zm-18.34,42.34a8,8,0,0,0-11.32,0L192,180.69l-18.34-18.35a8,8,0,0,0-11.32,11.32L180.69,192l-18.35,18.34a8,8,0,0,0,11.32,11.32L192,203.31l18.34,18.35a8,8,0,0,0,11.32-11.32L203.31,192l18.35-18.34A8,8,0,0,0,221.66,162.34Z"/>
    </svg>
  );
}
