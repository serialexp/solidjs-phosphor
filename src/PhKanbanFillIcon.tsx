import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhKanbanFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNTZ2OTZhOCw4LDAsMCwxLTgsOEgxMTJhOCw4LDAsMCwxLTgtOFY1NmE4LDgsMCwwLDEsOC04aDQwQTgsOCwwLDAsMSwxNjAsNTZabTY0LThIMTg0YTgsOCwwLDAsMC04LDh2NTJhNCw0LDAsMCwwLDQsNGg0OGE0LDQsMCwwLDAsNC00VjU2QTgsOCwwLDAsMCwyMjQsNDhabTQsODBIMTgwYTQsNCwwLDAsMC00LDR2NDRhMTYsMTYsMCwwLDAsMTYsMTZoMjRhMTYsMTYsMCwwLDAsMTYtMTZWMTMyQTQsNCwwLDAsMCwyMjgsMTI4Wk04MCw0OEg0MGE4LDgsMCwwLDAtOCw4djUyYTQsNCwwLDAsMCw0LDRIODRhNCw0LDAsMCwwLDQtNFY1NkE4LDgsMCwwLDAsODAsNDhabTQsODBIMzZhNCw0LDAsMCwwLTQsNHY3NmExNiwxNiwwLDAsMCwxNiwxNkg3MmExNiwxNiwwLDAsMCwxNi0xNlYxMzJBNCw0LDAsMCwwLDg0LDEyOFoiLz48L3N2Zz4=)
 */
export function PhKanbanFillIcon(props: PhKanbanFillIconProps) {
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
      <path d="M160,56v96a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h40A8,8,0,0,1,160,56Zm64-8H184a8,8,0,0,0-8,8v52a4,4,0,0,0,4,4h48a4,4,0,0,0,4-4V56A8,8,0,0,0,224,48Zm4,80H180a4,4,0,0,0-4,4v44a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V132A4,4,0,0,0,228,128ZM80,48H40a8,8,0,0,0-8,8v52a4,4,0,0,0,4,4H84a4,4,0,0,0,4-4V56A8,8,0,0,0,80,48Zm4,80H36a4,4,0,0,0-4,4v76a16,16,0,0,0,16,16H72a16,16,0,0,0,16-16V132A4,4,0,0,0,84,128Z"/>
    </svg>
  );
}
