import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryChargingThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNjBIMzJBMjAsMjAsMCwwLDAsMTIsODB2OTZhMjAsMjAsMCwwLDAsMjAsMjBIMjAwYTIwLDIwLDAsMCwwLDIwLTIwVjgwQTIwLDIwLDAsMCwwLDIwMCw2MFptMTIsMTE2YTEyLDEyLDAsMCwxLTEyLDEySDMyYTEyLDEyLDAsMCwxLTEyLTEyVjgwQTEyLDEyLDAsMCwxLDMyLDY4SDIwMGExMiwxMiwwLDAsMSwxMiwxMlptNDAtODB2NjRhNCw0LDAsMCwxLTgsMFY5NmE0LDQsMCwwLDEsOCwwWk0xMzUuNCwxMjUuOWE0LDQsMCwwLDEsLjE4LDMuODlsLTE2LDMyQTQsNCwwLDAsMSwxMTYsMTY0YTQuMTIsNC4xMiwwLDAsMS0xLjc5LS40Miw0LDQsMCwwLDEtMS43OS01LjM3TDEyNS41MywxMzJIMTAwYTQsNCwwLDAsMS0zLjU4LTUuNzlsMTYtMzJhNCw0LDAsMSwxLDcuMTYsMy41OEwxMDYuNDcsMTI0SDEzMkE0LDQsMCwwLDEsMTM1LjQsMTI1LjlaIi8+PC9zdmc+)
 */
export function PhBatteryChargingThinIcon(props: PhBatteryChargingThinIconProps) {
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
      <path d="M200,60H32A20,20,0,0,0,12,80v96a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V80A20,20,0,0,0,200,60Zm12,116a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V80A12,12,0,0,1,32,68H200a12,12,0,0,1,12,12Zm40-80v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0ZM135.4,125.9a4,4,0,0,1,.18,3.89l-16,32A4,4,0,0,1,116,164a4.12,4.12,0,0,1-1.79-.42,4,4,0,0,1-1.79-5.37L125.53,132H100a4,4,0,0,1-3.58-5.79l16-32a4,4,0,1,1,7.16,3.58L106.47,124H132A4,4,0,0,1,135.4,125.9Z"/>
    </svg>
  );
}
