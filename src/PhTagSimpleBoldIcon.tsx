import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTagSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTAsMTIxLjM0LDIwNC4zNiw1Mi45MUEyMCwyMCwwLDAsMCwxODcuNzIsNDRINDBBMjAsMjAsMCwwLDAsMjAsNjRWMTkyYTIwLDIwLDAsMCwwLDIwLDIwSDE4Ny43MmEyMCwyMCwwLDAsMCwxNi42NC04LjkxTDI1MCwxMzQuNjZBMTIsMTIsMCwwLDAsMjUwLDEyMS4zNFpNMTg1LjU4LDE4OEg0NFY2OEgxODUuNThsNDAsNjBaIi8+PC9zdmc+)
 */
export function PhTagSimpleBoldIcon(props: PhTagSimpleBoldIconProps) {
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
      <path d="M250,121.34,204.36,52.91A20,20,0,0,0,187.72,44H40A20,20,0,0,0,20,64V192a20,20,0,0,0,20,20H187.72a20,20,0,0,0,16.64-8.91L250,134.66A12,12,0,0,0,250,121.34ZM185.58,188H44V68H185.58l40,60Z"/>
    </svg>
  );
}
