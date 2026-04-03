import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryPlusVerticalLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MCw4YTYsNiwwLDAsMSw2LTZoNjRhNiw2LDAsMCwxLDAsMTJIOTZBNiw2LDAsMCwxLDkwLDhaTTE5OCw1NlYyMjRhMjIsMjIsMCwwLDEtMjIsMjJIODBhMjIsMjIsMCwwLDEtMjItMjJWNTZBMjIsMjIsMCwwLDEsODAsMzRoOTZBMjIsMjIsMCwwLDEsMTk4LDU2Wm0tMTIsMGExMCwxMCwwLDAsMC0xMC0xMEg4MEExMCwxMCwwLDAsMCw3MCw1NlYyMjRhMTAsMTAsMCwwLDAsMTAsMTBoOTZhMTAsMTAsMCwwLDAsMTAtMTBabS0zMCw3OEgxMzRWMTEyYTYsNiwwLDAsMC0xMiwwdjIySDEwMGE2LDYsMCwwLDAsMCwxMmgyMnYyMmE2LDYsMCwwLDAsMTIsMFYxNDZoMjJhNiw2LDAsMCwwLDAtMTJaIi8+PC9zdmc+)
 */
export function PhBatteryPlusVerticalLightIcon(props: PhBatteryPlusVerticalLightIconProps) {
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
      <path d="M90,8a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,8ZM198,56V224a22,22,0,0,1-22,22H80a22,22,0,0,1-22-22V56A22,22,0,0,1,80,34h96A22,22,0,0,1,198,56Zm-12,0a10,10,0,0,0-10-10H80A10,10,0,0,0,70,56V224a10,10,0,0,0,10,10h96a10,10,0,0,0,10-10Zm-30,78H134V112a6,6,0,0,0-12,0v22H100a6,6,0,0,0,0,12h22v22a6,6,0,0,0,12,0V146h22a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
