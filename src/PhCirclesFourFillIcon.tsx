import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCirclesFourFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsODBBNDAsNDAsMCwxLDEsODAsNDAsNDAsNDAsMCwwLDEsMTIwLDgwWm01Niw0MGE0MCw0MCwwLDEsMC00MC00MEE0MCw0MCwwLDAsMCwxNzYsMTIwWk04MCwxMzZhNDAsNDAsMCwxLDAsNDAsNDBBNDAsNDAsMCwwLDAsODAsMTM2Wm05NiwwYTQwLDQwLDAsMSwwLDQwLDQwQTQwLDQwLDAsMCwwLDE3NiwxMzZaIi8+PC9zdmc+)
 */
export function PhCirclesFourFillIcon(props: PhCirclesFourFillIconProps) {
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
      <path d="M120,80A40,40,0,1,1,80,40,40,40,0,0,1,120,80Zm56,40a40,40,0,1,0-40-40A40,40,0,0,0,176,120ZM80,136a40,40,0,1,0,40,40A40,40,0,0,0,80,136Zm96,0a40,40,0,1,0,40,40A40,40,0,0,0,176,136Z"/>
    </svg>
  );
}
