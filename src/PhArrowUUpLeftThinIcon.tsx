import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUUpLeftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTQ0YTYwLjA3LDYwLjA3LDAsMCwxLTYwLDYwSDgwYTQsNCwwLDAsMSwwLThoODhhNTIsNTIsMCwwLDAsMC0xMDRINDEuNjZsNDEuMTcsNDEuMTdhNCw0LDAsMCwxLTUuNjYsNS42NmwtNDgtNDhhNCw0LDAsMCwxLDAtNS42Nmw0OC00OGE0LDQsMCwwLDEsNS42Niw1LjY2TDQxLjY2LDg0SDE2OEE2MC4wNyw2MC4wNywwLDAsMSwyMjgsMTQ0WiIvPjwvc3ZnPg==)
 */
export function PhArrowUUpLeftThinIcon(props: PhArrowUUpLeftThinIconProps) {
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
      <path d="M228,144a60.07,60.07,0,0,1-60,60H80a4,4,0,0,1,0-8h88a52,52,0,0,0,0-104H41.66l41.17,41.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,0,1,5.66,5.66L41.66,84H168A60.07,60.07,0,0,1,228,144Z"/>
    </svg>
  );
}
