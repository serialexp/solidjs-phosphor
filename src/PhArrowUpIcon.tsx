import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUpIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuNjYsMTE3LjY2YTgsOCwwLDAsMS0xMS4zMiwwTDEzNiw1OS4zMVYyMTZhOCw4LDAsMCwxLTE2LDBWNTkuMzFMNjEuNjYsMTE3LjY2YTgsOCwwLDAsMS0xMS4zMi0xMS4zMmw3Mi03MmE4LDgsMCwwLDEsMTEuMzIsMGw3Miw3MkE4LDgsMCwwLDEsMjA1LjY2LDExNy42NloiLz48L3N2Zz4=)
 */
export function PhArrowUpIcon(props: PhArrowUpIconProps) {
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
      <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"/>
    </svg>
  );
}
