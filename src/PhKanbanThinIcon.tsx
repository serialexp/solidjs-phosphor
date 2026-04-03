import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhKanbanThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTJINDBhNCw0LDAsMCwwLTQsNFYyMDhhMTIsMTIsMCwwLDAsMTIsMTJIODhhMTIsMTIsMCwwLDAsMTItMTJWMTU2aDU2djIwYTEyLDEyLDAsMCwwLDEyLDEyaDQwYTEyLDEyLDAsMCwwLDEyLTEyVjU2QTQsNCwwLDAsMCwyMTYsNTJaTTkyLDIwOGE0LDQsMCwwLDEtNCw0SDQ4YTQsNCwwLDAsMS00LTRWMTI0SDkyWm0wLTkySDQ0VjYwSDkyWm02NCwzMkgxMDBWNjBoNTZabTU2LDI4YTQsNCwwLDAsMS00LDRIMTY4YTQsNCwwLDAsMS00LTRWMTI0aDQ4Wm0wLTYwSDE2NFY2MGg0OFoiLz48L3N2Zz4=)
 */
export function PhKanbanThinIcon(props: PhKanbanThinIconProps) {
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
      <path d="M216,52H40a4,4,0,0,0-4,4V208a12,12,0,0,0,12,12H88a12,12,0,0,0,12-12V156h56v20a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V56A4,4,0,0,0,216,52ZM92,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V124H92Zm0-92H44V60H92Zm64,32H100V60h56Zm56,28a4,4,0,0,1-4,4H168a4,4,0,0,1-4-4V124h48Zm0-60H164V60h48Z"/>
    </svg>
  );
}
