import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhToolboxLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNjZIMTc0VjU2YTIyLDIyLDAsMCwwLTIyLTIySDEwNEEyMiwyMiwwLDAsMCw4Miw1NlY2NkgzMkExNCwxNCwwLDAsMCwxOCw4MFYxOTJhMTQsMTQsMCwwLDAsMTQsMTRIMjI0YTE0LDE0LDAsMCwwLDE0LTE0VjgwQTE0LDE0LDAsMCwwLDIyNCw2NlpNOTQsNTZhMTAsMTAsMCwwLDEsMTAtMTBoNDhhMTAsMTAsMCwwLDEsMTAsMTBWNjZIOTRaTTMyLDc4SDIyNGEyLDIsMCwwLDEsMiwydjM0SDE5MFYxMDRhNiw2LDAsMCwwLTEyLDB2MTBINzhWMTA0YTYsNiwwLDAsMC0xMiwwdjEwSDMwVjgwQTIsMiwwLDAsMSwzMiw3OFpNMjI0LDE5NEgzMmEyLDIsMCwwLDEtMi0yVjEyNkg2NnYxMGE2LDYsMCwwLDAsMTIsMFYxMjZIMTc4djEwYTYsNiwwLDAsMCwxMiwwVjEyNmgzNnY2NkEyLDIsMCwwLDEsMjI0LDE5NFoiLz48L3N2Zz4=)
 */
export function PhToolboxLightIcon(props: PhToolboxLightIconProps) {
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
      <path d="M224,66H174V56a22,22,0,0,0-22-22H104A22,22,0,0,0,82,56V66H32A14,14,0,0,0,18,80V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V80A14,14,0,0,0,224,66ZM94,56a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V66H94ZM32,78H224a2,2,0,0,1,2,2v34H190V104a6,6,0,0,0-12,0v10H78V104a6,6,0,0,0-12,0v10H30V80A2,2,0,0,1,32,78ZM224,194H32a2,2,0,0,1-2-2V126H66v10a6,6,0,0,0,12,0V126H178v10a6,6,0,0,0,12,0V126h36v66A2,2,0,0,1,224,194Z"/>
    </svg>
  );
}
