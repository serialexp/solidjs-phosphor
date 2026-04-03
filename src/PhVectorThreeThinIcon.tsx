import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVectorThreeThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuODMsMTM4LjgzbC0zMiwzMmE0LDQsMCwwLDEtNS42Ni01LjY2TDIyMi4zNCwxNDBIMTIxLjY2bC02NCw2NEg5NmE0LDQsMCwwLDEsMCw4SDQ4YTQsNCwwLDAsMS00LTRWMTYwYTQsNCwwLDAsMSw4LDB2MzguMzRsNjQtNjRWMzMuNjZMOTAuODMsNTguODNhNCw0LDAsMCwxLTUuNjYtNS42NmwzMi0zMmE0LDQsMCwwLDEsNS42NiwwbDMyLDMyYTQsNCwwLDAsMS01LjY2LDUuNjZMMTI0LDMzLjY2VjEzMmg5OC4zNGwtMjUuMTctMjUuMTdhNCw0LDAsMCwxLDUuNjYtNS42NmwzMiwzMkE0LDQsMCwwLDEsMjM0LjgzLDEzOC44M1oiLz48L3N2Zz4=)
 */
export function PhVectorThreeThinIcon(props: PhVectorThreeThinIconProps) {
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
      <path d="M234.83,138.83l-32,32a4,4,0,0,1-5.66-5.66L222.34,140H121.66l-64,64H96a4,4,0,0,1,0,8H48a4,4,0,0,1-4-4V160a4,4,0,0,1,8,0v38.34l64-64V33.66L90.83,58.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0l32,32a4,4,0,0,1-5.66,5.66L124,33.66V132h98.34l-25.17-25.17a4,4,0,0,1,5.66-5.66l32,32A4,4,0,0,1,234.83,138.83Z"/>
    </svg>
  );
}
