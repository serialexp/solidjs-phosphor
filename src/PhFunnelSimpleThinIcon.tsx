import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFunnelSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsMTM2YTQsNCwwLDAsMS00LDRINjRhNCw0LDAsMCwxLDAtOEgxOTJBNCw0LDAsMCwxLDE5NiwxMzZabTM2LTUySDI0YTQsNCwwLDAsMCwwLDhIMjMyYTQsNCwwLDAsMCwwLThabS04MCw5NkgxMDRhNCw0LDAsMCwwLDAsOGg0OGE0LDQsMCwwLDAsMC04WiIvPjwvc3ZnPg==)
 */
export function PhFunnelSimpleThinIcon(props: PhFunnelSimpleThinIconProps) {
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
      <path d="M196,136a4,4,0,0,1-4,4H64a4,4,0,0,1,0-8H192A4,4,0,0,1,196,136Zm36-52H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Zm-80,96H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
