import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotificationLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQsMTI4djgwYTE0LDE0LDAsMCwxLTE0LDE0SDQ4YTE0LDE0LDAsMCwxLTE0LTE0VjU2QTE0LDE0LDAsMCwxLDQ4LDQyaDgwYTYsNiwwLDAsMSwwLDEySDQ4YTIsMiwwLDAsMC0yLDJWMjA4YTIsMiwwLDAsMCwyLDJIMjAwYTIsMiwwLDAsMCwyLTJWMTI4YTYsNiwwLDAsMSwxMiwwWm0xNi02OGEzNCwzNCwwLDEsMS0zNC0zNEEzNCwzNCwwLDAsMSwyMzAsNjBabS0xMiwwYTIyLDIyLDAsMSwwLTIyLDIyQTIyLDIyLDAsMCwwLDIxOCw2MFoiLz48L3N2Zz4=)
 */
export function PhNotificationLightIcon(props: PhNotificationLightIconProps) {
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
      <path d="M214,128v80a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V56A14,14,0,0,1,48,42h80a6,6,0,0,1,0,12H48a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V128a6,6,0,0,1,12,0Zm16-68a34,34,0,1,1-34-34A34,34,0,0,1,230,60Zm-12,0a22,22,0,1,0-22,22A22,22,0,0,0,218,60Z"/>
    </svg>
  );
}
