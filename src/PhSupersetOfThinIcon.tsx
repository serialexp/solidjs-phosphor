import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSupersetOfThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMjAwYTQsNCwwLDAsMS00LDRINTZhNCw0LDAsMCwxLDAtOEgyMDhBNCw0LDAsMCwxLDIxMiwyMDBabS02MC00NEg1NmE0LDQsMCwwLDAsMCw4aDk2YTYwLDYwLDAsMCwwLDAtMTIwSDU2YTQsNCwwLDAsMCwwLDhoOTZhNTIsNTIsMCwwLDEsMCwxMDRaIi8+PC9zdmc+)
 */
export function PhSupersetOfThinIcon(props: PhSupersetOfThinIconProps) {
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
      <path d="M212,200a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H208A4,4,0,0,1,212,200Zm-60-44H56a4,4,0,0,0,0,8h96a60,60,0,0,0,0-120H56a4,4,0,0,0,0,8h96a52,52,0,0,1,0,104Z"/>
    </svg>
  );
}
