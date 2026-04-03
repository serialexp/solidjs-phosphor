import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLightningFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuODUsMTI1LjQ2bC0xMTIsMTIwYTgsOCwwLDAsMS0xMy42OS03bDE0LjY2LTczLjMzTDQ1LjE5LDE0My40OWE4LDgsMCwwLDEtMy0xM2wxMTItMTIwYTgsOCwwLDAsMSwxMy42OSw3TDE1My4xOCw5MC45bDU3LjYzLDIxLjYxYTgsOCwwLDAsMSwzLDEyLjk1WiIvPjwvc3ZnPg==)
 */
export function PhLightningFillIcon(props: PhLightningFillIconProps) {
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
      <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"/>
    </svg>
  );
}
