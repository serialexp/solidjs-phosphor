import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhListMagnifyingGlassThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNiw2NGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsMCw4SDQwQTQsNCwwLDAsMSwzNiw2NFptNCw2OGg3MmE0LDQsMCwwLDAsMC04SDQwYTQsNCwwLDAsMCwwLDhabTg4LDU2SDQwYTQsNCwwLDAsMCwwLDhoODhhNCw0LDAsMCwwLDAtOFptMTA2LjgzLDYuODNhNCw0LDAsMCwxLTUuNjYsMGwtMjIuNzItMjIuNzJhMzYuMDYsMzYuMDYsMCwxLDEsNS42Ni01LjY2bDIyLjcyLDIyLjcyQTQsNCwwLDAsMSwyMzQuODMsMTk0LjgzWk0xODQsMTcyYTI4LDI4LDAsMSwwLTI4LTI4QTI4LDI4LDAsMCwwLDE4NCwxNzJaIi8+PC9zdmc+)
 */
export function PhListMagnifyingGlassThinIcon(props: PhListMagnifyingGlassThinIconProps) {
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
      <path d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,68h72a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm88,56H40a4,4,0,0,0,0,8h88a4,4,0,0,0,0-8Zm106.83,6.83a4,4,0,0,1-5.66,0l-22.72-22.72a36.06,36.06,0,1,1,5.66-5.66l22.72,22.72A4,4,0,0,1,234.83,194.83ZM184,172a28,28,0,1,0-28-28A28,28,0,0,0,184,172Z"/>
    </svg>
  );
}
