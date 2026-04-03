import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryWarningFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNTZIMzJBMjQsMjQsMCwwLDAsOCw4MHY5NmEyNCwyNCwwLDAsMCwyNCwyNEgyMDBhMjQsMjQsMCwwLDAsMjQtMjRWODBBMjQsMjQsMCwwLDAsMjAwLDU2Wk0xMDgsODhhOCw4LDAsMCwxLDE2LDB2NDBhOCw4LDAsMCwxLTE2LDBabTgsODhhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTE2LDE3NlpNMjU2LDk2djY0YTgsOCwwLDAsMS0xNiwwVjk2YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 */
export function PhBatteryWarningFillIcon(props: PhBatteryWarningFillIconProps) {
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
      <path d="M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56ZM108,88a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,116,176ZM256,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
