import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTornadoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMjI4YTEyLDEyLDAsMCwxLTEyLDEySDExNmExMiwxMiwwLDAsMSwwLTI0aDE2QTEyLDEyLDAsMCwxLDE0NCwyMjhaTTIyMCwzMkg2MGExMiwxMiwwLDAsMCwwLDI0LDEyLDEyLDAsMCwxLDAsMjRINDRhMTIsMTIsMCwwLDAsMCwyNEg3NmExMiwxMiwwLDAsMSwwLDI0LDEyLDEyLDAsMCwwLDAsMjRoNDhhMTIsMTIsMCwwLDEsMCwyNCwxMiwxMiwwLDAsMCwwLDI0aDQ4YTEyLDEyLDAsMCwwLDAtMjQsMTIsMTIsMCwwLDEsMC0yNGgxNmExMiwxMiwwLDAsMCwwLTI0SDE2NGExMiwxMiwwLDAsMSwwLTI0LDEyLDEyLDAsMCwwLDAtMjQsMTIsMTIsMCwwLDEsMC0yNGg1NmExMiwxMiwwLDAsMCwwLTI0WiIvPjwvc3ZnPg==)
 */
export function PhTornadoFillIcon(props: PhTornadoFillIconProps) {
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
      <path d="M144,228a12,12,0,0,1-12,12H116a12,12,0,0,1,0-24h16A12,12,0,0,1,144,228ZM220,32H60a12,12,0,0,0,0,24,12,12,0,0,1,0,24H44a12,12,0,0,0,0,24H76a12,12,0,0,1,0,24,12,12,0,0,0,0,24h48a12,12,0,0,1,0,24,12,12,0,0,0,0,24h48a12,12,0,0,0,0-24,12,12,0,0,1,0-24h16a12,12,0,0,0,0-24H164a12,12,0,0,1,0-24,12,12,0,0,0,0-24,12,12,0,0,1,0-24h56a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
