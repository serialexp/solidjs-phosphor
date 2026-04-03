import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArchiveThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTJIMzJBMTIsMTIsMCwwLDAsMjAsNjRWODhhMTIsMTIsMCwwLDAsMTIsMTJoNHY5MmExMiwxMiwwLDAsMCwxMiwxMkgyMDhhMTIsMTIsMCwwLDAsMTItMTJWMTAwaDRhMTIsMTIsMCwwLDAsMTItMTJWNjRBMTIsMTIsMCwwLDAsMjI0LDUyWk0yMTIsMTkyYTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFYxMDBIMjEyWk0yMjgsODhhNCw0LDAsMCwxLTQsNEgzMmE0LDQsMCwwLDEtNC00VjY0YTQsNCwwLDAsMSw0LTRIMjI0YTQsNCwwLDAsMSw0LDRaTTEwMCwxMzZhNCw0LDAsMCwxLDQtNGg0OGE0LDQsMCwwLDEsMCw4SDEwNEE0LDQsMCwwLDEsMTAwLDEzNloiLz48L3N2Zz4=)
 */
export function PhArchiveThinIcon(props: PhArchiveThinIconProps) {
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
      <path d="M224,52H32A12,12,0,0,0,20,64V88a12,12,0,0,0,12,12h4v92a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V100h4a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52ZM212,192a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V100H212ZM228,88a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4ZM100,136a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H104A4,4,0,0,1,100,136Z"/>
    </svg>
  );
}
