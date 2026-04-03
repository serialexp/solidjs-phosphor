import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWifiLowLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzgsMjA0YTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDEzOCwyMDRabTMzLjUzLTQzLjg1YTc0LDc0LDAsMCwwLTg3LjA2LDAsNiw2LDAsMCwwLDcuMDYsOS43LDYyLDYyLDAsMCwxLDcyLjk0LDAsNiw2LDAsMCwwLDguMzgtMS4zMkE2LDYsMCwwLDAsMTcxLjUzLDE2MC4xNVoiLz48L3N2Zz4=)
 */
export function PhWifiLowLightIcon(props: PhWifiLowLightIconProps) {
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
      <path d="M138,204a10,10,0,1,1-10-10A10,10,0,0,1,138,204Zm33.53-43.85a74,74,0,0,0-87.06,0,6,6,0,0,0,7.06,9.7,62,62,0,0,1,72.94,0,6,6,0,0,0,8.38-1.32A6,6,0,0,0,171.53,160.15Z"/>
    </svg>
  );
}
