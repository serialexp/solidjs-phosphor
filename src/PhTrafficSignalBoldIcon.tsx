import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrafficSignalBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTQwSDIwNFY4NGgxMmExMiwxMiwwLDAsMCwwLTI0SDIwNFY0MGEyMCwyMCwwLDAsMC0yMC0yMEg3MkEyMCwyMCwwLDAsMCw1Miw0MFY2MEg0MGExMiwxMiwwLDAsMCwwLDI0SDUydjU2SDQwYTEyLDEyLDAsMCwwLDAsMjRINTJ2NTJhMjAsMjAsMCwwLDAsMjAsMjBIMTg0YTIwLDIwLDAsMCwwLDIwLTIwVjE2NGgxMmExMiwxMiwwLDAsMCwwLTI0Wm0tMzYsNzJINzZWNDRIMTgwWm0tNTItOTJBMzIsMzIsMCwxLDAsOTYsODgsMzIsMzIsMCwwLDAsMTI4LDEyMFptMC00MGE4LDgsMCwxLDEtOCw4QTgsOCwwLDAsMSwxMjgsODBabTAsMTIwYTMyLDMyLDAsMSwwLTMyLTMyQTMyLDMyLDAsMCwwLDEyOCwyMDBabTAtNDBhOCw4LDAsMSwxLTgsOEE4LDgsMCwwLDEsMTI4LDE2MFoiLz48L3N2Zz4=)
 */
export function PhTrafficSignalBoldIcon(props: PhTrafficSignalBoldIconProps) {
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
      <path d="M216,140H204V84h12a12,12,0,0,0,0-24H204V40a20,20,0,0,0-20-20H72A20,20,0,0,0,52,40V60H40a12,12,0,0,0,0,24H52v56H40a12,12,0,0,0,0,24H52v52a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V164h12a12,12,0,0,0,0-24Zm-36,72H76V44H180Zm-52-92A32,32,0,1,0,96,88,32,32,0,0,0,128,120Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,128,80Zm0,120a32,32,0,1,0-32-32A32,32,0,0,0,128,200Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,128,160Z"/>
    </svg>
  );
}
