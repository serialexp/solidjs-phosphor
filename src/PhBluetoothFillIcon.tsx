import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBluetoothFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTc2YTgsOCwwLDAsMS0zLjIsNi40bC02NCw0OEE4LDgsMCwwLDEsMTI4LDIzMmE4LDgsMCwwLDEtOC04VjE0NEw2OC44LDE4Mi40YTgsOCwwLDAsMS05LjYtMTIuOEwxMTQuNjcsMTI4LDU5LjIsODYuNGE4LDgsMCwwLDEsOS42LTEyLjhMMTIwLDExMlYzMmE4LDgsMCwwLDEsMTIuOC02LjRsNjQsNDhhOCw4LDAsMCwxLDAsMTIuOEwxNDEuMzMsMTI4bDU1LjQ3LDQxLjZBOCw4LDAsMCwxLDIwMCwxNzZaIi8+PC9zdmc+)
 */
export function PhBluetoothFillIcon(props: PhBluetoothFillIconProps) {
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
      <path d="M200,176a8,8,0,0,1-3.2,6.4l-64,48A8,8,0,0,1,128,232a8,8,0,0,1-8-8V144L68.8,182.4a8,8,0,0,1-9.6-12.8L114.67,128,59.2,86.4a8,8,0,0,1,9.6-12.8L120,112V32a8,8,0,0,1,12.8-6.4l64,48a8,8,0,0,1,0,12.8L141.33,128l55.47,41.6A8,8,0,0,1,200,176Z"/>
    </svg>
  );
}
