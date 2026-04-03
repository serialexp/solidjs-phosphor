import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLockSimpleDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsOTZWMjA4YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFY5NmE4LDgsMCwwLDEsOC04SDIwOEE4LDgsMCwwLDEsMjE2LDk2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCw4MEgxNzZWNTZhNDgsNDgsMCwwLDAtOTYsMFY4MEg0OEExNiwxNiwwLDAsMCwzMiw5NlYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2Vjk2QTE2LDE2LDAsMCwwLDIwOCw4MFpNOTYsNTZhMzIsMzIsMCwwLDEsNjQsMFY4MEg5NlpNMjA4LDIwOEg0OFY5NkgyMDhWMjA4WiIvPjwvc3ZnPg==)
 */
export function PhLockSimpleDuotoneIcon(props: PhLockSimpleDuotoneIconProps) {
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
      <path d="M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z" opacity="0.2"/><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"/>
    </svg>
  );
}
