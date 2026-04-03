import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhResizeBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTA4SDQ4YTEyLDEyLDAsMCwwLTEyLDEydjg4YTEyLDEyLDAsMCwwLDEyLDEyaDg4YTEyLDEyLDAsMCwwLDEyLTEyVjEyMEExMiwxMiwwLDAsMCwxMzYsMTA4Wm0tMTIsODhINjBWMTMyaDY0Wm05Ni04djEyYTIwLDIwLDAsMCwxLTIwLDIwSDE4MGExMiwxMiwwLDAsMSwwLTI0aDE2di04YTEyLDEyLDAsMCwxLDI0LDBabTAtNzJ2MjRhMTIsMTIsMCwwLDEtMjQsMFYxMTZhMTIsMTIsMCwwLDEsMjQsMFptMC02MFY3MmExMiwxMiwwLDAsMS0yNCwwVjYwSDE4NGExMiwxMiwwLDAsMSwwLTI0aDE2QTIwLDIwLDAsMCwxLDIyMCw1NlptLTY4LThhMTIsMTIsMCwwLDEtMTIsMTJIMTE2YTEyLDEyLDAsMCwxLDAtMjRoMjRBMTIsMTIsMCwwLDEsMTUyLDQ4Wk0zNiw3NlY1NkEyMCwyMCwwLDAsMSw1NiwzNkg2OGExMiwxMiwwLDAsMSwwLDI0SDYwVjc2YTEyLDEyLDAsMCwxLTI0LDBaIi8+PC9zdmc+)
 */
export function PhResizeBoldIcon(props: PhResizeBoldIconProps) {
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
      <path d="M136,108H48a12,12,0,0,0-12,12v88a12,12,0,0,0,12,12h88a12,12,0,0,0,12-12V120A12,12,0,0,0,136,108Zm-12,88H60V132h64Zm96-8v12a20,20,0,0,1-20,20H180a12,12,0,0,1,0-24h16v-8a12,12,0,0,1,24,0Zm0-72v24a12,12,0,0,1-24,0V116a12,12,0,0,1,24,0Zm0-60V72a12,12,0,0,1-24,0V60H184a12,12,0,0,1,0-24h16A20,20,0,0,1,220,56Zm-68-8a12,12,0,0,1-12,12H116a12,12,0,0,1,0-24h24A12,12,0,0,1,152,48ZM36,76V56A20,20,0,0,1,56,36H68a12,12,0,0,1,0,24H60V76a12,12,0,0,1-24,0Z"/>
    </svg>
  );
}
