import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDresserBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsMTc2YTEyLDEyLDAsMCwxLTEyLDEySDEyMGExMiwxMiwwLDAsMSwwLTI0aDE2QTEyLDEyLDAsMCwxLDE0OCwxNzZaTTEyMCw5MmgxNmExMiwxMiwwLDAsMCwwLTI0SDEyMGExMiwxMiwwLDAsMCwwLDI0Wk0yMjAsNDBWMjE2YTIwLDIwLDAsMCwxLTIwLDIwSDU2YTIwLDIwLDAsMCwxLTIwLTIwVjQwQTIwLDIwLDAsMCwxLDU2LDIwSDIwMEEyMCwyMCwwLDAsMSwyMjAsNDBaTTYwLDQ0djcySDE5NlY0NFpNMTk2LDIxMlYxNDBINjB2NzJaIi8+PC9zdmc+)
 */
export function PhDresserBoldIcon(props: PhDresserBoldIconProps) {
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
      <path d="M148,176a12,12,0,0,1-12,12H120a12,12,0,0,1,0-24h16A12,12,0,0,1,148,176ZM120,92h16a12,12,0,0,0,0-24H120a12,12,0,0,0,0,24ZM220,40V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V40A20,20,0,0,1,56,20H200A20,20,0,0,1,220,40ZM60,44v72H196V44ZM196,212V140H60v72Z"/>
    </svg>
  );
}
