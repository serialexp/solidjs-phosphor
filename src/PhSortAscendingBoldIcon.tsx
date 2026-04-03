import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSortAscendingBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTI4YTEyLDEyLDAsMCwxLTEyLDEySDQ4YTEyLDEyLDAsMCwxLDAtMjRoNjhBMTIsMTIsMCwwLDEsMTI4LDEyOFpNNDgsNzZIMTgwYTEyLDEyLDAsMCwwLDAtMjRINDhhMTIsMTIsMCwwLDAsMCwyNFptNTIsMTA0SDQ4YTEyLDEyLDAsMCwwLDAsMjRoNTJhMTIsMTIsMCwwLDAsMC0yNFptMTMyLjQ5LTIwLjQ5YTEyLDEyLDAsMCwwLTE3LDBMMTk2LDE3OVYxMTJhMTIsMTIsMCwwLDAtMjQsMHY2N2wtMTkuNTEtMTkuNTJhMTIsMTIsMCwwLDAtMTcsMTdsNDAsNDBhMTIsMTIsMCwwLDAsMTcsMGw0MC00MEExMiwxMiwwLDAsMCwyMzIuNDksMTU5LjUxWiIvPjwvc3ZnPg==)
 */
export function PhSortAscendingBoldIcon(props: PhSortAscendingBoldIconProps) {
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
      <path d="M128,128a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24h68A12,12,0,0,1,128,128ZM48,76H180a12,12,0,0,0,0-24H48a12,12,0,0,0,0,24Zm52,104H48a12,12,0,0,0,0,24h52a12,12,0,0,0,0-24Zm132.49-20.49a12,12,0,0,0-17,0L196,179V112a12,12,0,0,0-24,0v67l-19.51-19.52a12,12,0,0,0-17,17l40,40a12,12,0,0,0,17,0l40-40A12,12,0,0,0,232.49,159.51Z"/>
    </svg>
  );
}
