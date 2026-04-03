import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMouseRightClickBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMTJIMTEyQTY4LjA3LDY4LjA3LDAsMCwwLDQ0LDgwdjk2YTY4LjA3LDY4LjA3LDAsMCwwLDY4LDY4aDMyYTY4LjA3LDY4LjA3LDAsMCwwLDY4LTY4VjgwQTY4LjA3LDY4LjA3LDAsMCwwLDE0NCwxMlptNDIsNTVhNDMuNjMsNDMuNjMsMCwwLDEsMiwxM3YyMEgxNTNaTTE3Mi41MSw0Ni41MiwxNDAsNzlWMzZoNEE0My44Myw0My44MywwLDAsMSwxNzIuNTEsNDYuNTJaTTExMiwzNmg0djY0SDY4VjgwQTQ0LjA1LDQ0LjA1LDAsMCwxLDExMiwzNlptMzIsMTg0SDExMmE0NC4wNSw0NC4wNSwwLDAsMS00NC00NFYxMjRIMTg4djUyQTQ0LjA1LDQ0LjA1LDAsMCwxLDE0NCwyMjBaIi8+PC9zdmc+)
 */
export function PhMouseRightClickBoldIcon(props: PhMouseRightClickBoldIconProps) {
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
      <path d="M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm42,55a43.63,43.63,0,0,1,2,13v20H153ZM172.51,46.52,140,79V36h4A43.83,43.83,0,0,1,172.51,46.52ZM112,36h4v64H68V80A44.05,44.05,0,0,1,112,36Zm32,184H112a44.05,44.05,0,0,1-44-44V124H188v52A44.05,44.05,0,0,1,144,220Z"/>
    </svg>
  );
}
