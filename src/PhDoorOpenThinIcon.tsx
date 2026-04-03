import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDoorOpenThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjIwSDIwNFY0MGExMiwxMiwwLDAsMC0xMi0xMkg2NEExMiwxMiwwLDAsMCw1Miw0MFYyMjBIMjRhNCw0LDAsMCwwLDAsOEgyMzJhNCw0LDAsMCwwLDAtOFpNMTk2LDQwVjIyMEgxNzJWMzZoMjBBNCw0LDAsMCwxLDE5Niw0MFpNNjAsNDBhNCw0LDAsMCwxLDQtNEgxNjRWMjIwSDYwWm04MCw5MmE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxNDAsMTMyWiIvPjwvc3ZnPg==)
 */
export function PhDoorOpenThinIcon(props: PhDoorOpenThinIconProps) {
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
      <path d="M232,220H204V40a12,12,0,0,0-12-12H64A12,12,0,0,0,52,40V220H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM196,40V220H172V36h20A4,4,0,0,1,196,40ZM60,40a4,4,0,0,1,4-4H164V220H60Zm80,92a8,8,0,1,1-8-8A8,8,0,0,1,140,132Z"/>
    </svg>
  );
}
