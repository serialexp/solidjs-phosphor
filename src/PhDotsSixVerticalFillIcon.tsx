import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsSixVerticalFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTZINjRBMTYsMTYsMCwwLDAsNDgsMzJWMjI0YTE2LDE2LDAsMCwwLDE2LDE2SDE5MmExNiwxNiwwLDAsMCwxNi0xNlYzMkExNiwxNiwwLDAsMCwxOTIsMTZaTTEwMCwyMDBhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTAwLDIwMFptMC02MGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxMDAsMTQwWm0wLTYwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEwMCw4MFptNTYsMTIwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE1NiwyMDBabTAtNjBhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTU2LDE0MFptMC02MGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxNTYsODBaIi8+PC9zdmc+)
 */
export function PhDotsSixVerticalFillIcon(props: PhDotsSixVerticalFillIconProps) {
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
      <path d="M192,16H64A16,16,0,0,0,48,32V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V32A16,16,0,0,0,192,16ZM100,200a12,12,0,1,1,12-12A12,12,0,0,1,100,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,80Zm56,120a12,12,0,1,1,12-12A12,12,0,0,1,156,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,80Z"/>
    </svg>
  );
}
