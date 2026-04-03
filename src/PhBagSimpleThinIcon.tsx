import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBagSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjhIMTcyVjY0YTQ0LDQ0LDAsMCwwLTg4LDB2NEg0MEExMiwxMiwwLDAsMCwyOCw4MFYyMDBhMTIsMTIsMCwwLDAsMTIsMTJIMjE2YTEyLDEyLDAsMCwwLDEyLTEyVjgwQTEyLDEyLDAsMCwwLDIxNiw2OFpNOTIsNjRhMzYsMzYsMCwwLDEsNzIsMHY0SDkyWk0yMjAsMjAwYTQsNCwwLDAsMS00LDRINDBhNCw0LDAsMCwxLTQtNFY4MGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
export function PhBagSimpleThinIcon(props: PhBagSimpleThinIconProps) {
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
      <path d="M216,68H172V64a44,44,0,0,0-88,0v4H40A12,12,0,0,0,28,80V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V80A12,12,0,0,0,216,68ZM92,64a36,36,0,0,1,72,0v4H92ZM220,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
