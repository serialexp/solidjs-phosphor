import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowRightDownDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTYwbC00OCw0OC00OC00OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzEuMzksMTU2Ljk0QTgsOCwwLDAsMCwyMjQsMTUySDE4NFY2NGE4LDgsMCwwLDAtOC04SDMyYTgsOCwwLDAsMCwwLDE2SDE2OHY4MEgxMjhhOCw4LDAsMCwwLTUuNjYsMTMuNjZsNDgsNDhhOCw4LDAsMCwwLDExLjMyLDBsNDgtNDhBOCw4LDAsMCwwLDIzMS4zOSwxNTYuOTRaTTE3NiwxOTYuNjksMTQ3LjMxLDE2OGg1Ny4zOFoiLz48L3N2Zz4=)
 */
export function PhArrowElbowRightDownDuotoneIcon(props: PhArrowElbowRightDownDuotoneIconProps) {
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
      <path d="M224,160l-48,48-48-48Z" opacity="0.2"/><path d="M231.39,156.94A8,8,0,0,0,224,152H184V64a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H168v80H128a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,231.39,156.94ZM176,196.69,147.31,168h57.38Z"/>
    </svg>
  );
}
