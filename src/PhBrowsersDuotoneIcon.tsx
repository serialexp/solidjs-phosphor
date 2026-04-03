import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBrowsersDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZWMTY4YTgsOCwwLDAsMS04LDhIMTkyVjg4YTgsOCwwLDAsMC04LThINjRWNTZhOCw4LDAsMCwxLDgtOEgyMTZBOCw4LDAsMCwxLDIyNCw1NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMTYsNDBINzJBMTYsMTYsMCwwLDAsNTYsNTZWNzJINDBBMTYsMTYsMCwwLDAsMjQsODhWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDE4NGExNiwxNiwwLDAsMCwxNi0xNlYxODRoMTZhMTYsMTYsMCwwLDAsMTYtMTZWNTZBMTYsMTYsMCwwLDAsMjE2LDQwWk00MCw4OEgxODR2MTZINDBaTTE4NCwyMDBINDBWMTIwSDE4NHY4MFptMzItMzJIMjAwVjg4YTE2LDE2LDAsMCwwLTE2LTE2SDcyVjU2SDIxNloiLz48L3N2Zz4=)
 */
export function PhBrowsersDuotoneIcon(props: PhBrowsersDuotoneIconProps) {
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
      <path d="M224,56V168a8,8,0,0,1-8,8H192V88a8,8,0,0,0-8-8H64V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"/><path d="M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,88H184v16H40ZM184,200H40V120H184v80Zm32-32H200V88a16,16,0,0,0-16-16H72V56H216Z"/>
    </svg>
  );
}
