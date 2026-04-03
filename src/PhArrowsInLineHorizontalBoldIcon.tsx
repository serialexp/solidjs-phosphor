import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsInLineHorizontalBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsNDBWMjE2YTEyLDEyLDAsMCwxLTI0LDBWNDBhMTIsMTIsMCwwLDEsMjQsMFpNNjQuNDksODcuNTFhMTIsMTIsMCwwLDAtMTcsMTdMNTksMTE2SDE2YTEyLDEyLDAsMCwwLDAsMjRINTlMNDcuNTEsMTUxLjUxYTEyLDEyLDAsMCwwLDE3LDE3bDMyLTMyYTEyLDEyLDAsMCwwLDAtMTdaTTI0MCwxMTZIMTk3bDExLjUyLTExLjUxYTEyLDEyLDAsMCwwLTE3LTE3bC0zMiwzMmExMiwxMiwwLDAsMCwwLDE3bDMyLDMyYTEyLDEyLDAsMCwwLDE3LTE3TDE5NywxNDBoNDNhMTIsMTIsMCwwLDAsMC0yNFoiLz48L3N2Zz4=)
 */
export function PhArrowsInLineHorizontalBoldIcon(props: PhArrowsInLineHorizontalBoldIconProps) {
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
      <path d="M140,40V216a12,12,0,0,1-24,0V40a12,12,0,0,1,24,0ZM64.49,87.51a12,12,0,0,0-17,17L59,116H16a12,12,0,0,0,0,24H59L47.51,151.51a12,12,0,0,0,17,17l32-32a12,12,0,0,0,0-17ZM240,116H197l11.52-11.51a12,12,0,0,0-17-17l-32,32a12,12,0,0,0,0,17l32,32a12,12,0,0,0,17-17L197,140h43a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
