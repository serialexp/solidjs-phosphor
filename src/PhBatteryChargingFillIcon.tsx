import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryChargingFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTYsOTZ2NjRhOCw4LDAsMCwxLTE2LDBWOTZhOCw4LDAsMCwxLDE2LDBaTTIyNCw4MHY5NmEyNCwyNCwwLDAsMS0yNCwyNEgzMkEyNCwyNCwwLDAsMSw4LDE3NlY4MEEyNCwyNCwwLDAsMSwzMiw1NkgyMDBBMjQsMjQsMCwwLDEsMjI0LDgwWm0tODUuMTksNDMuNzlBOCw4LDAsMCwwLDEzMiwxMjBIMTEyLjk0bDEwLjIyLTIwLjQyYTgsOCwwLDEsMC0xNC4zMi03LjE2bC0xNiwzMkE4LDgsMCwwLDAsMTAwLDEzNmgxOS4wNmwtMTAuMjIsMjAuNDJhOCw4LDAsMCwwLDE0LjMyLDcuMTZsMTYtMzJBOCw4LDAsMCwwLDEzOC44MSwxMjMuNzlaIi8+PC9zdmc+)
 */
export function PhBatteryChargingFillIcon(props: PhBatteryChargingFillIconProps) {
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
      <path d="M256,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM224,80v96a24,24,0,0,1-24,24H32A24,24,0,0,1,8,176V80A24,24,0,0,1,32,56H200A24,24,0,0,1,224,80Zm-85.19,43.79A8,8,0,0,0,132,120H112.94l10.22-20.42a8,8,0,1,0-14.32-7.16l-16,32A8,8,0,0,0,100,136h19.06l-10.22,20.42a8,8,0,0,0,14.32,7.16l16-32A8,8,0,0,0,138.81,123.79Z"/>
    </svg>
  );
}
