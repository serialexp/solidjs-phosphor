import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUserRectangleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZINDBBMjAsMjAsMCwwLDAsMjAsNTZWMjAwYTIwLDIwLDAsMCwwLDIwLDIwSDIxNmEyMCwyMCwwLDAsMCwyMC0yMFY1NkEyMCwyMCwwLDAsMCwyMTYsMzZaTTEwMCwxMjhhMjgsMjgsMCwxLDEsMjgsMjhBMjgsMjgsMCwwLDEsMTAwLDEyOFptMjgsNTJhNTkuNjYsNTkuNjYsMCwwLDEsNDAuODUsMTZIODcuMTVBNTkuNjYsNTkuNjYsMCwwLDEsMTI4LDE4MFptODQsMTZIMTk5LjU2QTgzLjQ2LDgzLjQ2LDAsMCwwLDE2NSwxNjQuNWE1Miw1MiwwLDEsMC03NCwwQTgzLjQ2LDgzLjQ2LDAsMCwwLDU2LjQ0LDE5Nkg0NFY2MEgyMTJaIi8+PC9zdmc+)
 */
export function PhUserRectangleBoldIcon(props: PhUserRectangleBoldIconProps) {
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
      <path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36ZM100,128a28,28,0,1,1,28,28A28,28,0,0,1,100,128Zm28,52a59.66,59.66,0,0,1,40.85,16H87.15A59.66,59.66,0,0,1,128,180Zm84,16H199.56A83.46,83.46,0,0,0,165,164.5a52,52,0,1,0-74,0A83.46,83.46,0,0,0,56.44,196H44V60H212Z"/>
    </svg>
  );
}
