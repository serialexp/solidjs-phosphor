import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineRightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODkuNjYsMTIyLjM0YTgsOCwwLDAsMSwwLDExLjMybC03Miw3MmE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTY0LjY5LDEzNkgzMmE4LDgsMCwwLDEsMC0xNkgxNjQuNjlMMTA2LjM0LDYxLjY2YTgsOCwwLDAsMSwxMS4zMi0xMS4zMlpNMjE2LDMyYTgsOCwwLDAsMC04LDhWMjE2YTgsOCwwLDAsMCwxNiwwVjQwQTgsOCwwLDAsMCwyMTYsMzJaIi8+PC9zdmc+)
 */
export function PhArrowLineRightIcon(props: PhArrowLineRightIconProps) {
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
      <path d="M189.66,122.34a8,8,0,0,1,0,11.32l-72,72a8,8,0,0,1-11.32-11.32L164.69,136H32a8,8,0,0,1,0-16H164.69L106.34,61.66a8,8,0,0,1,11.32-11.32ZM216,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z"/>
    </svg>
  );
}
