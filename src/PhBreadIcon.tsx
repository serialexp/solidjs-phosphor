import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBreadIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsODBhNDAsNDAsMCwwLDAtNDAtNDBINDhhNDAsNDAsMCwwLDAtMTYsNzYuNjVWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlYxMTYuNjVBNDAuMDYsNDAuMDYsMCwwLDAsMjQwLDgwWk00OCwxMjBhOCw4LDAsMCwwLDAtMTYsMjQsMjQsMCwwLDEsMC00OGg5NmEyNCwyNCwwLDAsMSwwLDQ4LDgsOCwwLDAsMCwwLDE2djgwSDQ4Wm0xNTItMTZhOCw4LDAsMCwwLDAsMTZ2ODBIMTYwVjExNi42NUE0MCw0MCwwLDAsMCwxNzYsNTZoMjRhMjQsMjQsMCwwLDEsMCw0OFoiLz48L3N2Zz4=)
 */
export function PhBreadIcon(props: PhBreadIconProps) {
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
      <path d="M240,80a40,40,0,0,0-40-40H48a40,40,0,0,0-16,76.65V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V116.65A40.06,40.06,0,0,0,240,80ZM48,120a8,8,0,0,0,0-16,24,24,0,0,1,0-48h96a24,24,0,0,1,0,48,8,8,0,0,0,0,16v80H48Zm152-16a8,8,0,0,0,0,16v80H160V116.65A40,40,0,0,0,176,56h24a24,24,0,0,1,0,48Z"/>
    </svg>
  );
}
