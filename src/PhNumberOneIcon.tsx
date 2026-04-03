import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberOneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsNDhWMjA4YTgsOCwwLDAsMS0xNiwwVjYyLjEzTDEwMC4xMiw3OC44NmE4LDgsMCwxLDEtOC4yNC0xMy43Mmw0MC0yNEE4LDgsMCwwLDEsMTQ0LDQ4WiIvPjwvc3ZnPg==)
 */
export function PhNumberOneIcon(props: PhNumberOneIconProps) {
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
      <path d="M144,48V208a8,8,0,0,1-16,0V62.13L100.12,78.86a8,8,0,1,1-8.24-13.72l40-24A8,8,0,0,1,144,48Z"/>
    </svg>
  );
}
