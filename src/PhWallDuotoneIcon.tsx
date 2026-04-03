import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWallDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTA0SDMyVjU2aDk2Wm00OCwwdjQ4SDEyOHY0OGg5NlYxMDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI0LDQ4SDMyYTgsOCwwLDAsMC04LDhWMjAwYTgsOCwwLDAsMCw4LDhIMjI0YTgsOCwwLDAsMCw4LThWNTZBOCw4LDAsMCwwLDIyNCw0OFpNODgsMTQ0VjExMmg4MHYzMlptLTQ4LDBWMTEySDcydjMyWm0xNDQtMzJoMzJ2MzJIMTg0Wm0zMi0xNkgxMzZWNjRoODBaTTEyMCw2NFY5Nkg0MFY2NFpNNDAsMTYwaDgwdjMySDQwWm05NiwzMlYxNjBoODB2MzJaIi8+PC9zdmc+)
 */
export function PhWallDuotoneIcon(props: PhWallDuotoneIconProps) {
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
      <path d="M128,104H32V56h96Zm48,0v48H128v48h96V104Z" opacity="0.2"/><path d="M224,48H32a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM88,144V112h80v32Zm-48,0V112H72v32Zm144-32h32v32H184Zm32-16H136V64h80ZM120,64V96H40V64ZM40,160h80v32H40Zm96,32V160h80v32Z"/>
    </svg>
  );
}
