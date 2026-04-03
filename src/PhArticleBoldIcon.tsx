import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArticleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZINDBBMjAsMjAsMCwwLDAsMjAsNTZWMjAwYTIwLDIwLDAsMCwwLDIwLDIwSDIxNmEyMCwyMCwwLDAsMCwyMC0yMFY1NkEyMCwyMCwwLDAsMCwyMTYsMzZabS00LDE2MEg0NFY2MEgyMTJaTTY4LDkyQTEyLDEyLDAsMCwxLDgwLDgwaDk2YTEyLDEyLDAsMCwxLDAsMjRIODBBMTIsMTIsMCwwLDEsNjgsOTJabTAsMzZhMTIsMTIsMCwwLDEsMTItMTJoOTZhMTIsMTIsMCwwLDEsMCwyNEg4MEExMiwxMiwwLDAsMSw2OCwxMjhabTAsMzZhMTIsMTIsMCwwLDEsMTItMTJoOTZhMTIsMTIsMCwwLDEsMCwyNEg4MEExMiwxMiwwLDAsMSw2OCwxNjRaIi8+PC9zdmc+)
 */
export function PhArticleBoldIcon(props: PhArticleBoldIconProps) {
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
      <path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,160H44V60H212ZM68,92A12,12,0,0,1,80,80h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,92Zm0,36a12,12,0,0,1,12-12h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,128Zm0,36a12,12,0,0,1,12-12h96a12,12,0,0,1,0,24H80A12,12,0,0,1,68,164Z"/>
    </svg>
  );
}
