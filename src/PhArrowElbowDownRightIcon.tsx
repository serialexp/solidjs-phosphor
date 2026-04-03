import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowDownRightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuNjYsMTgxLjY2bC00OCw0OGE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTk2LjY5LDE4NEg3MmE4LDgsMCwwLDEtOC04VjMyYTgsOCwwLDAsMSwxNiwwVjE2OEgxOTYuNjlsLTM0LjM1LTM0LjM0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMmw0OCw0OEE4LDgsMCwwLDEsMjIxLjY2LDE4MS42NloiLz48L3N2Zz4=)
 */
export function PhArrowElbowDownRightIcon(props: PhArrowElbowDownRightIconProps) {
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
      <path d="M221.66,181.66l-48,48a8,8,0,0,1-11.32-11.32L196.69,184H72a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168H196.69l-34.35-34.34a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,221.66,181.66Z"/>
    </svg>
  );
}
