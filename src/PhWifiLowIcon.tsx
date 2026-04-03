import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWifiLowIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsMjA0YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE0MCwyMDRabTMyLjcxLTQ1LjQ3YTc2LjA1LDc2LjA1LDAsMCwwLTg5LjQyLDAsOCw4LDAsMCwwLDkuNDIsMTIuOTQsNjAsNjAsMCwwLDEsNzAuNTgsMCw4LDgsMCwxLDAsOS40Mi0xMi45NFoiLz48L3N2Zz4=)
 */
export function PhWifiLowIcon(props: PhWifiLowIconProps) {
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
      <path d="M140,204a12,12,0,1,1-12-12A12,12,0,0,1,140,204Zm32.71-45.47a76.05,76.05,0,0,0-89.42,0,8,8,0,0,0,9.42,12.94,60,60,0,0,1,70.58,0,8,8,0,1,0,9.42-12.94Z"/>
    </svg>
  );
}
