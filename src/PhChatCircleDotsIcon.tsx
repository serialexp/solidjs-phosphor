import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatCircleDotsIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsMTI4YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE0MCwxMjhaTTg0LDExNmExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCw4NCwxMTZabTg4LDBhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTcyLDExNlptNjAsMTJBMTA0LDEwNCwwLDAsMSw3OS4xMiwyMTkuODJMNDUuMDcsMjMxLjE3YTE2LDE2LDAsMCwxLTIwLjI0LTIwLjI0bDExLjM1LTM0LjA1QTEwNCwxMDQsMCwxLDEsMjMyLDEyOFptLTE2LDBBODgsODgsMCwxLDAsNTEuODEsMTcyLjA2YTgsOCwwLDAsMSwuNjYsNi41NEw0MCwyMTYsNzcuNCwyMDMuNTNhNy44NSw3Ljg1LDAsMCwxLDIuNTMtLjQyLDgsOCwwLDAsMSw0LDEuMDhBODgsODgsMCwwLDAsMjE2LDEyOFoiLz48L3N2Zz4=)
 */
export function PhChatCircleDotsIcon(props: PhChatCircleDotsIconProps) {
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
      <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"/>
    </svg>
  );
}
