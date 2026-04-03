import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMouseLeftClickBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMTJIMTEyQTY4LjA3LDY4LjA3LDAsMCwwLDQ0LDgwdjk2YTY4LjA3LDY4LjA3LDAsMCwwLDY4LDY4aDMyYTY4LjA3LDY4LjA3LDAsMCwwLDY4LTY4VjgwQTY4LjA3LDY4LjA3LDAsMCwwLDE0NCwxMlptNDQsNjh2MjBIMTQwVjM2aDRBNDQuMDUsNDQuMDUsMCwwLDEsMTg4LDgwWk02OCw4MGE0My42Myw0My42MywwLDAsMSwyLTEzTDEwMywxMDBINjhabTQ4LTQ0Vjc5TDgzLjQ5LDQ2LjUyQTQzLjgzLDQzLjgzLDAsMCwxLDExMiwzNlptMjgsMTg0SDExMmE0NC4wNSw0NC4wNSwwLDAsMS00NC00NFYxMjRIMTg4djUyQTQ0LjA1LDQ0LjA1LDAsMCwxLDE0NCwyMjBaIi8+PC9zdmc+)
 */
export function PhMouseLeftClickBoldIcon(props: PhMouseLeftClickBoldIconProps) {
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
      <path d="M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,68v20H140V36h4A44.05,44.05,0,0,1,188,80ZM68,80a43.63,43.63,0,0,1,2-13L103,100H68Zm48-44V79L83.49,46.52A43.83,43.83,0,0,1,112,36Zm28,184H112a44.05,44.05,0,0,1-44-44V124H188v52A44.05,44.05,0,0,1,144,220Z"/>
    </svg>
  );
}
