import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCloudFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAuMDYsNDBBODguMSw4OC4xLDAsMCwwLDgxLjI5LDg4LjY3aDBBODcuNDgsODcuNDgsMCwwLDAsNzIsMTI3LjczLDguMTgsOC4xOCwwLDAsMSw2NC41NywxMzYsOCw4LDAsMCwxLDU2LDEyOGExMDMuNjYsMTAzLjY2LDAsMCwxLDUuMzQtMzIuOTIsNCw0LDAsMCwwLTQuNzUtNS4xOEE2NC4wOSw2NC4wOSwwLDAsMCw4LDE1MmMwLDM1LjE5LDI5Ljc1LDY0LDY1LDY0SDE2MGE4OC4wOSw4OC4wOSwwLDAsMCw4Ny45My05MS40OEMyNDYuMTEsNzcuNTQsMjA3LjA3LDQwLDE2MC4wNiw0MFoiLz48L3N2Zz4=)
 */
export function PhCloudFillIcon(props: PhCloudFillIconProps) {
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
      <path d="M160.06,40A88.1,88.1,0,0,0,81.29,88.67h0A87.48,87.48,0,0,0,72,127.73,8.18,8.18,0,0,1,64.57,136,8,8,0,0,1,56,128a103.66,103.66,0,0,1,5.34-32.92,4,4,0,0,0-4.75-5.18A64.09,64.09,0,0,0,8,152c0,35.19,29.75,64,65,64H160a88.09,88.09,0,0,0,87.93-91.48C246.11,77.54,207.07,40,160.06,40Z"/>
    </svg>
  );
}
