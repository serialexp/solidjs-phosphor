import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryPlusIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTI4YTgsOCwwLDAsMS04LDhIMTI0djIwYTgsOCwwLDAsMS0xNiwwVjEzNkg4OGE4LDgsMCwwLDEsMC0xNmgyMFYxMDBhOCw4LDAsMCwxLDE2LDB2MjBoMjBBOCw4LDAsMCwxLDE1MiwxMjhabTcyLTQ4djk2YTI0LDI0LDAsMCwxLTI0LDI0SDMyQTI0LDI0LDAsMCwxLDgsMTc2VjgwQTI0LDI0LDAsMCwxLDMyLDU2SDIwMEEyNCwyNCwwLDAsMSwyMjQsODBabS0xNiwwYTgsOCwwLDAsMC04LThIMzJhOCw4LDAsMCwwLTgsOHY5NmE4LDgsMCwwLDAsOCw4SDIwMGE4LDgsMCwwLDAsOC04Wm00MCw4YTgsOCwwLDAsMC04LDh2NjRhOCw4LDAsMCwwLDE2LDBWOTZBOCw4LDAsMCwwLDI0OCw4OFoiLz48L3N2Zz4=)
 */
export function PhBatteryPlusIcon(props: PhBatteryPlusIconProps) {
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
      <path d="M152,128a8,8,0,0,1-8,8H124v20a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h20V100a8,8,0,0,1,16,0v20h20A8,8,0,0,1,152,128Zm72-48v96a24,24,0,0,1-24,24H32A24,24,0,0,1,8,176V80A24,24,0,0,1,32,56H200A24,24,0,0,1,224,80Zm-16,0a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8Zm40,8a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,248,88Z"/>
    </svg>
  );
}
