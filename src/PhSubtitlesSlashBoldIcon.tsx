import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSubtitlesSlashBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OCwxMjhhMTIsMTIsMCwwLDEsMTItMTJINzZhMTIsMTIsMCwwLDEsMCwyNEg2MEExMiwxMiwwLDAsMSw0OCwxMjhabTE2OC44OCw3OS45M2ExMiwxMiwwLDEsMS0xNy43NiwxNi4xNGwtMTEtMTIuMDdIMzJhMjAsMjAsMCwwLDEtMjAtMjBWNjRBMjAsMjAsMCwwLDEsMzIsNDRoNC42OGExMiwxMiwwLDAsMSwyMC4yLTEyLjA3Wk0xNjYuMzMsMTg4bC0xMC45MS0xMkg2MGExMiwxMiwwLDAsMSwwLTI0aDczLjZsLTEwLjkxLTEySDExNmExMiwxMiwwLDAsMS0xMC4xLTE4LjQ3TDU3LjI0LDY4SDM2VjE4OFpNMjI0LDQ0SDExNi42YTEyLDEyLDAsMCwwLDAsMjRIMjIwVjE4Mi45NGExMiwxMiwwLDAsMCwyNCwwVjY0QTIwLDIwLDAsMCwwLDIyNCw0NFptLTI4LDk2YTEyLDEyLDAsMCwwLDAtMjRIMTgyLjA2YTEyLDEyLDAsMCwwLDAsMjRaIi8+PC9zdmc+)
 */
export function PhSubtitlesSlashBoldIcon(props: PhSubtitlesSlashBoldIconProps) {
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
      <path d="M48,128a12,12,0,0,1,12-12H76a12,12,0,0,1,0,24H60A12,12,0,0,1,48,128Zm168.88,79.93a12,12,0,1,1-17.76,16.14l-11-12.07H32a20,20,0,0,1-20-20V64A20,20,0,0,1,32,44h4.68a12,12,0,0,1,20.2-12.07ZM166.33,188l-10.91-12H60a12,12,0,0,1,0-24h73.6l-10.91-12H116a12,12,0,0,1-10.1-18.47L57.24,68H36V188ZM224,44H116.6a12,12,0,0,0,0,24H220V182.94a12,12,0,0,0,24,0V64A20,20,0,0,0,224,44Zm-28,96a12,12,0,0,0,0-24H182.06a12,12,0,0,0,0,24Z"/>
    </svg>
  );
}
