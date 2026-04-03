import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBookmarkBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjhINzJBMjAsMjAsMCwwLDAsNTIsNDhWMjI0YTEyLDEyLDAsMCwwLDE4LjM2LDEwLjE4bDU3LjYzLTM2LDU3LjY1LDM2QTEyLDEyLDAsMCwwLDIwNCwyMjRWNDhBMjAsMjAsMCwwLDAsMTg0LDI4Wm0tNCwyNFYxNTQuMzVsLTQ1LjY1LTI4LjUzYTEyLDEyLDAsMCwwLTEyLjcyLDBMNzYsMTU0LjM1VjUyWk0xMzQuMzUsMTczLjgyYTEyLDEyLDAsMCwwLTEyLjcyLDBMNzYsMjAyLjM1di0xOS43bDUyLTMyLjUsNTIsMzIuNXYxOS43WiIvPjwvc3ZnPg==)
 */
export function PhBookmarkBoldIcon(props: PhBookmarkBoldIconProps) {
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
      <path d="M184,28H72A20,20,0,0,0,52,48V224a12,12,0,0,0,18.36,10.18l57.63-36,57.65,36A12,12,0,0,0,204,224V48A20,20,0,0,0,184,28Zm-4,24V154.35l-45.65-28.53a12,12,0,0,0-12.72,0L76,154.35V52ZM134.35,173.82a12,12,0,0,0-12.72,0L76,202.35v-19.7l52-32.5,52,32.5v19.7Z"/>
    </svg>
  );
}
