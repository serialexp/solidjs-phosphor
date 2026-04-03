import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryLowFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Miw5NnY2NGE4LDgsMCwwLDEtOCw4SDQ4YTgsOCwwLDAsMS04LThWOTZhOCw4LDAsMCwxLDgtOEg2NEE4LDgsMCwwLDEsNzIsOTZaTTIyNCw4MHY5NmEyNCwyNCwwLDAsMS0yNCwyNEgzMkEyNCwyNCwwLDAsMSw4LDE3NlY4MEEyNCwyNCwwLDAsMSwzMiw1NkgyMDBBMjQsMjQsMCwwLDEsMjI0LDgwWm0tMTYsMGE4LDgsMCwwLDAtOC04SDMyYTgsOCwwLDAsMC04LDh2OTZhOCw4LDAsMCwwLDgsOEgyMDBhOCw4LDAsMCwwLDgtOFptNDAsOGE4LDgsMCwwLDAtOCw4djY0YTgsOCwwLDAsMCwxNiwwVjk2QTgsOCwwLDAsMCwyNDgsODhaIi8+PC9zdmc+)
 */
export function PhBatteryLowFillIcon(props: PhBatteryLowFillIconProps) {
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
      <path d="M72,96v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H64A8,8,0,0,1,72,96ZM224,80v96a24,24,0,0,1-24,24H32A24,24,0,0,1,8,176V80A24,24,0,0,1,32,56H200A24,24,0,0,1,224,80Zm-16,0a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8Zm40,8a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,248,88Z"/>
    </svg>
  );
}
