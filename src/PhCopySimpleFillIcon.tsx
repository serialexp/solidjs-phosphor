import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCopySimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNzJWMjE2YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOFY3MmE4LDgsMCwwLDEsOC04SDE4NEE4LDgsMCwwLDEsMTkyLDcyWm0yNC00MEg3MmE4LDgsMCwwLDAsMCwxNkgyMDhWMTg0YTgsOCwwLDAsMCwxNiwwVjQwQTgsOCwwLDAsMCwyMTYsMzJaIi8+PC9zdmc+)
 */
export function PhCopySimpleFillIcon(props: PhCopySimpleFillIconProps) {
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
      <path d="M192,72V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184A8,8,0,0,1,192,72Zm24-40H72a8,8,0,0,0,0,16H208V184a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z"/>
    </svg>
  );
}
