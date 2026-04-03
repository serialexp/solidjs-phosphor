import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotificationThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTI4djgwYTEyLDEyLDAsMCwxLTEyLDEySDQ4YTEyLDEyLDAsMCwxLTEyLTEyVjU2QTEyLDEyLDAsMCwxLDQ4LDQ0aDgwYTQsNCwwLDAsMSwwLDhINDhhNCw0LDAsMCwwLTQsNFYyMDhhNCw0LDAsMCwwLDQsNEgyMDBhNCw0LDAsMCwwLDQtNFYxMjhhNCw0LDAsMCwxLDgsMFptMTYtNjhhMzIsMzIsMCwxLDEtMzItMzJBMzIsMzIsMCwwLDEsMjI4LDYwWm0tOCwwYTI0LDI0LDAsMSwwLTI0LDI0QTI0LDI0LDAsMCwwLDIyMCw2MFoiLz48L3N2Zz4=)
 */
export function PhNotificationThinIcon(props: PhNotificationThinIconProps) {
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
      <path d="M212,128v80a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V56A12,12,0,0,1,48,44h80a4,4,0,0,1,0,8H48a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4V128a4,4,0,0,1,8,0Zm16-68a32,32,0,1,1-32-32A32,32,0,0,1,228,60Zm-8,0a24,24,0,1,0-24,24A24,24,0,0,0,220,60Z"/>
    </svg>
  );
}
