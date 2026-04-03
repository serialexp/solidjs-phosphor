import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignCenterHorizontalSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODRIMTMyVjQ4YTQsNCwwLDAsMC04LDBWODRINDhBMTIsMTIsMCwwLDAsMzYsOTZ2NjRhMTIsMTIsMCwwLDAsMTIsMTJoNzZ2MzZhNCw0LDAsMCwwLDgsMFYxNzJoNzZhMTIsMTIsMCwwLDAsMTItMTJWOTZBMTIsMTIsMCwwLDAsMjA4LDg0Wm00LDc2YTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFY5NmE0LDQsMCwwLDEsNC00SDIwOGE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
export function PhAlignCenterHorizontalSimpleThinIcon(props: PhAlignCenterHorizontalSimpleThinIconProps) {
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
      <path d="M208,84H132V48a4,4,0,0,0-8,0V84H48A12,12,0,0,0,36,96v64a12,12,0,0,0,12,12h76v36a4,4,0,0,0,8,0V172h76a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84Zm4,76a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
