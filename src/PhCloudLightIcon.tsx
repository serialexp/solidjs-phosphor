import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCloudLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNDJBODYuMTEsODYuMTEsMCwwLDAsODIuNDMsOTAuODgsNjIsNjIsMCwxLDAsNzIsMjE0aDg4YTg2LDg2LDAsMCwwLDAtMTcyWm0wLDE2MEg3MmE1MCw1MCwwLDAsMSwwLTEwMCw1MC42Nyw1MC42NywwLDAsMSw1LjkxLjM1QTg1LjYxLDg1LjYxLDAsMCwwLDc0LDEyOGE2LDYsMCwwLDAsMTIsMCw3NCw3NCwwLDEsMSw3NCw3NFoiLz48L3N2Zz4=)
 */
export function PhCloudLightIcon(props: PhCloudLightIconProps) {
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
      <path d="M160,42A86.11,86.11,0,0,0,82.43,90.88,62,62,0,1,0,72,214h88a86,86,0,0,0,0-172Zm0,160H72a50,50,0,0,1,0-100,50.67,50.67,0,0,1,5.91.35A85.61,85.61,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,74,74Z"/>
    </svg>
  );
}
