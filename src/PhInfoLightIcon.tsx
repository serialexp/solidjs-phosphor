import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhInfoLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDIsMTc2YTYsNiwwLDAsMS02LDYsMTQsMTQsMCwwLDEtMTQtMTRWMTI4YTIsMiwwLDAsMC0yLTIsNiw2LDAsMCwxLDAtMTIsMTQsMTQsMCwwLDEsMTQsMTR2NDBhMiwyLDAsMCwwLDIsMkE2LDYsMCwwLDEsMTQyLDE3NlpNMTI0LDk0YTEwLDEwLDAsMSwwLTEwLTEwQTEwLDEwLDAsMCwwLDEyNCw5NFptMTA2LDM0QTEwMiwxMDIsMCwxLDEsMTI4LDI2LDEwMi4xMiwxMDIuMTIsMCwwLDEsMjMwLDEyOFptLTEyLDBhOTAsOTAsMCwxLDAtOTAsOTBBOTAuMSw5MC4xLDAsMCwwLDIxOCwxMjhaIi8+PC9zdmc+)
 */
export function PhInfoLightIcon(props: PhInfoLightIconProps) {
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
      <path d="M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"/>
    </svg>
  );
}
