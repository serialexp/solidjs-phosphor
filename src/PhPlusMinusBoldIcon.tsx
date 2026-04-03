import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPlusMinusBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDguNDksNjQuNDlsLTE0NCwxNDRhMTIsMTIsMCwwLDEtMTctMTdsMTQ0LTE0NGExMiwxMiwwLDAsMSwxNywxN1pNNjAsMTEyYTEyLDEyLDAsMCwwLDI0LDBWODRoMjhhMTIsMTIsMCwwLDAsMC0yNEg4NFYzMmExMiwxMiwwLDAsMC0yNCwwVjYwSDMyYTEyLDEyLDAsMCwwLDAsMjRINjBabTE2NCw2MEgxNDRhMTIsMTIsMCwwLDAsMCwyNGg4MGExMiwxMiwwLDAsMCwwLTI0WiIvPjwvc3ZnPg==)
 */
export function PhPlusMinusBoldIcon(props: PhPlusMinusBoldIconProps) {
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
      <path d="M208.49,64.49l-144,144a12,12,0,0,1-17-17l144-144a12,12,0,0,1,17,17ZM60,112a12,12,0,0,0,24,0V84h28a12,12,0,0,0,0-24H84V32a12,12,0,0,0-24,0V60H32a12,12,0,0,0,0,24H60Zm164,60H144a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
