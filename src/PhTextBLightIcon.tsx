import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextBLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzQuNjksMTE2LjQxQTQyLDQyLDAsMCwwLDE0OCw0Mkg4MGE2LDYsMCwwLDAtNiw2VjIwMGE2LDYsMCwwLDAsNiw2aDgwYTQ2LDQ2LDAsMCwwLDE0LjY5LTg5LjU5Wk04Niw1NGg2MmEzMCwzMCwwLDAsMSwwLDYwSDg2Wm03NCwxNDBIODZWMTI2aDc0YTM0LDM0LDAsMCwxLDAsNjhaIi8+PC9zdmc+)
 */
export function PhTextBLightIcon(props: PhTextBLightIconProps) {
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
      <path d="M174.69,116.41A42,42,0,0,0,148,42H80a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6h80a46,46,0,0,0,14.69-89.59ZM86,54h62a30,30,0,0,1,0,60H86Zm74,140H86V126h74a34,34,0,0,1,0,68Z"/>
    </svg>
  );
}
