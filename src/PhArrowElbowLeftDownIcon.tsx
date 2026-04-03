import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftDownIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsNzJhOCw4LDAsMCwxLTgsOEg5NlYxOTYuNjlsMzQuMzQtMzQuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMybC00OCw0OGE4LDgsMCwwLDEtMTEuMzIsMGwtNDgtNDhhOCw4LDAsMCwxLDExLjMyLTExLjMyTDgwLDE5Ni42OVY3MmE4LDgsMCwwLDEsOC04SDIzMkE4LDgsMCwwLDEsMjQwLDcyWiIvPjwvc3ZnPg==)
 */
export function PhArrowElbowLeftDownIcon(props: PhArrowElbowLeftDownIconProps) {
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
      <path d="M240,72a8,8,0,0,1-8,8H96V196.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L80,196.69V72a8,8,0,0,1,8-8H232A8,8,0,0,1,240,72Z"/>
    </svg>
  );
}
