import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowDownRightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsODhWMTkyYTEyLDEyLDAsMCwxLTEyLDEySDg4YTEyLDEyLDAsMCwxLDAtMjRoNzVMNTUuNTEsNzIuNDhhMTIsMTIsMCwwLDEsMTctMTdMMTgwLDE2M1Y4OGExMiwxMiwwLDAsMSwyNCwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowDownRightBoldIcon(props: PhArrowDownRightBoldIconProps) {
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
      <path d="M204,88V192a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h75L55.51,72.48a12,12,0,0,1,17-17L180,163V88a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
