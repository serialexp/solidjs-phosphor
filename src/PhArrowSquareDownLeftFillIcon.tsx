import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowSquareDownLeftFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJabS00Mi4zNCw2OS42NkwxMTUuMzEsMTUySDE0NGE4LDgsMCwwLDEsMCwxNkg5NmE4LDgsMCwwLDEtOC04VjExMmE4LDgsMCwwLDEsMTYsMHYyOC42OWw1MC4zNC01MC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJaIi8+PC9zdmc+)
 */
export function PhArrowSquareDownLeftFillIcon(props: PhArrowSquareDownLeftFillIconProps) {
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
      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-42.34,69.66L115.31,152H144a8,8,0,0,1,0,16H96a8,8,0,0,1-8-8V112a8,8,0,0,1,16,0v28.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/>
    </svg>
  );
}
