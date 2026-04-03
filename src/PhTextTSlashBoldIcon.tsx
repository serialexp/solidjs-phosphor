import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextTSlashBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYuMDcsMjI0Ljg4YTEyLDEyLDAsMCwxLTE2Ljk1LS44MUwxNDAsMTU5djI5aDIwYTEyLDEyLDAsMCwxLDAsMjRIOTZhMTIsMTIsMCwwLDEsMC0yNGgyMFYxMzIuNjRMNjgsNzkuODRWODhhMTIsMTIsMCwwLDEtMjQsMFY1NmExMS43NSwxMS43NSwwLDAsMSwuMjMtMi4zMWwtNS4xMS01LjYyQTEyLDEyLDAsMSwxLDU2Ljg4LDMxLjkzbDE2MCwxNzZBMTIsMTIsMCwwLDEsMjE2LjA3LDIyNC44OFpNMTE2LDY4di41N2ExMiwxMiwwLDEsMCwyNCwwVjY4aDQ4Vjg4YTEyLDEyLDAsMCwwLDI0LDBWNTZhMTIsMTIsMCwwLDAtMTItMTJIMTE2LjZhMTIsMTIsMCwwLDAtLjYsMjRaIi8+PC9zdmc+)
 */
export function PhTextTSlashBoldIcon(props: PhTextTSlashBoldIconProps) {
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
      <path d="M216.07,224.88a12,12,0,0,1-16.95-.81L140,159v29h20a12,12,0,0,1,0,24H96a12,12,0,0,1,0-24h20V132.64L68,79.84V88a12,12,0,0,1-24,0V56a11.75,11.75,0,0,1,.23-2.31l-5.11-5.62A12,12,0,1,1,56.88,31.93l160,176A12,12,0,0,1,216.07,224.88ZM116,68v.57a12,12,0,1,0,24,0V68h48V88a12,12,0,0,0,24,0V56a12,12,0,0,0-12-12H116.6a12,12,0,0,0-.6,24Z"/>
    </svg>
  );
}
