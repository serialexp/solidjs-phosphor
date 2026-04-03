import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhComputerTowerFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjRINjRBMTYsMTYsMCwwLDAsNDgsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDE5MmExNiwxNiwwLDAsMCwxNi0xNlY0MEExNiwxNiwwLDAsMCwxOTIsMjRaTTEyOCwxOTJhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTI4LDE5MlptMzItODBIOTZhOCw4LDAsMCwxLDAtMTZoNjRhOCw4LDAsMCwxLDAsMTZabTAtMzJIOTZhOCw4LDAsMCwxLDAtMTZoNjRhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 */
export function PhComputerTowerFillIcon(props: PhComputerTowerFillIconProps) {
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
      <path d="M192,24H64A16,16,0,0,0,48,40V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V40A16,16,0,0,0,192,24ZM128,192a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm32-80H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
