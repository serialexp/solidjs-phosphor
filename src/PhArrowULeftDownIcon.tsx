import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowULeftDownIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODh2ODhhOCw4LDAsMCwxLTE2LDBWODhhNDgsNDgsMCwwLDAtOTYsMFYyMDQuNjlsMzQuMzQtMzQuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMybC00OCw0OGE4LDgsMCwwLDEtMTEuMzIsMGwtNDgtNDhhOCw4LDAsMCwxLDExLjMyLTExLjMyTDgwLDIwNC42OVY4OGE2NCw2NCwwLDAsMSwxMjgsMFoiLz48L3N2Zz4=)
 */
export function PhArrowULeftDownIcon(props: PhArrowULeftDownIconProps) {
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
      <path d="M208,88v88a8,8,0,0,1-16,0V88a48,48,0,0,0-96,0V204.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L80,204.69V88a64,64,0,0,1,128,0Z"/>
    </svg>
  );
}
