import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBellSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMjI0YTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMSwxLDAtMTZoNjRBOCw4LDAsMCwxLDE2OCwyMjRabTUzLjgxLTQ4LjA2QzIxNi4yNSwxNjYuMzgsMjA4LDEzOS4zMywyMDgsMTA0YTgwLDgwLDAsMSwwLTE2MCwwYzAsMzUuMzQtOC4yNiw2Mi4zOC0xMy44MSw3MS45NEExNiwxNiwwLDAsMCw0OCwyMDBIMjA4YTE2LDE2LDAsMCwwLDEzLjgtMjQuMDZaIi8+PC9zdmc+)
 */
export function PhBellSimpleFillIcon(props: PhBellSimpleFillIconProps) {
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
      <path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.81-48.06C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H208a16,16,0,0,0,13.8-24.06Z"/>
    </svg>
  );
}
