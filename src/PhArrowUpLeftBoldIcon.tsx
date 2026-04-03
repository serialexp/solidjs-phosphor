import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUpLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAuNDksMjAwLjQ5YTEyLDEyLDAsMCwxLTE3LDBMNzYsOTN2NzVhMTIsMTIsMCwwLDEtMjQsMFY2NEExMiwxMiwwLDAsMSw2NCw1MkgxNjhhMTIsMTIsMCwwLDEsMCwyNEg5M0wyMDAuNDksMTgzLjUxQTEyLDEyLDAsMCwxLDIwMC40OSwyMDAuNDlaIi8+PC9zdmc+)
 */
export function PhArrowUpLeftBoldIcon(props: PhArrowUpLeftBoldIconProps) {
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
      <path d="M200.49,200.49a12,12,0,0,1-17,0L76,93v75a12,12,0,0,1-24,0V64A12,12,0,0,1,64,52H168a12,12,0,0,1,0,24H93L200.49,183.51A12,12,0,0,1,200.49,200.49Z"/>
    </svg>
  );
}
