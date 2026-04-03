import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhYinYangIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wk00MCwxMjhhODguMSw4OC4xLDAsMCwxLDg4LTg4LDQwLDQwLDAsMCwxLDAsODBBNTYsNTYsMCwwLDAsNzcuMzksMjAwLDg4LDg4LDAsMCwxLDQwLDEyOFptODgsODhhNDAsNDAsMCwwLDEsMC04MCw1Niw1NiwwLDAsMCw1MC42MS03OS45NUE4OCw4OCwwLDAsMSwxMjgsMjE2Wm0xMi00MGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxNDAsMTc2Wk0xMTYsODBhMTIsMTIsMCwxLDEsMTIsMTJBMTIsMTIsMCwwLDEsMTE2LDgwWiIvPjwvc3ZnPg==)
 */
export function PhYinYangIcon(props: PhYinYangIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88,40,40,0,0,1,0,80A56,56,0,0,0,77.39,200,88,88,0,0,1,40,128Zm88,88a40,40,0,0,1,0-80,56,56,0,0,0,50.61-79.95A88,88,0,0,1,128,216Zm12-40a12,12,0,1,1-12-12A12,12,0,0,1,140,176ZM116,80a12,12,0,1,1,12,12A12,12,0,0,1,116,80Z"/>
    </svg>
  );
}
