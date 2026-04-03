import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryLowDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODB2OTZhMTYsMTYsMCwwLDEtMTYsMTZIMzJhMTYsMTYsMCwwLDEtMTYtMTZWODBBMTYsMTYsMCwwLDEsMzIsNjRIMjAwQTE2LDE2LDAsMCwxLDIxNiw4MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDAsNTZIMzJBMjQsMjQsMCwwLDAsOCw4MHY5NmEyNCwyNCwwLDAsMCwyNCwyNEgyMDBhMjQsMjQsMCwwLDAsMjQtMjRWODBBMjQsMjQsMCwwLDAsMjAwLDU2Wm04LDEyMGE4LDgsMCwwLDEtOCw4SDMyYTgsOCwwLDAsMS04LThWODBhOCw4LDAsMCwxLDgtOEgyMDBhOCw4LDAsMCwxLDgsOFpNNjQsOTZ2NjRhOCw4LDAsMCwxLTE2LDBWOTZhOCw4LDAsMCwxLDE2LDBabTE5MiwwdjY0YTgsOCwwLDAsMS0xNiwwVjk2YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 */
export function PhBatteryLowDuotoneIcon(props: PhBatteryLowDuotoneIconProps) {
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
      <path d="M216,80v96a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V80A16,16,0,0,1,32,64H200A16,16,0,0,1,216,80Z" opacity="0.2"/><path d="M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm8,120a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8ZM64,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm192,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
