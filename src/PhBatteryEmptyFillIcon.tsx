import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryEmptyFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNTZIMzJBMjQsMjQsMCwwLDAsOCw4MHY5NmEyNCwyNCwwLDAsMCwyNCwyNEgyMDBhMjQsMjQsMCwwLDAsMjQtMjRWODBBMjQsMjQsMCwwLDAsMjAwLDU2Wm04LDEyMGE4LDgsMCwwLDEtOCw4SDMyYTgsOCwwLDAsMS04LThWODBhOCw4LDAsMCwxLDgtOEgyMDBhOCw4LDAsMCwxLDgsOFptNDgtODB2NjRhOCw4LDAsMCwxLTE2LDBWOTZhOCw4LDAsMCwxLDE2LDBaIi8+PC9zdmc+)
 */
export function PhBatteryEmptyFillIcon(props: PhBatteryEmptyFillIconProps) {
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
      <path d="M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm8,120a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8Zm48-80v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
