import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCellSignalLowBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MiwxNTJ2NDhhMTIsMTIsMCwwLDEtMjQsMFYxNTJhMTIsMTIsMCwwLDEsMjQsMFpNNDAsMTgwYTEyLDEyLDAsMCwwLTEyLDEydjhhMTIsMTIsMCwwLDAsMjQsMHYtOEExMiwxMiwwLDAsMCw0MCwxODBaIi8+PC9zdmc+)
 */
export function PhCellSignalLowBoldIcon(props: PhCellSignalLowBoldIconProps) {
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
      <path d="M92,152v48a12,12,0,0,1-24,0V152a12,12,0,0,1,24,0ZM40,180a12,12,0,0,0-12,12v8a12,12,0,0,0,24,0v-8A12,12,0,0,0,40,180Z"/>
    </svg>
  );
}
