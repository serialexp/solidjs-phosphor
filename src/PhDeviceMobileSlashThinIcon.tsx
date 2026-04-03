import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceMobileSlashThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEsMjEzLjMxLDUxLDM3LjMxQTQsNCwwLDAsMCw0NSw0Mi42OUw2MCw1OS4xNVYyMTZhMjAsMjAsMCwwLDAsMjAsMjBoOTZhMjAsMjAsMCwwLDAsMjAtMjB2LTcuMjVsOSw5Ljk0YTQsNCwwLDEsMCw1LjkyLTUuMzhaTTE4OCwyMTZhMTIsMTIsMCwwLDEtMTIsMTJIODBhMTIsMTIsMCwwLDEtMTItMTJWNjhMMTg4LDIwMFpNNzIuNywyNGE0LDQsMCwwLDEsNC00SDE3NmEyMCwyMCwwLDAsMSwyMCwyMFYxNTAuODNhNCw0LDAsMSwxLTgsMFY0MGExMiwxMiwwLDAsMC0xMi0xMkg3Ni43QTQsNCwwLDAsMSw3Mi43LDI0WiIvPjwvc3ZnPg==)
 */
export function PhDeviceMobileSlashThinIcon(props: PhDeviceMobileSlashThinIconProps) {
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
      <path d="M211,213.31,51,37.31A4,4,0,0,0,45,42.69L60,59.15V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20v-7.25l9,9.94a4,4,0,1,0,5.92-5.38ZM188,216a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V68L188,200ZM72.7,24a4,4,0,0,1,4-4H176a20,20,0,0,1,20,20V150.83a4,4,0,1,1-8,0V40a12,12,0,0,0-12-12H76.7A4,4,0,0,1,72.7,24Z"/>
    </svg>
  );
}
