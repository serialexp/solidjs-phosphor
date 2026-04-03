import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyKztIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsOTZhOCw4LDAsMCwxLTgsOEgxMzZWMjE2YTgsOCwwLDAsMS0xNiwwVjEwNEg1NmE4LDgsMCwwLDEsMC0xNkgyMDBBOCw4LDAsMCwxLDIwOCw5NlpNNTYsNjRIMjAwYTgsOCwwLDAsMCwwLTE2SDU2YTgsOCwwLDAsMCwwLDE2WiIvPjwvc3ZnPg==)
 */
export function PhCurrencyKztIcon(props: PhCurrencyKztIconProps) {
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
      <path d="M208,96a8,8,0,0,1-8,8H136V216a8,8,0,0,1-16,0V104H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM56,64H200a8,8,0,0,0,0-16H56a8,8,0,0,0,0,16Z"/>
    </svg>
  );
}
