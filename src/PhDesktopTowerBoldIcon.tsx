import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDesktopTowerBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsNzZhMTIsMTIsMCwwLDEsMTItMTJoMjRhMTIsMTIsMCwwLDEsMCwyNEgxODBBMTIsMTIsMCwwLDEsMTY4LDc2Wm0xMiw0OGgyNGExMiwxMiwwLDAsMCwwLTI0SDE4MGExMiwxMiwwLDAsMCwwLDI0Wm03Mi03NlYyMDhhMjAsMjAsMCwwLDEtMjAsMjBIMTUyYTIwLDIwLDAsMCwxLTIwLTIwVjE5MkgxMDB2MTJoOGExMiwxMiwwLDAsMSwwLDI0SDY4YTEyLDEyLDAsMCwxLDAtMjRoOFYxOTJIMzJBMjgsMjgsMCwwLDEsNCwxNjRWOTZBMjgsMjgsMCwwLDEsMzIsNjhIMTMyVjQ4YTIwLDIwLDAsMCwxLDIwLTIwaDgwQTIwLDIwLDAsMCwxLDI1Miw0OFpNMTMyLDE2OFY5MkgzMmE0LDQsMCwwLDAtNCw0djY4YTQsNCwwLDAsMCw0LDRaTTIyOCw1MkgxNTZWMjA0aDcyWk0xOTIsMTYwYTE2LDE2LDAsMSwwLDE2LDE2QTE2LDE2LDAsMCwwLDE5MiwxNjBaIi8+PC9zdmc+)
 */
export function PhDesktopTowerBoldIcon(props: PhDesktopTowerBoldIconProps) {
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
      <path d="M168,76a12,12,0,0,1,12-12h24a12,12,0,0,1,0,24H180A12,12,0,0,1,168,76Zm12,48h24a12,12,0,0,0,0-24H180a12,12,0,0,0,0,24Zm72-76V208a20,20,0,0,1-20,20H152a20,20,0,0,1-20-20V192H100v12h8a12,12,0,0,1,0,24H68a12,12,0,0,1,0-24h8V192H32A28,28,0,0,1,4,164V96A28,28,0,0,1,32,68H132V48a20,20,0,0,1,20-20h80A20,20,0,0,1,252,48ZM132,168V92H32a4,4,0,0,0-4,4v68a4,4,0,0,0,4,4ZM228,52H156V204h72ZM192,160a16,16,0,1,0,16,16A16,16,0,0,0,192,160Z"/>
    </svg>
  );
}
