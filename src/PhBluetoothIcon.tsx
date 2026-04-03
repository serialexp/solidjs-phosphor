import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBluetoothIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYuOCwxNjkuNiwxNDEuMzMsMTI4LDE5Ni44LDg2LjRhOCw4LDAsMCwwLDAtMTIuOGwtNjQtNDhBOCw4LDAsMCwwLDEyMCwzMnY4MEw2OC44LDczLjZhOCw4LDAsMCwwLTkuNiwxMi44TDExNC42NywxMjgsNTkuMiwxNjkuNmE4LDgsMCwxLDAsOS42LDEyLjhMMTIwLDE0NHY4MGE4LDgsMCwwLDAsMTIuOCw2LjRsNjQtNDhhOCw4LDAsMCwwLDAtMTIuOFpNMTM2LDQ4bDQyLjY3LDMyTDEzNiwxMTJabTAsMTYwVjE0NGw0Mi42NywzMloiLz48L3N2Zz4=)
 */
export function PhBluetoothIcon(props: PhBluetoothIconProps) {
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
      <path d="M196.8,169.6,141.33,128,196.8,86.4a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,120,32v80L68.8,73.6a8,8,0,0,0-9.6,12.8L114.67,128,59.2,169.6a8,8,0,1,0,9.6,12.8L120,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM136,48l42.67,32L136,112Zm0,160V144l42.67,32Z"/>
    </svg>
  );
}
