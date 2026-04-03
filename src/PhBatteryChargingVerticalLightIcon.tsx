import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryChargingVerticalLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDkuMSwxMzIuODVhNiw2LDAsMCwxLC4yNyw1LjgzbC0xNiwzMmE2LDYsMCwxLDEtMTAuNzQtNS4zNkwxMzQuMjksMTQySDExMmE2LDYsMCwwLDEtNS4zNy04LjY4bDE2LTMyYTYsNiwwLDAsMSwxMC43NCw1LjM2TDEyMS43MSwxMzBIMTQ0QTYsNiwwLDAsMSwxNDkuMSwxMzIuODVaTTk2LDE0aDY0YTYsNiwwLDAsMCwwLTEySDk2YTYsNiwwLDAsMCwwLDEyWk0xOTgsNTZWMjI0YTIyLDIyLDAsMCwxLTIyLDIySDgwYTIyLDIyLDAsMCwxLTIyLTIyVjU2QTIyLDIyLDAsMCwxLDgwLDM0aDk2QTIyLDIyLDAsMCwxLDE5OCw1NlptLTEyLDBhMTAsMTAsMCwwLDAtMTAtMTBIODBBMTAsMTAsMCwwLDAsNzAsNTZWMjI0YTEwLDEwLDAsMCwwLDEwLDEwaDk2YTEwLDEwLDAsMCwwLDEwLTEwWiIvPjwvc3ZnPg==)
 */
export function PhBatteryChargingVerticalLightIcon(props: PhBatteryChargingVerticalLightIconProps) {
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
      <path d="M149.1,132.85a6,6,0,0,1,.27,5.83l-16,32a6,6,0,1,1-10.74-5.36L134.29,142H112a6,6,0,0,1-5.37-8.68l16-32a6,6,0,0,1,10.74,5.36L121.71,130H144A6,6,0,0,1,149.1,132.85ZM96,14h64a6,6,0,0,0,0-12H96a6,6,0,0,0,0,12ZM198,56V224a22,22,0,0,1-22,22H80a22,22,0,0,1-22-22V56A22,22,0,0,1,80,34h96A22,22,0,0,1,198,56Zm-12,0a10,10,0,0,0-10-10H80A10,10,0,0,0,70,56V224a10,10,0,0,0,10,10h96a10,10,0,0,0,10-10Z"/>
    </svg>
  );
}
