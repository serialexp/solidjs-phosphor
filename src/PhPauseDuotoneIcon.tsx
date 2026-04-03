import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPauseDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDhWMjA4YTgsOCwwLDAsMS04LDhIMTYwYTgsOCwwLDAsMS04LThWNDhhOCw4LDAsMCwxLDgtOGg0MEE4LDgsMCwwLDEsMjA4LDQ4Wk05Niw0MEg1NmE4LDgsMCwwLDAtOCw4VjIwOGE4LDgsMCwwLDAsOCw4SDk2YTgsOCwwLDAsMCw4LThWNDhBOCw4LDAsMCwwLDk2LDQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwMCwzMkgxNjBhMTYsMTYsMCwwLDAtMTYsMTZWMjA4YTE2LDE2LDAsMCwwLDE2LDE2aDQwYTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwMCwzMlptMCwxNzZIMTYwVjQ4aDQwWk05NiwzMkg1NkExNiwxNiwwLDAsMCw0MCw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIOTZhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsOTYsMzJabTAsMTc2SDU2VjQ4SDk2WiIvPjwvc3ZnPg==)
 */
export function PhPauseDuotoneIcon(props: PhPauseDuotoneIconProps) {
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
      <path d="M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z" opacity="0.2"/><path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"/>
    </svg>
  );
}
