import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextColumnsThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTYsNjRhNCw0LDAsMCwxLTQsNEg0MGE0LDQsMCwwLDEsMC04aDcyQTQsNCwwLDAsMSwxMTYsNjRabS00LDM2SDQwYTQsNCwwLDAsMCwwLDhoNzJhNCw0LDAsMCwwLDAtOFptMCw0MEg0MGE0LDQsMCwwLDAsMCw4aDcyYTQsNCwwLDAsMCwwLThabTAsNDBINDBhNCw0LDAsMCwwLDAsOGg3MmE0LDQsMCwwLDAsMC04Wk0xNDQsNjhoNzJhNCw0LDAsMCwwLDAtOEgxNDRhNCw0LDAsMCwwLDAsOFptNzIsMzJIMTQ0YTQsNCwwLDAsMCwwLDhoNzJhNCw0LDAsMCwwLDAtOFptMCw0MEgxNDRhNCw0LDAsMCwwLDAsOGg3MmE0LDQsMCwwLDAsMC04Wm0wLDQwSDE0NGE0LDQsMCwwLDAsMCw4aDcyYTQsNCwwLDAsMCwwLThaIi8+PC9zdmc+)
 */
export function PhTextColumnsThinIcon(props: PhTextColumnsThinIconProps) {
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
      <path d="M116,64a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8h72A4,4,0,0,1,116,64Zm-4,36H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8ZM144,68h72a4,4,0,0,0,0-8H144a4,4,0,0,0,0,8Zm72,32H144a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H144a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H144a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
