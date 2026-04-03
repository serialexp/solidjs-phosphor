import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUDownRightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMTczLjY2bC00OCw0OGE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMjA0LjY5LDE3Nkg4OEE2NCw2NCwwLDAsMSw4OCw0OGg4OGE4LDgsMCwwLDEsMCwxNkg4OGE0OCw0OCwwLDAsMCwwLDk2SDIwNC42OWwtMzQuMzUtMzQuMzRhOCw4LDAsMCwxLDExLjMyLTExLjMybDQ4LDQ4QTgsOCwwLDAsMSwyMjkuNjYsMTczLjY2WiIvPjwvc3ZnPg==)
 */
export function PhArrowUDownRightIcon(props: PhArrowUDownRightIconProps) {
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
      <path d="M229.66,173.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,176H88A64,64,0,0,1,88,48h88a8,8,0,0,1,0,16H88a48,48,0,0,0,0,96H204.69l-34.35-34.34a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,173.66Z"/>
    </svg>
  );
}
