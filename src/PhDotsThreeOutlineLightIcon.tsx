import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsThreeOutlineLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsOThhMzAsMzAsMCwxLDAsMzAsMzBBMzAsMzAsMCwwLDAsMTI4LDk4Wm0wLDQ4YTE4LDE4LDAsMSwxLDE4LTE4QTE4LDE4LDAsMCwxLDEyOCwxNDZaTTQ4LDk4YTMwLDMwLDAsMSwwLDMwLDMwQTMwLDMwLDAsMCwwLDQ4LDk4Wm0wLDQ4YTE4LDE4LDAsMSwxLDE4LTE4QTE4LDE4LDAsMCwxLDQ4LDE0NlpNMjA4LDk4YTMwLDMwLDAsMSwwLDMwLDMwQTMwLDMwLDAsMCwwLDIwOCw5OFptMCw0OGExOCwxOCwwLDEsMSwxOC0xOEExOCwxOCwwLDAsMSwyMDgsMTQ2WiIvPjwvc3ZnPg==)
 */
export function PhDotsThreeOutlineLightIcon(props: PhDotsThreeOutlineLightIconProps) {
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
      <path d="M128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146ZM48,98a30,30,0,1,0,30,30A30,30,0,0,0,48,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,48,146ZM208,98a30,30,0,1,0,30,30A30,30,0,0,0,208,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,208,146Z"/>
    </svg>
  );
}
