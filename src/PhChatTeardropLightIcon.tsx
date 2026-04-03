import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatTeardropLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzIsMjZhOTguMTEsOTguMTEsMCwwLDAtOTgsOTh2ODRhMTQsMTQsMCwwLDAsMTQsMTRoODRhOTgsOTgsMCwwLDAsMC0xOTZabTAsMTg0SDQ4YTIsMiwwLDAsMS0yLTJWMTI0YTg2LDg2LDAsMSwxLDg2LDg2WiIvPjwvc3ZnPg==)
 */
export function PhChatTeardropLightIcon(props: PhChatTeardropLightIconProps) {
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
      <path d="M132,26a98.11,98.11,0,0,0-98,98v84a14,14,0,0,0,14,14h84a98,98,0,0,0,0-196Zm0,184H48a2,2,0,0,1-2-2V124a86,86,0,1,1,86,86Z"/>
    </svg>
  );
}
