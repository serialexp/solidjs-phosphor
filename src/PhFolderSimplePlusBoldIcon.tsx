import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFolderSimplePlusBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjhIMTMyTDEwNS4zMyw0OGEyMC4xMiwyMC4xMiwwLDAsMC0xMi00SDQwQTIwLDIwLDAsMCwwLDIwLDY0VjIwMGEyMCwyMCwwLDAsMCwyMCwyMEgyMTYuODlBMTkuMTMsMTkuMTMsMCwwLDAsMjM2LDIwMC44OVY4OEEyMCwyMCwwLDAsMCwyMTYsNjhabS00LDEyOEg0NFY2OEg5MmwyOC44LDIxLjZBMTIsMTIsMCwwLDAsMTI4LDkyaDg0Wm0tODQtODhhMTIsMTIsMCwwLDEsMTIsMTJ2MTJoMTJhMTIsMTIsMCwwLDEsMCwyNEgxNDB2MTJhMTIsMTIsMCwwLDEtMjQsMFYxNTZIMTA0YTEyLDEyLDAsMCwxLDAtMjRoMTJWMTIwQTEyLDEyLDAsMCwxLDEyOCwxMDhaIi8+PC9zdmc+)
 */
export function PhFolderSimplePlusBoldIcon(props: PhFolderSimplePlusBoldIconProps) {
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
      <path d="M216,68H132L105.33,48a20.12,20.12,0,0,0-12-4H40A20,20,0,0,0,20,64V200a20,20,0,0,0,20,20H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68Zm-4,128H44V68H92l28.8,21.6A12,12,0,0,0,128,92h84Zm-84-88a12,12,0,0,1,12,12v12h12a12,12,0,0,1,0,24H140v12a12,12,0,0,1-24,0V156H104a12,12,0,0,1,0-24h12V120A12,12,0,0,1,128,108Z"/>
    </svg>
  );
}
