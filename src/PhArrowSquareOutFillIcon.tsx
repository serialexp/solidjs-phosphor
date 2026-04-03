import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowSquareOutFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTM2djcyYTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjgwQTE2LDE2LDAsMCwxLDQ4LDY0aDcyYTgsOCwwLDAsMSwwLDE2SDQ4VjIwOEgxNzZWMTM2YTgsOCwwLDAsMSwxNiwwWm0zMi05NmE4LDgsMCwwLDAtOC04SDE1MmE4LDgsMCwwLDAtNS42NiwxMy42NkwxNzIuNjksNzJsLTQyLjM1LDQyLjM0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMkwxODQsODMuMzFsMjYuMzQsMjYuMzVBOCw4LDAsMCwwLDIyNCwxMDRaIi8+PC9zdmc+)
 */
export function PhArrowSquareOutFillIcon(props: PhArrowSquareOutFillIconProps) {
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
      <path d="M192,136v72a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64h72a8,8,0,0,1,0,16H48V208H176V136a8,8,0,0,1,16,0Zm32-96a8,8,0,0,0-8-8H152a8,8,0,0,0-5.66,13.66L172.69,72l-42.35,42.34a8,8,0,0,0,11.32,11.32L184,83.31l26.34,26.35A8,8,0,0,0,224,104Z"/>
    </svg>
  );
}
