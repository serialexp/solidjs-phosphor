import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChartScatterLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMjA4YTYsNiwwLDAsMS02LDZIMzJhNiw2LDAsMCwxLTYtNlY0OGE2LDYsMCwwLDEsMTIsMFYyMDJIMjI0QTYsNiwwLDAsMSwyMzAsMjA4Wm0tOTgtNTBhMTAsMTAsMCwxLDAtMTAtMTBBMTAsMTAsMCwwLDAsMTMyLDE1OFptLTI0LTU2QTEwLDEwLDAsMSwwLDk4LDkyLDEwLDEwLDAsMCwwLDEwOCwxMDJaTTc2LDE3NGExMCwxMCwwLDEsMC0xMC0xMEExMCwxMCwwLDAsMCw3NiwxNzRabTk2LTQ4YTEwLDEwLDAsMSwwLTEwLTEwQTEwLDEwLDAsMCwwLDE3MiwxMjZabTI0LTQwYTEwLDEwLDAsMSwwLTEwLTEwQTEwLDEwLDAsMCwwLDE5Niw4NlptLTgsNjhhMTAsMTAsMCwxLDAsMTAsMTBBMTAsMTAsMCwwLDAsMTg4LDE1NFoiLz48L3N2Zz4=)
 */
export function PhChartScatterLightIcon(props: PhChartScatterLightIconProps) {
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
      <path d="M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V202H224A6,6,0,0,1,230,208Zm-98-50a10,10,0,1,0-10-10A10,10,0,0,0,132,158Zm-24-56A10,10,0,1,0,98,92,10,10,0,0,0,108,102ZM76,174a10,10,0,1,0-10-10A10,10,0,0,0,76,174Zm96-48a10,10,0,1,0-10-10A10,10,0,0,0,172,126Zm24-40a10,10,0,1,0-10-10A10,10,0,0,0,196,86Zm-8,68a10,10,0,1,0,10,10A10,10,0,0,0,188,154Z"/>
    </svg>
  );
}
