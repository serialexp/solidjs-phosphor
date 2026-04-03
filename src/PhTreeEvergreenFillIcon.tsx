import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTreeEvergreenFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuMTksMTk1LjUxQTgsOCwwLDAsMSwyMjQsMjAwSDEzNnY0MGE4LDgsMCwwLDEtMTYsMFYyMDBIMzJhOCw4LDAsMCwxLTYuMzEtMTIuOTFsNDYtNTkuMDlINDhhOCw4LDAsMCwxLTYuMzQtMTIuODhsODAtMTA0YTgsOCwwLDAsMSwxMi42OCwwbDgwLDEwNEE4LDgsMCwwLDEsMjA4LDEyOEgxODQuMzZsNDUuOTUsNTkuMDlBOCw4LDAsMCwxLDIzMS4xOSwxOTUuNTFaIi8+PC9zdmc+)
 */
export function PhTreeEvergreenFillIcon(props: PhTreeEvergreenFillIconProps) {
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
      <path d="M231.19,195.51A8,8,0,0,1,224,200H136v40a8,8,0,0,1-16,0V200H32a8,8,0,0,1-6.31-12.91l46-59.09H48a8,8,0,0,1-6.34-12.88l80-104a8,8,0,0,1,12.68,0l80,104A8,8,0,0,1,208,128H184.36l45.95,59.09A8,8,0,0,1,231.19,195.51Z"/>
    </svg>
  );
}
