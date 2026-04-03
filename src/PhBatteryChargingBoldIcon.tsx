import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryChargingBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsNTJIMjhBMjgsMjgsMCwwLDAsMCw4MHY5NmEyOCwyOCwwLDAsMCwyOCwyOEgxOTZhMjgsMjgsMCwwLDAsMjgtMjhWODBBMjgsMjgsMCwwLDAsMTk2LDUyWm00LDEyNGE0LDQsMCwwLDEtNCw0SDI4YTQsNCwwLDAsMS00LTRWODBhNCw0LDAsMCwxLDQtNEgxOTZhNCw0LDAsMCwxLDQsNFptNTYtNzJ2NDhhMTIsMTIsMCwwLDEtMjQsMFYxMDRhMTIsMTIsMCwwLDEsMjQsMFpNMTQyLjM4LDEyMmExMiwxMiwwLDAsMSwwLDEybC0xNiwyOGExMiwxMiwwLDEsMS0yMC44NC0xMS45TDExMS4zMiwxNDBIMTAwYTEyLDEyLDAsMCwxLTEwLjQyLTE4bDE2LTI4QTEyLDEyLDAsMCwxLDEyNi40MiwxMDZsLTUuNzQsMTBIMTMyQTEyLDEyLDAsMCwxLDE0Mi4zOCwxMjJaIi8+PC9zdmc+)
 */
export function PhBatteryChargingBoldIcon(props: PhBatteryChargingBoldIconProps) {
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
      <path d="M196,52H28A28,28,0,0,0,0,80v96a28,28,0,0,0,28,28H196a28,28,0,0,0,28-28V80A28,28,0,0,0,196,52Zm4,124a4,4,0,0,1-4,4H28a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H196a4,4,0,0,1,4,4Zm56-72v48a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0ZM142.38,122a12,12,0,0,1,0,12l-16,28a12,12,0,1,1-20.84-11.9L111.32,140H100a12,12,0,0,1-10.42-18l16-28A12,12,0,0,1,126.42,106l-5.74,10H132A12,12,0,0,1,142.38,122Z"/>
    </svg>
  );
}
