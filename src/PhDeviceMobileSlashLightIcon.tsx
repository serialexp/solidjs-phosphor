import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceMobileSlashLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIuNDQsMjEyLDUyLjQ0LDM2QTYsNiwwLDAsMCw0My41Niw0NEw1OCw1OS45MlYyMTZhMjIsMjIsMCwwLDAsMjIsMjJoOTZhMjIsMjIsMCwwLDAsMjItMjJ2LTIuMDhsNS41Niw2LjEyYTYsNiwwLDAsMCw4Ljg4LTguMDhaTTE4NiwyMTZhMTAsMTAsMCwwLDEtMTAsMTBIODBhMTAsMTAsMCwwLDEtMTAtMTBWNzMuMTJsMTE2LDEyNy42Wk03MC43LDI0YTYsNiwwLDAsMSw2LTZIMTc2YTIyLDIyLDAsMCwxLDIyLDIyVjE1MC44M2E2LDYsMCwxLDEtMTIsMFY0MGExMCwxMCwwLDAsMC0xMC0xMEg3Ni43QTYsNiwwLDAsMSw3MC43LDI0WiIvPjwvc3ZnPg==)
 */
export function PhDeviceMobileSlashLightIcon(props: PhDeviceMobileSlashLightIconProps) {
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
      <path d="M212.44,212,52.44,36A6,6,0,0,0,43.56,44L58,59.92V216a22,22,0,0,0,22,22h96a22,22,0,0,0,22-22v-2.08l5.56,6.12a6,6,0,0,0,8.88-8.08ZM186,216a10,10,0,0,1-10,10H80a10,10,0,0,1-10-10V73.12l116,127.6ZM70.7,24a6,6,0,0,1,6-6H176a22,22,0,0,1,22,22V150.83a6,6,0,1,1-12,0V40a10,10,0,0,0-10-10H76.7A6,6,0,0,1,70.7,24Z"/>
    </svg>
  );
}
