import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNDksMTA0LjQ5bC05Niw5NmExMiwxMiwwLDAsMS0xNywwTDM2LDEwOXY0M2ExMiwxMiwwLDAsMS0yNCwwVjgwQTEyLDEyLDAsMCwxLDI0LDY4SDk2YTEyLDEyLDAsMCwxLDAsMjRINTNsODMsODMsODcuNTEtODcuNTJhMTIsMTIsMCwwLDEsMTcsMTdaIi8+PC9zdmc+)
 */
export function PhArrowElbowLeftBoldIcon(props: PhArrowElbowLeftBoldIconProps) {
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
      <path d="M240.49,104.49l-96,96a12,12,0,0,1-17,0L36,109v43a12,12,0,0,1-24,0V80A12,12,0,0,1,24,68H96a12,12,0,0,1,0,24H53l83,83,87.51-87.52a12,12,0,0,1,17,17Z"/>
    </svg>
  );
}
