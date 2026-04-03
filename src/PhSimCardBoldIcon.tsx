import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSimCardBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYuNDksNzkuNTFsLTU2LTU2QTEyLDEyLDAsMCwwLDE1MiwyMEg1NkEyMCwyMCwwLDAsMCwzNiw0MFYyMTZhMjAsMjAsMCwwLDAsMjAsMjBIMjAwYTIwLDIwLDAsMCwwLDIwLTIwVjg4QTEyLDEyLDAsMCwwLDIxNi40OSw3OS41MVpNMTk2LDIxMkg2MFY0NGg4N2w0OSw0OVpNODgsMTEyYTEyLDEyLDAsMCwwLTEyLDEydjYwYTEyLDEyLDAsMCwwLDEyLDEyaDgwYTEyLDEyLDAsMCwwLDEyLTEyVjEyNGExMiwxMiwwLDAsMC0xMi0xMlptMTIsMjRoMTZ2MzZIMTAwWm01NiwzNkgxNDBWMTM2aDE2WiIvPjwvc3ZnPg==)
 */
export function PhSimCardBoldIcon(props: PhSimCardBoldIconProps) {
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
      <path d="M216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM196,212H60V44h87l49,49ZM88,112a12,12,0,0,0-12,12v60a12,12,0,0,0,12,12h80a12,12,0,0,0,12-12V124a12,12,0,0,0-12-12Zm12,24h16v36H100Zm56,36H140V136h16Z"/>
    </svg>
  );
}
