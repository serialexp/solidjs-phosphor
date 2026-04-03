import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineUpLeftFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02NCwxNDRWNDhhOCw4LDAsMCwxLDgtOGg5NmE4LDgsMCwwLDEsNS42NiwxMy42NkwxMzEuMzEsOTZsNTguMzUsNTguMzRhOCw4LDAsMCwxLTExLjMyLDExLjMyTDEyMCwxMDcuMzEsNzcuNjYsMTQ5LjY2QTgsOCwwLDAsMSw2NCwxNDRabTE2MCw1Nkg0OGE4LDgsMCwwLDAsMCwxNkgyMjRhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 */
export function PhArrowLineUpLeftFillIcon(props: PhArrowLineUpLeftFillIconProps) {
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
      <path d="M64,144V48a8,8,0,0,1,8-8h96a8,8,0,0,1,5.66,13.66L131.31,96l58.35,58.34a8,8,0,0,1-11.32,11.32L120,107.31,77.66,149.66A8,8,0,0,1,64,144Zm160,56H48a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
