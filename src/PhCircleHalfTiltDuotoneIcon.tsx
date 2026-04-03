import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCircleHalfTiltDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTUuODgsMTk1Ljg4YTk2LDk2LDAsMCwxLTEzNS43NiwwTDE5NS44OCw2MC4xMkE5Niw5NiwwLDAsMSwxOTUuODgsMTk1Ljg4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwMS41NCw1NC40NkExMDQsMTA0LDAsMCwwLDU0LjQ2LDIwMS41NCwxMDQsMTA0LDAsMCwwLDIwMS41NCw1NC40NlpNNjUuNzgsNjUuNzdBODguMDgsODguMDgsMCwwLDEsMTg0LjMsNjAuMzlMNjAuMzgsMTg0LjMxYTg4LDg4LDAsMCwxLDUuNC0xMTguNTRaTTE5MC4yMiwxOTAuMjNBODguMSw4OC4xLDAsMCwxLDcxLjcsMTk1LjYxTDE5NS42Miw3MS42OWE4OCw4OCwwLDAsMS01LjQsMTE4LjU0WiIvPjwvc3ZnPg==)
 */
export function PhCircleHalfTiltDuotoneIcon(props: PhCircleHalfTiltDuotoneIconProps) {
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
      <path d="M195.88,195.88a96,96,0,0,1-135.76,0L195.88,60.12A96,96,0,0,1,195.88,195.88Z" opacity="0.2"/><path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM65.78,65.77A88.08,88.08,0,0,1,184.3,60.39L60.38,184.31a88,88,0,0,1,5.4-118.54ZM190.22,190.23A88.1,88.1,0,0,1,71.7,195.61L195.62,71.69a88,88,0,0,1-5.4,118.54Z"/>
    </svg>
  );
}
